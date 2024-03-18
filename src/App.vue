<template>
  <el-container>
    <el-header style="height: 3vh;">
      <HeaderVue></HeaderVue>
    </el-header>
    <el-main style="height: 97vh;">
      <el-container>
        <el-aside width="10vw">
          <MenuVue></MenuVue>
        </el-aside>
        <el-main>
          <div style="height: 87vh;
                      overflow-y: hidden;
                      overflow-x: hidden;">
            <el-scrollbar style="height: 100%;">
              <router-view />
              <el-backtop :right="100" :bottom="100" />
            </el-scrollbar>
          </div>
        </el-main>
      </el-container>
    </el-main>
  </el-container>
</template>

<script>
import MenuVue from '@/components/Menu.vue'
import HeaderVue from '@/components/Header.vue'

export default {
  setup() {
    // 解决ERROR ResizeObserver loop completed with undelivered notifications.
    //问题的
    const debounce = (fn, delay) => {
      let timer = null;
      return function () {
        let context = this;
        let args = arguments;
        clearTimeout(timer);
        timer = setTimeout(function () {
          fn.apply(context, args);
        }, delay);
      };
    };
    // 解决ERROR ResizeObserver loop completed with undelivered notifications.
    const _ResizeObserver = window.ResizeObserver;
    window.ResizeObserver = class ResizeObserver extends _ResizeObserver {
      constructor(callback) {
        callback = debounce(callback, 16);
        super(callback);
      }
    };
  },

  name: 'App',
  components: {
    MenuVue,
    HeaderVue
  },
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
