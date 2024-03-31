<!-- eslint-disable vue/no-deprecated-slot-attribute -->
<template>
  <div>
    <el-dialog
               title="修改个人信息"
               v-model="dialogVisible"
               width="60%"
               :before-close="handleClose">
      <el-form :model="form" :rules="rules" ref="form" label-width="150px">
        <div class="updateinfo">
          <div class="left">
            <el-form-item label="头像" prop="avatar">
              <el-upload
                         class="avatar-uploader"
                         :action="form.avatar"
                         :show-file-list="false"
                         :on-success="handleAvatarSuccess"
                         :before-upload="beforeAvatarUpload">
                <el-avatar v-if="form.avatar" :src="form.avatar" shape="square" size="large"></el-avatar>
                <el-icon v-else class="avatar-uploader-icon">
                  <Plus />
                </el-icon>
              </el-upload>

            </el-form-item>
            <el-form-item label="密码" prop="password">
              <el-input v-model="form.password"></el-input>
            </el-form-item>
            <el-form-item label="昵称" prop="name">
              <el-input v-model="form.name"></el-input>
            </el-form-item>
            <el-form-item label="生日" prop="birthday">
              <el-input v-model="form.birthday"></el-input>
            </el-form-item>
            <el-form-item label="性别" prop="gender">
              <el-switch
                         v-model="form.gender"
                         active-color="#13ce66"
                         inactive-color="#ff4949"
                         active-text="男"
                         inactive-text="女"
                         :active-value="0"
                         :inactive-value="1">
              </el-switch>
            </el-form-item>
            <el-form-item label="邮箱" prop="email">
              <el-input v-model="form.email"></el-input>
            </el-form-item>

          </div>
          <div class="right">
            <el-form-item label="个性签名" prop="description">
              <el-input v-model="form.description"></el-input>
            </el-form-item>
            <el-form-item label="手机号码" prop="phone">
              <el-input v-model="form.phone"></el-input>
            </el-form-item>
          </div>
        </div>
      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button @click="handleClose">取 消</el-button>
        <el-button type="primary" @click="submit">提 交</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
import { userInfo, userUpdate } from "@/js/api/user.js";
import {ElMessage} from 'element-plus'

export default {
  name: "PersonalDiaVue",
  data() {
    return {
      dialogVisible: false,
      form: {
        avatar: String,
        password: "",
        name: String,
        descrption: String,
        birthday: Number,
        email: String,
        phone: String,
        gennder: Number,
      },
      rules: {
        name: [
          { required: true, message: "昵称不能为空", trigger: "blur" },
        ],
        // password: [
        //   { required: true, message: "账号密码不能为空", trigger: "blur" },
        // ],
      },
    };
  },
  mounted() {
    this.load();
  },
  methods: {
    open() {
      this.dialogVisible = true;
    },
    load() {
      userInfo(this.$store.state.user_info.user_id)
        .then((res) => {
          // console.log(res);
          Object.assign(this.form, res);
        })
        .catch((err) => {
          console.log(err);
        });
    },
    submit() {
      userUpdate(this.form)
        // eslint-disable-next-line no-unused-vars
        .then((res) => {
          // console.log(res);
          this.dialogVisible = false;
          this.$emit("flesh");
        })
        .catch((err) => {
          console.log(err);
        });
    },
    handleClose() {
      this.dialogVisible = false;
      this.$emit("flesh");
    },

    handleAvatarSuccess(
      response,
      uploadFile
    ){
      this.form.avatar = URL.createObjectURL(uploadFile.raw)
    },

    beforeAvatarUpload(rawFile){
      if (rawFile.type !== 'image/jpeg') {
        ElMessage.error('Avatar picture must be JPG format!')
        return false
      } else if (rawFile.size / 1024 / 1024 > 2) {
        ElMessage.error('Avatar picture size can not exceed 2MB!')
        return false
      }
      return true
    }
  },
};
</script>

<style scoped>
.updateinfo {
  height: 350px;
  overflow: auto;
}

.left {
  /* width: 330px; */
  float: left;
}

.right {
  overflow: hidden;
}

.avatar-uploader .el-upload {
  border: 1px dashed var(--el-border-color);
  border-radius: 6px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
  transition: var(--el-transition-duration-fast);
}

.avatar-uploader .el-upload:hover {
  border-color: var(--el-color-primary);
}

.el-icon.avatar-uploader-icon {
  font-size: 28px;
  color: #8c939d;
  width: 178px;
  height: 178px;
  text-align: center;
}
</style>
