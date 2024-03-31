<template>
  <el-container>
    <el-header>
      <span class="h0-title h1-title">{{'探索'}}</span>
    </el-header>
    <el-main>
      <el-col>
        <!-- 编辑精选 -->
        <el-container>
          <el-header style="padding-left: 0;">
            <RightArrowVue>{{'编辑精选'}}</RightArrowVue>
          </el-header>
          <el-main style="width: 100%;">
            <featuredScrollListVue :monitorList="pick_items" :listWidth="'133%'" :listId="5" />
          </el-main>
        </el-container>

        <!-- 今日诞生的明星 -->
        <el-container>
          <el-header style="padding-left: 0;">
            <RightArrowVue>{{'今天诞生'}}</RightArrowVue>
          </el-header>
          <el-main style="width: 100%;">
            <starScrollListVue :monitorList="stat_items" :listWidth="'133%'" :listId="6" />
          </el-main>
        </el-container>

        <!-- 头条新闻 -->
        <el-container>
          <el-header style="padding-left: 0;">
            <RightArrowVue>{{'头条新闻'}}</RightArrowVue>
          </el-header>
          <el-main style="width:100%;">
            <!-- <el-carousel trigger="click" height="200px">
            <el-carousel-item v-for="item in 4" :key="item">
              <div class="featured" text="2xl">
                <h3 >{{ item }}</h3>
                <h3 >{{ item+1 }}</h3>
              </div>
            </el-carousel-item>
          </el-carousel> -->
            <newsScrollListVue :monitorList="news_items" :listWidth="'99%'" :listId="7" />
          </el-main>
        </el-container>
      </el-col>
    </el-main>
  </el-container>
</template>

<script>
import featuredScrollListVue from './scrollList/featuredScrollList.vue';
import starScrollListVue from './scrollList/starScrollList.vue';
import newsScrollListVue from './scrollList/newsScrollList.vue';
import RightArrowVue from '../RightArrow.vue';

export default {
  name: 'HomeExploreVue',
  components: {
    featuredScrollListVue,
    starScrollListVue,
    newsScrollListVue,
    RightArrowVue
  },
  data() {
    return {
      pick_items: [{
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
      ],
      stat_items: [
        {
          pic: 'https://ts1.cn.mm.bing.net/th/id/R-C.c7edc6c1e6ac4448c412edab318a1a8a?rik=kL5dHPWXKKXFgQ&riu=http%3a%2f%2fn.sinaimg.cn%2fent%2ftransform%2f700%2fw600h900%2f20200622%2fe792-ivffpct5309679.jpg&ehk=xb%2fSgedVB7d%2fIJAytpRN7XeY8aqFn0UWNULmQa0OVto%3d&risl=&pid=ImgRaw&r=0',
          name: '这是名字',
          age: '18',
          stat_id: 1
        },
        {
          pic: 'https://ts1.cn.mm.bing.net/th/id/R-C.c7edc6c1e6ac4448c412edab318a1a8a?rik=kL5dHPWXKKXFgQ&riu=http%3a%2f%2fn.sinaimg.cn%2fent%2ftransform%2f700%2fw600h900%2f20200622%2fe792-ivffpct5309679.jpg&ehk=xb%2fSgedVB7d%2fIJAytpRN7XeY8aqFn0UWNULmQa0OVto%3d&risl=&pid=ImgRaw&r=0',
          name: '这是名字',
          age: '23',
          stat_id: 2
        },
        {
          pic: 'https://www.w3schools.com/w3images/la.jpg',
          name: '这是名字',
          age: '65',
          stat_id: 3
        },
        {
          pic: 'https://www.w3schools.com/w3images/la.jpg',
          name: '这是名字',
          age: '44',
          stat_id : 4
        },
        {
          pic: 'https://www.w3schools.com/w3images/la.jpg',
          name: '这是名字',
          age: '33',
          stat_id: 5
        },
        {
          pic: 'https://www.w3schools.com/w3images/la.jpg',
          name: '这是名字',
          age: '22',
          stat_id: 6
        },
        {
          pic: 'https://www.w3schools.com/w3images/la.jpg',
          name: '这是名字',
          age: '19',
          stat_id: 7
        },
        {
          pic: 'https://www.w3schools.com/w3images/la.jpg',
          name: '这是名字',
          age: '20',
          stat_id: 8
        },
      ],
      news_items: [
        {
          title: '这是新闻标题',
          content: '这是新闻内容',
          news_id: 1,
          date: '2021-07-01',
          from: '新闻来源',
          type: '新闻',
          cover: 'https://ts1.cn.mm.bing.net/th/id/R-C.c7edc6c1e6ac4448c412edab318a1a8a?rik=kL5dHPWXKKXFgQ&riu=http%3a%2f%2fn.sinaimg.cn%2fent%2ftransform%2f700%2fw600h900%2f20200622%2fe792-ivffpct5309679.jpg&ehk=xb%2fSgedVB7d%2fIJAytpRN7XeY8aqFn0UWNULmQa0OVto%3d&risl=&pid=ImgRaw&r=0'
        },
        {
          title: '这是新闻标题',
          content: '这是新闻内容',
          news_id: 2,
          date: '2021-07-01',
          from: '新闻来源',
          type: '新闻',
          cover: 'https://ts1.cn.mm.bing.net/th/id/R-C.c7edc6c1e6ac4448c412edab318a1a8a?rik=kL5dHPWXKKXFgQ&riu=http%3a%2f%2fn.sinaimg.cn%2fent%2ftransform%2f700%2fw600h900%2f20200622%2fe792-ivffpct5309679.jpg&ehk=xb%2fSgedVB7d%2fIJAytpRN7XeY8aqFn0UWNULmQa0OVto%3d&risl=&pid=ImgRaw&r=0'
        },
        {
          title: '这是新闻标题',
          content: '这是新闻内容',
          news_id: 3,
          date: '2021-07-01',
          from: '新闻来源',
          type: '新闻',
          cover: 'https://www.w3schools.com/w3images/la.jpg'
        },
        {
          title: '这是新闻标题',
          content: '这是新闻内容',
          news_id: 4,
          date: '2021-07-01',
          from: '新闻来源',
          type: '新闻',
          cover: 'https://www.w3schools.com/w3images/la.jpg'
        },
      ]
    }
  }
}
</script>

<style scoped>

</style>