<template>
  <el-container class="main-cont">
    <el-main class="left-side">
      <el-carousel trigger="click" 
        @change="banner_change" 
        height="auto" 
        :autoplay="true"
        ref="main_carousel" >
        <el-carousel-item v-for="(item) in banner.items" :key="item" style="height: 50vh;">
          <HomeCarouselItemVue :item="item"></HomeCarouselItemVue>
        </el-carousel-item>
      </el-carousel>
    </el-main>
    <el-aside class="right-side">
      <el-container style="height: 100%;">
        <el-header style="padding-left: 0; height:10%;margin-top: 1rem;position: relative;">
          <span class="h0-title h3-title" style="font-size: 1.5rem;">{{ '接下来' }}</span>
        </el-header>
        <el-main style="padding-left: 0;height:90%;position: relative; overflow: hidden; padding-top: unset;">
        <!-- <el-card style="height: max-content;"> -->
          <el-carousel trigger="click"
                       direction="vertical"
                       :autoplay="false"
                       arrow="never"
                       ref="side_carousel"
                       :initial-index="1"
                       type="card"
                       style="height: 105%;"
                       @change="side_banner_change">
            <el-carousel-item v-for="(item) in banner.items" :key="item" style="height: fit-content;">
              <NextCarouselItemVue :item="item"></NextCarouselItemVue>
            </el-carousel-item>
          </el-carousel>
          <!-- </el-card> -->
        </el-main>
        <!-- <el-footer style="padding-left: 0;height:7%;position: relative;">
          <div class="getMore">
            <el-button type="text" size="small">{{ '查看更多' }} ></el-button>
          </div>
        </el-footer> -->
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
      current: 0,
      banner: {
        index: 0,
        items: [
          { title: 'sadhaosifhascasf-sda', subtitle: 'asfadfdsfsfc', poster: 'https://www.w3schools.com/w3images/la.jpg', pic: 'https://www.w3schools.com/w3images/la.jpg', duration: '152' },
          { title: 'sadhsd', subtitle: 'asfadfdsfsfc', poster: 'https://www.w3schools.com/w3images/ny.jpg', pic: 'https://www.w3schools.com/w3images/ny.jpg', duration: '152' },
          { title: 'sadha', subtitle: 'asfadfdsfsfc', poster: 'https://www.w3schools.com/w3images/chicago.jpg', pic: 'https://www.w3schools.com/w3images/chicago.jpg', duration: '152' },
          { title: 'sadhaosifhsda', subtitle: 'asfadfdsfsfc', poster: 'https://www.w3schools.com/w3images/la.jpg', pic: 'https://www.w3schools.com/w3images/la.jpg', duration: '152' },
          { title: 'sadhahascasf-sda', subtitle: 'asfadfdsfsfc', poster: 'https://www.w3schools.com/w3images/ny.jpg', pic: 'https://www.w3schools.com/w3images/ny.jpg', duration: '152' },
          { title: 'sadhcasf-sda', subtitle: 'asfadfdsfsfc', poster: 'https://www.w3schools.com/w3images/chicago.jpg', pic: 'https://www.w3schools.com/w3images/chicago.jpg', duration: '152' },
          { title: 'sf-sda', subtitle: 'asfadfdsfsfc', poster: 'https://www.w3schools.com/w3images/la.jpg', pic: 'https://www.w3schools.com/w3images/la.jpg', duration: '152' },
          { title: 'saifhascasf-sda', subtitle: 'asfadfdsfsfc', poster: 'https://www.w3schools.com/w3images/ny.jpg', pic: 'https://www.w3schools.com/w3images/ny.jpg', duration: '152' },
          { title: 'sadhao-sda', subtitle: 'asfadfdsfsfc', poster: 'https://www.w3schools.com/w3images/chicago.jpg', pic: 'https://www.w3schools.com/w3images/chicago.jpg', duration: '152' },
          { title: 'sadhsifa', subtitle: 'asfadfdsfsfc', poster: 'https://www.w3schools.com/w3images/la.jpg', pic: 'https://www.w3schools.com/w3images/la.jpg', duration: '152' },
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
      const len = this.banner.items.length
      if (Math.abs(this.current-curr)===1||Math.abs(this.current-curr)===9) {
        this.$refs.side_carousel.setActiveItem((curr + 1) % len);
        this.current = curr
      }
      return prev;
    },

    side_banner_change(curr,prev) {
      const len = this.banner.items.length
      if (Math.abs(curr - this.current) === 2 || curr === this.current || Math.abs(curr - this.current) === 8) {
        this.current = (curr+(len-1))%len;
        this.$refs.main_carousel.setActiveItem(this.current)
      }
      return prev
    }
  }
}
</script>

<style scoped>
.getMore {
  text-align: start;
  /* font-size: 2rem; */
}

.main-cont {
  /* height: 60vh; */
  width: 100%;
}

.right-side {
  position: relative;
  width: 30%;
  /* background-color: aliceblue; */
}

.left-side {
  height: 100%;
  position: relative;
  width: 70%;
  /* background-color: aquamarine; */
}
</style>