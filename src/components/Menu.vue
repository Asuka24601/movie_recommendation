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
                <span>{{ '首页' }}</span>
              </template>
            </el-menu-item>
          </router-link>

          <el-sub-menu index="2">

            <template #title>
              <el-icon>
                <Film />
              </el-icon>
              <span>{{ '电影' }}</span>
            </template>
            <router-link to="/movies/populer" class="menu-item">
              <el-menu-item index="1-1">{{ '正在热映' }}</el-menu-item>
            </router-link>
            <router-link to="/movies/comingsoon" class="menu-item">
              <el-menu-item index="1-2">{{ '即将上映' }}</el-menu-item>
            </router-link>
            <router-link to="/movies" class="menu-item">
              <el-menu-item index="1-3">
                {{ '所有影片' }}
              </el-menu-item>
            </router-link>
          </el-sub-menu>

          <el-sub-menu index="3">

            <template #title>
              <el-icon>
                <Medal />
              </el-icon>
              <span>{{ '奖项/活动' }}</span>
            </template>
            <el-menu-item index="3-1">{{ '金球奖' }}</el-menu-item>
            <el-menu-item index="3-2">{{ '奥斯卡' }}</el-menu-item>
            <el-menu-item index="3-3">{{ '戛纳电影节' }}</el-menu-item>
            <router-link to="/activity" class="menu-item">
              <el-menu-item index="3-4">
                {{ '更多活动' }}
              </el-menu-item>
            </router-link>
          </el-sub-menu>
          <el-sub-menu index="4">

            <template #title>
              <el-icon>
                <Connection />
              </el-icon>
              <span>{{ '社区' }}</span>
            </template>
            <router-link to="/community" class="menu-item">
              <el-menu-item index="4-1">
                {{ '中央大厅' }}
              </el-menu-item>
            </router-link>
            <el-menu-item index="4-2">{{ '新闻部' }}</el-menu-item>
            <el-menu-item index="4-3">{{ '影星广场' }}</el-menu-item>
            <el-menu-item index="4-4">{{ '电影圈' }}</el-menu-item>
          </el-sub-menu>
          <el-sub-menu index="5">

            <template #title>
              <el-icon>
                <More />
              </el-icon>
              <span>{{ '更多' }}</span>
            </template>
            <router-link to="/about" class="menu-item">
              <el-menu-item index="5-1">
                {{ '关于' }}
              </el-menu-item>
            </router-link>

            <el-menu-item index="5-2">{{ '联系我们' }}</el-menu-item>
            <el-menu-item index="5-3">{{ '帮助' }}</el-menu-item>
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

  <avatarItemVue></avatarItemVue>

</template>

<script>
import avatarItemVue from './menu/avatarItem.vue'

export default {
  name: 'MenuVue',
  components: {
    avatarItemVue
  },
  data() {
    return {
      user_info: this.$store.state.user_info,
    }
  },
  computed: {
    aside_menu_isCollapsed() {
      return this.$store.state.opentions.aside_menu_isCollapsed
    },
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
</style>