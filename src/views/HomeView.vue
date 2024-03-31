<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div class="homeView">
    <HomeBannerVue></HomeBannerVue>

    <!-- <div class="barline"></div> -->

    <HomeFeaturedVue></HomeFeaturedVue>
    <HomeWatchlistVue></HomeWatchlistVue>
    <HomeExploreVue></HomeExploreVue>
    <HomeRecentVue></HomeRecentVue>
  </div>
</template>

<script setup>

import HomeBannerVue from '@/components/home/banner.vue'
import HomeFeaturedVue from '@/components/home/featured.vue'
import HomeWatchlistVue from '@/components/home/watchlist.vue'
import HomeExploreVue from '@/components/home/explore.vue'
import HomeRecentVue from '@/components/home/recent.vue'

</script>

<style>
.h0-title {
  display: block;
  text-align: start;
  width: 100%;
  font-weight: bold;
}

.h0-title.h1-title {
  font-size: 24px;
  margin-bottom: 20px;
}

.h0-title.h2-title {
  font-size: 20px;
  margin-bottom: 20px;
  border-left: 4px solid #f5c518;
  padding-left: 10px;
}

.h0-title.h3-title {
  font-size: 16px;
  margin-bottom: 20px;
}

.barline {
  height: 1px;
  width: 90%;
  background-color: #61616133;
  margin: 2rem auto;
}
</style>
