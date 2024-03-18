<template>
  <div class="aside_menu">
    <div class="scrollbar">
      <el-scrollbar style="height: 100%;">
        <el-menu
                 default-active="2"
                 :collapse="aside_menu_isCollapsed"
                 @open="handleOpen"
                 @close="handleClose">

          <router-link to="/" class="menu-item">
            <el-menu-item index="1">
              <el-icon color="black">
                <House />
              </el-icon>
              <template #title>
                <span>Home</span>
              </template>
            </el-menu-item>
          </router-link>

          <el-sub-menu index="2">

            <template #title>
              <el-icon>
                <House />
              </el-icon>
              <span>电影</span>
            </template>
            <el-menu-item index="1-1">正在热映</el-menu-item>
            <el-menu-item index="1-2">即将上映</el-menu-item>
            <el-menu-item index="1-3">经典影片</el-menu-item>
          </el-sub-menu>

          <el-sub-menu index="3">

            <template #title>
              <el-icon>
                <House />
              </el-icon>
              <span>奖项/活动</span>
            </template>
            <el-menu-item index="3-1">金球奖</el-menu-item>
            <el-menu-item index="3-2">奥斯卡</el-menu-item>
            <el-menu-item index="3-3">戛纳电影节</el-menu-item>
          </el-sub-menu>
          <el-sub-menu index="4">

            <template #title>
              <el-icon>
                <House />
              </el-icon>
              <span>社区</span>
            </template>
            <el-menu-item index="4-1">个人中心</el-menu-item>
            <el-menu-item index="4-2">广场</el-menu-item>
            <el-menu-item index="4-3">电影圈</el-menu-item>
          </el-sub-menu>
          <el-sub-menu index="5">

            <template #title>
              <el-icon>
                <House />
              </el-icon>
              <span>更多</span>
            </template>
            <router-link to="/about" class="menu-item">
              <el-menu-item index="5-1">
                About
              </el-menu-item>
            </router-link>

            <el-menu-item index="5-2">联系我们</el-menu-item>
            <el-menu-item index="5-3">帮助</el-menu-item>
          </el-sub-menu>
        </el-menu>
      </el-scrollbar>
    </div>
    <el-button @click="change_isCollapse" style="border: none;">
      <div v-if="aside_menu_isCollapsed">
        <el-icon>
          <Expand />
        </el-icon>
      </div>
      <div v-else>
        <el-icon>
          <Fold />
        </el-icon>
      </div>
    </el-button>
  </div>



  <!-- <el-radio-group v-model="isCollapse" style="margin-top: 7vh">
    <el-radio-button :value="false">expand</el-radio-button>
    <el-radio-button :value="true">collapse</el-radio-button>
  </el-radio-group> -->

  <div class="avatar">
    <el-popover placement="top" :width="100" trigger="click">

      <template #reference>
        <el-col :span="12">
          <el-badge class="item" :max="99" :show-zero="false" :value="get_user_info.user_message_count">
            <el-avatar :size="50" :src="get_user_info.user_avatar"></el-avatar>
          </el-badge>
          <div>
            <el-button type="text" style="color: #000000">{{ get_user_info.user_name }}</el-button>
          </div>
        </el-col>
      </template>

      <el-row :gutter="30" :align="'middle'" :justify="'center'" class="user_info_menu">
        <div v-if="get_user_info.user_login">
          <el-col :span="12">
            <el-row>
              <el-col :span="24">
                <el-button type="text" style="color: #000000">
                  <el-icon>
                    <User />
                  </el-icon>
                  <span>
                    {{ '个人中心' }}
                  </span>
                </el-button>
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

  <!-- <el-button @click="change_isCollapse" style="margin-top: 7vh">
    <div v-if="aside_menu_isCollapsed">
      <el-icon>
        <Expand />
      </el-icon>
    </div>
    <div v-else>
      <el-icon>
        <Fold />
      </el-icon>
    </div>
  </el-button> -->
</template>

<script>
// import { useRouter } from 'vue-router';

export default {
  name: 'MenuVue',
  data() {
    return {
      user_info: this.$store.state.user_info,
    }
  },
  computed: {
    aside_menu_isCollapsed() {
      return this.$store.state.opentions.aside_menu_isCollapsed
    },
    user_info_isLogin() {
      return this.$store.getters.get_user_info_login;
    },
    get_user_info() {
      return this.$store.getters.get_user_info;
    }
  },
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath)
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath)
    },
    change_isCollapse() {
      this.$store.commit('change_aside_menu_isCollapsed')
    },
    change_user_login() {
      if (!this.$store.getters.get_user_info_login) {
        this.$router.push('/login')
        // useRouter().push('/login')
      }
      else this.$store.commit('change_user_info_login')
    },
  }
}
</script>

<style scoped>
.aside_menu {
  display: flex;
  flex-direction: row;
}

.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #333;
  color: #fff;
  padding: 10px 20px;
}

.menu {
  display: flex;
  flex-direction: column;
}

.menu-item {
  /* margin: 0 10px; */
  color: #000000;
  text-decoration: none;
}

.scrollbar {
  height: 80vh;
  overflow-y: hidden;
  overflow-x: hidden;
}

el-scrollbar {
  /* height: 100%; */
  overflow-y: hidden;
  overflow-x: hidden;
}

el-scrollbar.el-scrollbar__wrap {
  overflow-x: hidden;
  overflow-y: hidden;
}

.avatar {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 2vh;
}

/* .user_info_menu {
  
} */

/* .menu-item:hover {
  text-decoration: underline;
} */
</style>