<template>
  <div class="login-body">
    <!-- 登入 -->
    <div v-if="isLoginPanel && !isFrogetPassword" class="login-panel">
      <div class="login-title">用户登录</div>
      <el-form :model="formData" :rules="rules" ref="formDataRef">
        <el-form-item prop="username">
          <el-input placeholder="请输入邮箱" v-model="formData.email" size="large" type="text">
            <template #prefix>
              <el-icon>
                <i-ep-user />
              </el-icon>
            </template>
          </el-input>
        </el-form-item>
        <el-form-item prop="password">
          <el-input placeholder="请输入密码" v-model="formData.password" size="large" type="password">
            <template #prefix>
              <el-icon>
                <i-ep-lock />
              </el-icon>
            </template>
          </el-input>
        </el-form-item>
        <el-form-item label="">
          <el-button type="primary" style="width: 100%;" @click="login()" size="large">登录</el-button>
        </el-form-item>
      </el-form>
      <div class="opention-panel">
        <div>
          <el-button type="text" @click="changePanel()">注册</el-button>
        </div>
        <div>
          <el-button type="text" @click="changeForgetPasswordPanel()">忘记密码</el-button>
        </div>
      </div>
    </div>
    <!-- 注册 -->
    <div v-else-if="!isLoginPanel && !isFrogetPassword" class="regist-panel">
      <div class="login-title">用户注册</div>
      <el-form :model="registForm" :rules="registRules" ref="registFormRef">
        <el-form-item prop="username">
          <el-input placeholder="请输入用户名" v-model="registForm.name" size="large" type="text">
            <template #prefix>
              <el-icon>
                <i-ep-user />
              </el-icon>
            </template>
          </el-input>
        </el-form-item>
        <el-form-item prop="password">
          <el-input placeholder="请输入密码" v-model="registForm.password" size="large" type="password">
            <template #prefix>
              <el-icon>
                <i-ep-lock />
              </el-icon>
            </template>
          </el-input>
        </el-form-item>
        <el-form-item prop="checkpassword">
          <el-input placeholder="请再次输入密码" v-model="registForm.checkpassword" size="large" type="password">
            <template #prefix>
              <el-icon>
                <i-ep-lock />
              </el-icon>
            </template>
          </el-input>
        </el-form-item>
        <el-form-item prop="email">
          <el-input placeholder="请输入邮箱" v-model="registForm.email" size="large" type="text">
            <template #prefix>
              <el-icon>
                <i-ep-email />
              </el-icon>
            </template>
          </el-input>
        </el-form-item>
        <el-form-item label="">
          <el-button type="primary" style="width: 100%;" size="large" @click="regist()">注册</el-button>
        </el-form-item>
      </el-form>
      <div class="opention-panel">
        <div>
          <el-button type="text" @click="changePanel()">登录</el-button>
        </div>
        <div>
          <el-button type="text" @click="changeForgetPasswordPanel()">忘记密码</el-button>
        </div>
      </div>
    </div>
    <!-- 找回密码 -->
    <div v-else-if="isFrogetPassword" class="login-panel">
      <div class="login-title">找回密码</div>
      <el-form :model="forgetPasswordForm" :rules="forgetPasswordRules" ref="registFormRef">
        <el-form-item prop="username">
          <el-input placeholder="请输入用户ID" v-model="forgetPasswordForm.user_id" size="large" type="text">
            <template #prefix>
              <el-icon>
                <i-ep-user />
              </el-icon>
            </template>
          </el-input>
        </el-form-item>
        <el-form-item prop="email">
          <el-input placeholder="请输入邮箱" v-model="forgetPasswordForm.email" size="large" type="text">
            <template #prefix>
              <el-icon>
                <i-ep-email />
              </el-icon>
            </template>
          </el-input>
        </el-form-item>
        <el-form-item label="">
          <el-button type="primary" style="width: 100%;" size="large" @click="regist()">找回密码</el-button>
        </el-form-item>
      </el-form>
      <div class="opention-panel">
        <div>
          <el-button type="text" @click="changePanel(true)">登录</el-button>
        </div>
        <div>
          <el-button type="text" @click="changePanel(false)">注册</el-button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ElMessage } from 'element-plus';
import { checkEmail, checkPassword, checkUsername } from '@/js/tool';
import { userLogin,userRegister,userForget } from '@/js/api/user';

