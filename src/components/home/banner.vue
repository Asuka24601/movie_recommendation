<template>
  <el-container class="main-cont">
    <el-main class="left-side">
      <el-carousel trigger="click" @change="banner_change" height="auto" :autoplay="true" :loop="true">
        <el-carousel-item v-for="(item) in banner.items" :key="item" style="height: 50vh;">
          <HomeCarouselItemVue :item="item"></HomeCarouselItemVue>
        </el-carousel-item>
      </el-carousel>
    </el-main>
    <el-aside class="right-side">
      <el-container>
        <el-header style="padding-left: 0; height:20%">
          <span class="h0-title h3-title" style="font-size: 1.5rem; margin-bottom: -20px;">{{ '接下来' }}</span>
        </el-header>
        <el-main style="padding-left: 0;height:70%">
          <el-carousel height="auto"
                       trigger="click"
                       direction="vertical"
                       :autoplay="false"
                       arrow="never"
                       ref="side_carousel"
                       :initial-index="1"
                       type="card"
                       style="pointer-events: none;"
                       :loop="true">
            <el-carousel-item v-for="(item) in banner.items" :key="item" style="height: 50vh;">
              <NextCarouselItemVue :item="item"></NextCarouselItemVue>
            </el-carousel-item>
          </el-carousel>
        </el-main>
        <el-footer style="padding-left: 0;height:10%">
          <div class="getMore">
            <el-button type="text" size="small">{{ '查看更多' }} ></el-button>
          </div>
        </el-footer>
      </el-container>
    </el-aside>
  </el-container>
</template>

<script>
import NextCarouselItemVue from './carousel/nextCarouselItem.vue';
import HomeCarouselItemVue from './carousel/homeCarouselItem.vue';

export default {
  name: 'HomeBannerVue',
  data() {
    return {
      banner: {
        index: 0,
        items: [
          { title: 'sadhaosifhascasf-sda', subtitle: 'asfadfdsfsfc', poster: 'https://www.w3schools.com/w3images/la.jpg', pic: 'https://www.w3schools.com/w3images/la.jpg', timeCost: '152' },
          { title: 'sadhsd', subtitle: 'asfadfdsfsfc', poster: 'https://www.w3schools.com/w3images/ny.jpg', pic: 'https://www.w3schools.com/w3images/ny.jpg', timeCost: '152' },
          { title: 'sadha', subtitle: 'asfadfdsfsfc', poster: 'https://www.w3schools.com/w3images/chicago.jpg', pic: 'https://www.w3schools.com/w3images/chicago.jpg', timeCost: '152' },
          { title: 'sadhaosifhsda', subtitle: 'asfadfdsfsfc', poster: 'https://www.w3schools.com/w3images/la.jpg', pic: 'https://www.w3schools.com/w3images/la.jpg', timeCost: '152' },
          { title: 'sadhahascasf-sda', subtitle: 'asfadfdsfsfc', poster: 'https://www.w3schools.com/w3images/ny.jpg', pic: 'https://www.w3schools.com/w3images/ny.jpg', timeCost: '152' },
          { title: 'sadhcasf-sda', subtitle: 'asfadfdsfsfc', poster: 'https://www.w3schools.com/w3images/chicago.jpg', pic: 'https://www.w3schools.com/w3images/chicago.jpg', timeCost: '152' },
          { title: 'sf-sda', subtitle: 'asfadfdsfsfc', poster: 'https://www.w3schools.com/w3images/la.jpg', pic: 'https://www.w3schools.com/w3images/la.jpg', timeCost: '152' },
          { title: 'saifhascasf-sda', subtitle: 'asfadfdsfsfc', poster: 'https://www.w3schools.com/w3images/ny.jpg', pic: 'https://www.w3schools.com/w3images/ny.jpg', timeCost: '152' },
          { title: 'sadhao-sda', subtitle: 'asfadfdsfsfc', poster: 'https://www.w3schools.com/w3images/chicago.jpg', pic: 'https://www.w3schools.com/w3images/chicago.jpg', timeCost: '152' },
          { title: 'sadhsifa', subtitle: 'asfadfdsfsfc', poster: 'https://www.w3schools.com/w3images/la.jpg', pic: 'https://www.w3schools.com/w3images/la.jpg', timeCost: '152' },
        ]
      }
    };
  },
  components: {
    HomeCarouselItemVue,
    NextCarouselItemVue,
  },
  methods: {
    banner_change(curr, prev) {
      this.banner.index = curr;
      this.$refs.side_carousel.setActiveItem((curr + 1) % this.banner.items.length);
      return prev;
    },
  }
}
</script>

<style scoped>
.getMore {
  text-align: start;
  /* font-size: 2rem; */
}

.main-cont {
  height: 60vh;
  width: 100%;
}

.right-side {
  height: 100%;
  width: 30vw;
  /* background-color: aliceblue; */
}

.left-side {
  height: 100%;
  width: 70vw;
  /* background-color: aquamarine; */
}
</style>