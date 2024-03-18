<template>
  <el-container>
    <el-header>
      <span class="h0-title h1-title">{{ '看些什么' }}</span>
    </el-header>
    <el-main>
      <el-col :gutter="30">
        <el-container>
          <el-header style="padding-left: 0;">
            <span class="h0-title h2-title">{{ '你的列表' }}</span>
          </el-header>
          <el-main style="padding-left: 0;">
            <movieScrollListVue :monitorList="movieList_user10" :listId="1" />
          </el-main>
        </el-container>

        <el-container>
          <el-header style="padding-left: 0;">
            <span class="h0-title h2-title">{{ '本周Top10' }}</span>
          </el-header>
          <el-main style="padding-left: 0;">
            <movieScrollListVue :monitorList="movieList_week10" :listId="2" />
          </el-main>
        </el-container>

        <el-container>
          <el-header style="padding-left: 0;">
            <span class="h0-title h2-title">{{ '粉丝最爱' }}</span>
          </el-header>
          <el-main style="padding-left: 0;">
            <movieScrollListVue :monitorList="movieList_fans10" :listId="3" />
          </el-main>
        </el-container>

        <el-container>
          <el-header style="padding-left: 0;">
            <span class="h0-title h2-title">{{ '更多推荐' }}</span>
          </el-header>
          <el-main>
            <movieScrollListVue :monitorList="movieList_top10" :listId="4" />
          </el-main>
        </el-container>
      </el-col>
    </el-main>
  </el-container>
</template>

