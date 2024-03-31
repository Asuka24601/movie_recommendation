<template>
  <div class="avatar">
    <el-popover placement="top" :width="100" trigger="click">
      <template #reference>
        <el-col :span="12">
          <el-badge class="item" :max="99" :show-zero="false" :value="get_user_info.message_count">
            <el-avatar :size="50" :src="get_user_info.avatar"></el-avatar>
          </el-badge>
          <div>
            <el-button type="text" style="color: #000000">{{ get_user_info.name }}</el-button>
          </div>
        </el-col>
      </template>
      <el-row :gutter="30" :align="'middle'" :justify="'center'" class="user_info_menu">
        <div v-if="user_info_isLogin">
          <el-col :span="12">
            <el-row>
              <el-col :span="24">
                <router-link :to="'/personal/'+this.$store.state.user_info.user_id">
                  <el-button type="text" style="color: #000000">
                    <el-icon>
                      <User />
                    </el-icon>
                    <span>
                      {{ '个人中心' }}
                    </span>
                  </el-button>
                </router-link>
              </el-col>
            </el-row>
            <el-row>
              <el-col :span="24">
                <el-button type="text" style="color: #000000">
                  <el-icon>
                    <Message />
                  </el-icon>
                  <span>
                    {{ '消息' }}
                  </span>
                </el-button>
              </el-col>
            </el-row>
            <el-row>
              <el-col :span="24">
                <el-button type="text" @click="change_user_login" style="color: #000000">
                  <el-icon color="#ff7970">
                    <Close />
                  </el-icon>
                  <span>
                    {{ '退出登入' }}
                  </span>
                </el-button>
              </el-col>
            </el-row>
          </el-col>
        </div>
        <div v-else>
          <el-col :span="12">
            <el-row>
              <el-col :span="24">
                <el-button type="text" @click="change_user_login" style="color: #000000">
                  <el-icon color="#ff7970">
                    <User />
                  </el-icon>
                  <span>
                    {{ '登入/注册' }}
                  </span>
                </el-button>
              </el-col>
            </el-row>
          </el-col>
        </div>
      </el-row>
    </el-popover>
  </div>
</template>

<script lang="js">
export default {
  name: 'AvatarItemVue',
  methods: {
    change_user_login() {
      if (!this.$store.getters.get_user_info_login) {
        this.$router.push('/login')
        // useRouter().push('/login')
      }
      // else this.$store.commit('change_user_info_login')
    },
  },
  computed: {
    user_info_isLogin() {
      return this.$store.getters.get_user_info_login;
    },
    get_user_info() {
      return this.$store.getters.get_user_info;
    }
  }
}
</script>

<style lang="css" scoped>
.avatar {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 2vh;
}
</style>