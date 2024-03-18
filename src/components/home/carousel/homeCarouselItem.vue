<template>
  <div class="item-body">
    <div class="item-main">
      <img :src="item.pic" class="header-img">
    </div>
    <div class="sub-item">
      <div class="sub-aside">
        <img :src="item.poster" class="footer-img">
      </div>
      <div class="sub-main">
        <div>
          <el-icon class="icon-play">
            <VideoPlay />
          </el-icon>
        </div>
        <div>
          <span class="h0-title h1-title" text="2xl">{{ item.title }} <span style="font-size: 16px;margin-bottom: 20px;">{{
              sec2min(item.timeCost) }}</span></span>
          <span class="h0-title h3-title" text="2xl">{{ item.subtitle }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="js">
import { sec2min } from '@/js/tool.js';

export default {
  name: 'HomeCarouselItemVue',

  props: {
    item: Object
  },

  methods: {
    sec2min,
  },
};
</script>

<style scoped>
.item-body {
  height: 100%;
  width: 100%;
  /* grid-gap: 10px; */
}

.item-main {
  position: relative;
}

.item-main:after {
  content: '';
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  display: inline-block;
  background: linear-gradient(to bottom, rgba(0, 0, 0, 0) 60%, rgb(255, 255, 255) 70%);
}

.sub-item {
  position: absolute;
  left: 0;
  bottom: 0;
  display: flex;
  height: 100%;
  width: 100%;
  flex-direction: row;
  z-index: 2;
  /* border: 2px solid rgb(0, 255, 64); */
  color: #000000;
  text-overflow: ellipsis;
}

.sub-aside {
  width: 30%;
  /* border: 2px solid rgb(255, 0, 170); */
}

.sub-main {
  width: 70%;
  /* border: 2px solid rgb(0, 255, 64); */
  display: flex;
  flex-direction: row;
  justify-content: start;
  padding-left: 2vw;
}

.sub-main>div {
  position: relative;
  top: 70%;
}

.icon-play {
  font-size: 4vw;
  color: black;
}

.icon-play:hover {
  color: #f5c518;
}

.sub-main *.h1-title {
  font-size: 48px;
}

.header-img {
  position: relative;
  width: 100%;
  height: 100%;
  object-fit: cover;
  /* background-color: black; */
  z-index: -1;
}

.footer-img {
  position: relative;
  z-index: 2;
  object-fit: cover;
  background-color: black;
  top: 45%;
  margin-left: 30%;
  height: 50%;
  width: 70%;
  /* bottom: 7vh; */
}
</style>./homeCarouselItem.vue