<template>
  <el-container>
    <el-header>
      <span class="h0-title h1-title">{{ '今日推荐' }}</span>
    </el-header>
    <el-main style="width: 65%;">
      <featuredScrollListVue :monitorList="items" :listId="0" />
    </el-main>
  </el-container>
</template>

<script lang="js">
import featuredScrollListVue from './scrollList/featuredScrollList.vue';

export default {
  name: 'HomeFeaturedVue',
  data() {
    return {
      // value: new Date(),
      items: [{
        type: '清单',
        title: '这是清单',
        url: 'https://www.w3schools.com',
        pic: 'https://www.w3schools.com/w3images/la.jpg',
        getMore: '查看更多'
      }, {
        type: '图片',
        title: '这是图片',
        url: 'https://www.w3schools.com',
        pic: 'https://www.w3schools.com/w3images/la.jpg',
        getMore: '查看更多'
      }, {
        type: '海报',
        title: '这是海报',
        url: 'https://www.w3schools.com',
        pic: 'https://www.w3schools.com/w3images/la.jpg',
        getMore: '查看更多'
      }, {
        type: '清单',
        title: '这是电影节获奖电影',
        url: 'https://www.w3schools.com',
        pic: 'https://www.w3schools.com/w3images/la.jpg',
        getMore: '查看更多'
      },
      ]
    };
  },
  components: {
    featuredScrollListVue
  }
}
</script>

<style scoped>
.featured {
  display: flex;
  flex-direction: row;
  align-items: center;
  height: 100%;
  /* background-color: blue; */
}

.featured>* {
  width: 50%;
  height: 100%;
  margin: 0 0.5%;
}

.main-cont {
  height: 30vh;
  width: 100%;
}
</style>./scrollList/featuredScrollList.vue