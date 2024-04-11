<template>
  <div class="header">
    <div class="logo">
      <router-link to="/" class="logoTo">
        <span>Movie</span>
      </router-link>
    </div>
    <div class="switch">
      <div class="search">
        <el-button @click="dialogVisable = true" :icon="Search">搜索</el-button>
        <div>
          <el-dialog :title="'搜索'"
                     v-model="dialogVisable"
                     width="50%"
                     :close-on-click-modal="true"
                     :show-close="false">
            <el-form :model="itemForm">
              <el-form-item>
                <el-input placeholder="搜索电影、电视剧、演员等" v-model="itemForm.name"></el-input>
              </el-form-item>
            </el-form>
          </el-dialog>
        </div>
      </div>
      <div class="switchTheme">
        <el-switch
                   v-model="themeIsDark"
                   :active-value="false"
                   :inactive-value="true"
                   @change="changeStyle(themeIsDark)" />
      </div>
      <div class="switchLang">
        <el-popover
                    placement="bottom"
                    trigger="hover"
                    :width="100">
          <template #reference>
            <svg preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24" width="1.2em" height="1.2em">
              <path fill="black"
                    d="m18.5 10l4.4 11h-2.155l-1.201-3h-4.09l-1.199 3h-2.154L16.5 10h2zM10 2v2h6v2h-1.968a18.222 18.222 0 0 1-3.62 6.301a14.864 14.864 0 0 0 2.336 1.707l-.751 1.878A17.015 17.015 0 0 1 9 13.725a16.676 16.676 0 0 1-6.201 3.548l-.536-1.929a14.7 14.7 0 0 0 5.327-3.042A18.078 18.078 0 0 1 4.767 8h2.24A16.032 16.032 0 0 0 9 10.877a16.165 16.165 0 0 0 2.91-4.876L2 6V4h6V2h2zm7.5 10.885L16.253 16h2.492L17.5 12.885z">
              </path>
            </svg>
          </template>
          <el-row>
            <el-col :span="24">
              <el-button type="text">中文</el-button>
            </el-col>
            <el-col :span="24">
              <el-button type="text">English</el-button>
            </el-col>
          </el-row>
        </el-popover>
      </div>
    </div>
  </div>

</template>

<script>
import { Search } from '@element-plus/icons-vue'

export default {
  name: 'HeaderVue',
  data() {
    return {
      Search,
      themeIsDark: this.$store.state.themeIsDark,
      dialogVisable: false,
      itemForm: {
        name: ''
      }
    }
  },
  methods: {
    changeStyle(themeIsDark) {
      this.$store.commit('change_themeIsDark', themeIsDark)
    }
  },
}
</script>

<style scoped>
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  /* background-color: #333; */
  color: #fff;
  padding: 10px 20px;
}

.logo {
  color: #fff;
  background-color: #18c9f5;
  padding: 2px 5px;
}

.logoTo {
  color: #fff;
  font-weight: bold;
  font-size: 24px;
  text-decoration: none;
}

.search input {
  padding: 5px;
}

.switchTheme {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.switchLang {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.switch {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  /* margin: auto; */
}

.switch>* {
  margin: 0 10px;
}
</style>