<script>
import movieScrollListVue from './scrollList/movieScrollList.vue';
export default {
  name: 'HomeWatchlistVue',
  components: {
    movieScrollListVue
  },
  data() {
    return {
      movieList_week10: [
        {
          poster_path: 'https://image.tmdb.org/t/p/w500/9dKCd55IuTT5QRs989m9Qlb7d2B.jpg',
          title: '沙丘 II',
          subtitle: 'DUNE PART TWO',
          rating: 8.9
        },
        {
          poster_path: 'https://image.tmdb.org/t/p/w500/9dKCd55IuTT5QRs989m9Qlb7d2B.jpg',
          title: '沙丘 II',
          subtitle: 'DUNE PART TWO',
          rating: 8.9
        },
        {
          poster_path: 'https://image.tmdb.org/t/p/w500/9dKCd55IuTT5QRs989m9Qlb7d2B.jpg',
          title: '沙丘 II',
          subtitle: 'DUNE PART TWO',
          rating: 8.9
        },
        {
          poster_path: 'https://image.tmdb.org/t/p/w500/9dKCd55IuTT5QRs989m9Qlb7d2B.jpg',
          title: '沙丘 II',
          subtitle: 'DUNE PART TWO',
          rating: 8.9
        },
        {
          poster_path: 'https://image.tmdb.org/t/p/w500/9dKCd55IuTT5QRs989m9Qlb7d2B.jpg',
          title: '沙丘 II',
          subtitle: 'DUNE PART TWO',
          rating: 8.9
        }, {
          poster_path: 'https://image.tmdb.org/t/p/w500/9dKCd55IuTT5QRs989m9Qlb7d2B.jpg',
          title: '沙丘 II',
          subtitle: 'DUNE PART TWO',
          rating: 8.9
        },
        {
          poster_path: 'https://image.tmdb.org/t/p/w500/9dKCd55IuTT5QRs989m9Qlb7d2B.jpg',
          title: '沙丘 II',
          subtitle: 'DUNE PART TWO',
          rating: 8.9
        },
        {
          poster_path: 'https://image.tmdb.org/t/p/w500/9dKCd55IuTT5QRs989m9Qlb7d2B.jpg',
          title: '沙丘 II',
          subtitle: 'DUNE PART TWO',
          rating: 8.9
        },
        {
          poster_path: 'https://image.tmdb.org/t/p/w500/9dKCd55IuTT5QRs989m9Qlb7d2B.jpg',
          title: '沙丘 II',
          subtitle: 'DUNE PART TWO',
          rating: 8.9
        },
        {
          poster_path: 'https://image.tmdb.org/t/p/w500/9dKCd55IuTT5QRs989m9Qlb7d2B.jpg',
          title: '沙丘 II',
          subtitle: 'DUNE PART TWO',
          rating: 8.9
        },
      ],
      movieList_fans10: [
        {
          poster_path: 'https://image.tmdb.org/t/p/w500/9dKCd55IuTT5QRs989m9Qlb7d2B.jpg',
          title: '沙丘 II',
          subtitle: 'DUNE PART TWO',
          rating: 8.9
        },
        {
          poster_path: 'https://image.tmdb.org/t/p/w500/9dKCd55IuTT5QRs989m9Qlb7d2B.jpg',
          title: '沙丘 II',
          subtitle: 'DUNE PART TWO',
          rating: 8.9
        },
        {
          poster_path: 'https://image.tmdb.org/t/p/w500/9dKCd55IuTT5QRs989m9Qlb7d2B.jpg',
          title: '沙丘 II',
          subtitle: 'DUNE PART TWO',
          rating: 8.9
        },
        {
          poster_path: 'https://image.tmdb.org/t/p/w500/9dKCd55IuTT5QRs989m9Qlb7d2B.jpg',
          title: '沙丘 II',
          subtitle: 'DUNE PART TWO',
          rating: 8.9
        },
        {
          poster_path: 'https://image.tmdb.org/t/p/w500/9dKCd55IuTT5QRs989m9Qlb7d2B.jpg',
          title: '沙丘 II',
          subtitle: 'DUNE PART TWO',
          rating: 8.9
        }, {
          poster_path: 'https://image.tmdb.org/t/p/w500/9dKCd55IuTT5QRs989m9Qlb7d2B.jpg',
          title: '沙丘 II',
          subtitle: 'DUNE PART TWO',
          rating: 8.9
        },
        {
          poster_path: 'https://image.tmdb.org/t/p/w500/9dKCd55IuTT5QRs989m9Qlb7d2B.jpg',
          title: '沙丘 II',
          subtitle: 'DUNE PART TWO',
          rating: 8.9
        },
        {
          poster_path: 'https://image.tmdb.org/t/p/w500/9dKCd55IuTT5QRs989m9Qlb7d2B.jpg',
          title: '沙丘 II',
          subtitle: 'DUNE PART TWO',
          rating: 8.9
        },
        {
          poster_path: 'https://image.tmdb.org/t/p/w500/9dKCd55IuTT5QRs989m9Qlb7d2B.jpg',
          title: '沙丘 II',
          subtitle: 'DUNE PART TWO',
          rating: 8.9
        },
        {
          poster_path: 'https://image.tmdb.org/t/p/w500/9dKCd55IuTT5QRs989m9Qlb7d2B.jpg',
          title: '沙丘 II',
          subtitle: 'DUNE PART TWO',
          rating: 8.9
        },
      ],
      movieList_top10: [
        {
          poster_path: 'https://image.tmdb.org/t/p/w500/9dKCd55IuTT5QRs989m9Qlb7d2B.jpg',
          title: '沙丘 II',
          subtitle: 'DUNE PART TWO',
          rating: 8.9
        },
        {
          poster_path: 'https://image.tmdb.org/t/p/w500/9dKCd55IuTT5QRs989m9Qlb7d2B.jpg',
          title: '沙丘 II',
          subtitle: 'DUNE PART TWO',
          rating: 8.9
        },
        {
          poster_path: 'https://image.tmdb.org/t/p/w500/9dKCd55IuTT5QRs989m9Qlb7d2B.jpg',
          title: '沙丘 II',
          subtitle: 'DUNE PART TWO',
          rating: 8.9
        },
        {
          poster_path: 'https://image.tmdb.org/t/p/w500/9dKCd55IuTT5QRs989m9Qlb7d2B.jpg',
          title: '沙丘 II',
          subtitle: 'DUNE PART TWO',
          rating: 8.9
        },
        {
          poster_path: 'https://image.tmdb.org/t/p/w500/9dKCd55IuTT5QRs989m9Qlb7d2B.jpg',
          title: '沙丘 II',
          subtitle: 'DUNE PART TWO',
          rating: 8.9
        }, {
          poster_path: 'https://image.tmdb.org/t/p/w500/9dKCd55IuTT5QRs989m9Qlb7d2B.jpg',
          title: '沙丘 II',
          subtitle: 'DUNE PART TWO',
          rating: 8.9
        },
        {
          poster_path: 'https://image.tmdb.org/t/p/w500/9dKCd55IuTT5QRs989m9Qlb7d2B.jpg',
          title: '沙丘 II',
          subtitle: 'DUNE PART TWO',
          rating: 8.9
        },
        {
          poster_path: 'https://image.tmdb.org/t/p/w500/9dKCd55IuTT5QRs989m9Qlb7d2B.jpg',
          title: '沙丘 II',
          subtitle: 'DUNE PART TWO',
          rating: 8.9
        },
        {
          poster_path: 'https://image.tmdb.org/t/p/w500/9dKCd55IuTT5QRs989m9Qlb7d2B.jpg',
          title: '沙丘 II',
          subtitle: 'DUNE PART TWO',
          rating: 8.9
        },
        {
          poster_path: 'https://image.tmdb.org/t/p/w500/9dKCd55IuTT5QRs989m9Qlb7d2B.jpg',
          title: '沙丘 II',
          subtitle: 'DUNE PART TWO',
          rating: 8.9
        },
      ],
      movieList_user10: [
        {
          poster_path: 'https://image.tmdb.org/t/p/w500/9dKCd55IuTT5QRs989m9Qlb7d2B.jpg',
          title: '沙丘 II',
          subtitle: 'DUNE PART TWO',
          rating: 8.9
        },
        {
          poster_path: 'https://image.tmdb.org/t/p/w500/9dKCd55IuTT5QRs989m9Qlb7d2B.jpg',
          title: '沙丘 II',
          subtitle: 'DUNE PART TWO',
          rating: 8.9
        },
        {
          poster_path: 'https://image.tmdb.org/t/p/w500/9dKCd55IuTT5QRs989m9Qlb7d2B.jpg',
          title: '沙丘 II',
          subtitle: 'DUNE PART TWO',
          rating: 8.9
        },
        {
          poster_path: 'https://image.tmdb.org/t/p/w500/9dKCd55IuTT5QRs989m9Qlb7d2B.jpg',
          title: '沙丘 II',
          subtitle: 'DUNE PART TWO',
          rating: 8.9
        },
        {
          poster_path: 'https://image.tmdb.org/t/p/w500/9dKCd55IuTT5QRs989m9Qlb7d2B.jpg',
          title: '沙丘 II',
          subtitle: 'DUNE PART TWO',
          rating: 8.9
        }, {
          poster_path: 'https://image.tmdb.org/t/p/w500/9dKCd55IuTT5QRs989m9Qlb7d2B.jpg',
          title: '沙丘 II',
          subtitle: 'DUNE PART TWO',
          rating: 8.9
        },
        {
          poster_path: 'https://image.tmdb.org/t/p/w500/9dKCd55IuTT5QRs989m9Qlb7d2B.jpg',
          title: '沙丘 II',
          subtitle: 'DUNE PART TWO',
          rating: 8.9
        },
        {
          poster_path: 'https://image.tmdb.org/t/p/w500/9dKCd55IuTT5QRs989m9Qlb7d2B.jpg',
          title: '沙丘 II',
          subtitle: 'DUNE PART TWO',
          rating: 8.9
        },
        {
          poster_path: 'https://image.tmdb.org/t/p/w500/9dKCd55IuTT5QRs989m9Qlb7d2B.jpg',
          title: '沙丘 II',
          subtitle: 'DUNE PART TWO',
          rating: 8.9
        },
        {
          poster_path: 'https://image.tmdb.org/t/p/w500/9dKCd55IuTT5QRs989m9Qlb7d2B.jpg',
          title: '沙丘 II',
          subtitle: 'DUNE PART TWO',
          rating: 8.9
        },
      ],
    }
  }
}
</script>

<style scoped>

</style>