export default {
  data() {
    return {
      formData: {
        email: String,
        password: String
      },
      rules: {
        email: [{
          required: true,
          message: "请输入邮箱"
        }],
        password: [{
          required: true,
          message: "请输入密码"
        }],
      },
      isLoginPanel: true,
      isFrogetPassword: false,
      registForm: {
        name: String,
        password: String,
        checkpassword: String,
        email: String
      },
      registRules: {
        name: [{
          required: true,
          message: "请输入用户名"
        }],
        password: [{
          required: true,
          message: "请输入密码"
        }],
        checkpassword: [{
          required: true,
          message: "请再次输入密码"
        }],
        email: [{
          required: true,
          message: "请输入邮箱"
        }]
      },
      forgetPasswordForm: {
        user_id: String,
        email: String
      },
      forgetPasswordRules: {
        user_id: [{
          required: true,
          message: "请输入用户名"
        }],
        email: [{
          required: true,
          message: "请输入邮箱"
        }]
      }
    }
  },

  methods: {
    login() {
      console.log("login");
      if (!this.checkLoginForm()) {
        return;
      }
      var form_obj = JSON.parse(JSON.stringify(this.formData));
      userLogin(form_obj).then((res) => {
        if (res) {
          ElMessage({
            message: '登录成功',
            type: 'success',
          })
          let tokenObj = { token:res, startTime: new Date().getTime() };
          window.localStorage.setItem("isLogin", JSON.stringify(tokenObj));
          localStorage.setItem("email", JSON.parse(JSON.stringify(this.formData.email)));
          this.$store.commit('change_user_info', res);

          this.$router.replace('/')
        } else {
          ElMessage.error('账号或密码错误！！！登录失败！！！')
        }
      });
    },
    regist() {
      console.log("regist");
      if (!this.checkRegistForm()) {
        return;
      }
      var form_obj = JSON.parse(JSON.stringify(this.registForm));
      userRegister(form_obj).then(res => {
        if (res) {
          ElMessage({
            message: '注册成功',
            type: 'success',
          })
          this.changePanel();
          this.formData.email = this.registForm.email;
          this.formData.password = this.registForm.password;
        } else {
          ElMessage.error('注册失败！！！')
        }
      });
    },
    changePanel(val = null) {
      this.isFrogetPassword = false;
      if (val === null) this.isLoginPanel = !this.isLoginPanel;
      else this.isLoginPanel = val;
    },
    checkLoginForm() {
      // if (!checkEmail(this.formData.email)) {
      //   ElMessage.error('邮箱格式不正确！(4到16位,可以用字母,数字,下划线,减号)');
      //   return false;
      // }
      // if (!checkPassword(this.formData.password)) {
      //   ElMessage.error('密码格式不正确！(最少6位,最多16位)');
      //   return false;
      // }
      return true;
    },
    checkRegistForm() {
      if (!checkUsername(this.registForm.username)) {
        ElMessage.error('用户名格式不正确！(4到16位,可以用字母,数字,下划线,减号)');
        return false;
      }
      if (this.registForm.password != this.registForm.checkpassword) {
        ElMessage.error('两次密码不一致！');
        return false;
      }
      if (!checkPassword(this.registForm.password)) {
        ElMessage.error('密码格式不正确！(最少6位,最多16位)');
        return false;
      }
      if (!checkEmail(this.registForm.email)) {
        ElMessage.error('邮箱格式不正确！');
        return false;
      }
      return true;
    },
    checkForgetForm() {
      if (!checkEmail(this.forgetPasswordForm.email)) {
        ElMessage.error('邮箱格式不正确！');
        return false;
      }
      if (!checkUsername(this.forgetPasswordForm.username)) {
        ElMessage.error('用户名格式不正确！(4到16位,可以用字母,数字,下划线,减号)');
        return false;
      }
      return true;
    },
    forgetPassword() {
      console.log("forgetPassword");
      if (!this.checkForgetForm()) {
        return;
      }
      var form_obj = JSON.parse(JSON.stringify(this.forgetPasswordForm));
      userForget(form_obj).then((res)=>{
        if (res) ElMessage({
          message: '请查看邮箱',
          type: 'success',
        })
        else {
          ElMessage({
            message: '大失败！',
            type: 'error',
          })
        }
      })
    },
    changeForgetPasswordPanel() {
      this.isFrogetPassword = true;
    }
  },
}

</script>

<style scoped>
.login-body {
  /* background: url("../assets/test.png") no-repeat center center; */
  height: 100%;
  width: 100%;
  background-size: cover;
  background-color: white;
  position: absolute;
  left: 0;
  top: 0;
}

.login-panel,
.regist-panel {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
  padding: 25px;
  width: 26%;
  min-width: 460px;
  height: 30%;
  min-height: 300px;
  background: rgba(255, 255, 255, 0.6);
  border-radius: 5%;
  box-shadow: 2px 2px 10px #ddd;
}

.regist-panel {
  height: 40%;
}

.login-title,
.regist-title {
  font-size: 22px;
  text-align: center;
  margin-bottom: 22px;
}

.opention-panel {
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
}
</style>