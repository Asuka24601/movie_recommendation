<template>
  <el-card>
    <el-container style="background-color: white; color: black;">
      <el-asider style="width: 40%;">
        <el-image :src="item.poster_url" fit="cover" class="poster-img" />
      </el-asider>
      <el-main style="width: 60%;">
        <el-container>
          <el-header style="height: 50%;">
            <div class="hat">
              <el-icon class="hat-icon">
                <VideoPlay />
              </el-icon>
              <div class="hat-span">
                <span>{{ sec2min(item.duration) }}</span>
              </div>
            </div>
          </el-header>
          <el-main style="height: 50%;">
            <div class="mbody">
              <span>{{ item.title }}</span>
              <span>{{ item.subtitle }}</span>
            </div>
          </el-main>
        </el-container>
      </el-main>
    </el-container>
  </el-card>
</template>

<script lang="js">
import { sec2min } from '@/js/tool.js';

export default {
  name: 'NextCarouselItemVue',

  props: {
    item: Object
  },

  methods: {
    sec2min,
  },
};
</script>

<style scoped>
.poster-img {
  position: relative;
  width: 100%;
  height: 100%;
}

.poster-img:after {
  content: '';
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  display: inline-block;
  /* background: linear-gradient(to bottom, rgba(0, 0, 0, 0) 85%, rgb(0, 0, 0) 100%),
    linear-gradient(to top, rgba(0, 0, 0, 0) 85%, rgb(0, 0, 0) 100%),
    linear-gradient(to left, rgba(0, 0, 0, 0) 85%, rgb(0, 0, 0) 100%),
    linear-gradient(to right, rgba(0, 0, 0, 0) 85%, rgb(0, 0, 0) 100%); */
}

.hat {
  display: flex;
  flex-direction: row;
  height: 100%;
  text-align: start;
  align-items: center;
  font-size: 1.2rem;
}

.hat-span {
  margin-left: 10px;
  line-height: 0;
}

.hat-icon {
  font-size: 3rem;
}

.mbody {
  overflow: hidden;
  display: flex;
  flex-direction: column;
  height: 100%;
  text-align: start;
  padding: 10px;
  font-size: 1.5rem;
}

.mbody span:nth-child(2) {
  font-size: 1rem;
  margin-bottom: 20px;
}
</style>