<template>
  <el-container>
    <el-header>
      <span class="h0-title h1-title">{{ '看些什么' }}</span>
    </el-header>
    <el-main>
      <el-col :gutter="30">
        <el-container>
          <el-header style="padding-left: 0;">
            <RightArrowVue>{{ '你的列表' }}</RightArrowVue>
          </el-header>
          <el-main style="padding-left: 0;">
            <movieScrollListVue :monitorList="movieList_user10" :listId="1" v-if="this.$store.getters.get_user_info_login"/>
            <emptyMovieListVue v-else/>
          </el-main>
        </el-container>

        <el-container>
          <el-header style="padding-left: 0;">
            <RightArrowVue>{{ '本周Top10' }}</RightArrowVue>
          </el-header>
          <el-main style="padding-left: 0;">
            <movieScrollListVue :monitorList="movieList_week10" :listId="2" />
          </el-main>
        </el-container>

        <el-container>
          <el-header style="padding-left: 0;">
            <RightArrowVue>{{ '粉丝最爱' }}</RightArrowVue>
          </el-header>
          <el-main style="padding-left: 0;">
            <movieScrollListVue :monitorList="movieList_fans10" :listId="3" />
          </el-main>
        </el-container>

        <el-container>
          <el-header style="padding-left: 0;">
            <RightArrowVue>{{ '更多推荐' }}</RightArrowVue>
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
import RightArrowVue from '../RightArrow.vue';
import emptyMovieListVue from './scrollList/emptyMovieList.vue';
import { recommendLatest, recommendPopular,recommendUser, recommendTop } from '@/js/api/recommend.js';
export default {
  name: 'HomeWatchlistVue',
  components: {
    movieScrollListVue,
    RightArrowVue,
    emptyMovieListVue
  },
  data() {
    return {
      movieList_week10: [
        {
          poster_url: 'https://image.tmdb.org/t/p/w500/9dKCd55IuTT5QRs989m9Qlb7d2B.jpg',
          title: '沙丘 II',
          subtitle: 'DUNE PART TWO',
          rating: 8.9,
          movie_id: 1
        },
        {
          poster_url: 'https://image.tmdb.org/t/p/w500/9dKCd55IuTT5QRs989m9Qlb7d2B.jpg',
          title: '沙丘 II',
          subtitle: 'DUNE PART TWO',
          rating: 8.9,
          movie_id: 1
        },
        {
          poster_url: 'https://image.tmdb.org/t/p/w500/9dKCd55IuTT5QRs989m9Qlb7d2B.jpg',
          title: '沙丘 II',
          subtitle: 'DUNE PART TWO',
          rating: 8.9,
          movie_id: 1
        },
        {
          poster_url: 'https://image.tmdb.org/t/p/w500/9dKCd55IuTT5QRs989m9Qlb7d2B.jpg',
          title: '沙丘 II',
          subtitle: 'DUNE PART TWO',
          rating: 8.9,
          movie_id: 1
        },
        {
          poster_url: 'https://image.tmdb.org/t/p/w500/9dKCd55IuTT5QRs989m9Qlb7d2B.jpg',
          title: '沙丘 II',
          subtitle: 'DUNE PART TWO',
          rating: 8.9,
          movie_id: 1
        }, {
          poster_url: 'https://image.tmdb.org/t/p/w500/9dKCd55IuTT5QRs989m9Qlb7d2B.jpg',
          title: '沙丘 II',
          subtitle: 'DUNE PART TWO',
          rating: 8.9,
          movie_id: 1
        },
        {
          poster_url: 'https://image.tmdb.org/t/p/w500/9dKCd55IuTT5QRs989m9Qlb7d2B.jpg',
          title: '沙丘 II',
          subtitle: 'DUNE PART TWO',
          rating: 8.9,
          movie_id: 1
        },
        {
          poster_url: 'https://image.tmdb.org/t/p/w500/9dKCd55IuTT5QRs989m9Qlb7d2B.jpg',
          title: '沙丘 II',
          subtitle: 'DUNE PART TWO',
          rating: 8.9,
          movie_id: 1
        },
        {
          poster_url: 'https://image.tmdb.org/t/p/w500/9dKCd55IuTT5QRs989m9Qlb7d2B.jpg',
          title: '沙丘 II',
          subtitle: 'DUNE PART TWO',
          rating: 8.9,
          movie_id: 1
        },
        {
          poster_url: 'https://image.tmdb.org/t/p/w500/9dKCd55IuTT5QRs989m9Qlb7d2B.jpg',
          title: '沙丘 II',
          subtitle: 'DUNE PART TWO',
          rating: 8.9,
          movie_id: 1
        },
      ],
      movieList_fans10: [
        {
          poster_url: 'https://image.tmdb.org/t/p/w500/9dKCd55IuTT5QRs989m9Qlb7d2B.jpg',
          title: '沙丘 II',
          subtitle: 'DUNE PART TWO',
          rating: 8.9,
          movie_id: 1
        },
        {
          poster_url: 'https://image.tmdb.org/t/p/w500/9dKCd55IuTT5QRs989m9Qlb7d2B.jpg',
          title: '沙丘 II',
          subtitle: 'DUNE PART TWO',
          rating: 8.9,
          movie_id: 1
        },
        {
          poster_url: 'https://image.tmdb.org/t/p/w500/9dKCd55IuTT5QRs989m9Qlb7d2B.jpg',
          title: '沙丘 II',
          subtitle: 'DUNE PART TWO',
          rating: 8.9,
          movie_id: 1
        },
        {
          poster_url: 'https://image.tmdb.org/t/p/w500/9dKCd55IuTT5QRs989m9Qlb7d2B.jpg',
          title: '沙丘 II',
          subtitle: 'DUNE PART TWO',
          rating: 8.9,
          movie_id: 1
        },
        {
          poster_url: 'https://image.tmdb.org/t/p/w500/9dKCd55IuTT5QRs989m9Qlb7d2B.jpg',
          title: '沙丘 II',
          subtitle: 'DUNE PART TWO',
          rating: 8.9,
          movie_id: 1
        }, {
          poster_url: 'https://image.tmdb.org/t/p/w500/9dKCd55IuTT5QRs989m9Qlb7d2B.jpg',
          title: '沙丘 II',
          subtitle: 'DUNE PART TWO',
          rating: 8.9,
          movie_id: 1
        },
        {
          poster_url: 'https://image.tmdb.org/t/p/w500/9dKCd55IuTT5QRs989m9Qlb7d2B.jpg',
          title: '沙丘 II',
          subtitle: 'DUNE PART TWO',
          rating: 8.9,
          movie_id: 1
        },
        {
          poster_url: 'https://image.tmdb.org/t/p/w500/9dKCd55IuTT5QRs989m9Qlb7d2B.jpg',
          title: '沙丘 II',
          subtitle: 'DUNE PART TWO',
          rating: 8.9,
          movie_id: 1
        },
        {
          poster_url: 'https://image.tmdb.org/t/p/w500/9dKCd55IuTT5QRs989m9Qlb7d2B.jpg',
          title: '沙丘 II',
          subtitle: 'DUNE PART TWO',
          rating: 8.9,
          movie_id: 1
        },
        {
          poster_url: 'https://image.tmdb.org/t/p/w500/9dKCd55IuTT5QRs989m9Qlb7d2B.jpg',
          title: '沙丘 II',
          subtitle: 'DUNE PART TWO',
          rating: 8.9,
          movie_id: 1
        },
      ],
      movieList_top10: [
        {
          poster_url: 'https://image.tmdb.org/t/p/w500/9dKCd55IuTT5QRs989m9Qlb7d2B.jpg',
          title: '沙丘 II',
          subtitle: 'DUNE PART TWO',
          rating: 8.9,
          movie_id: 1
        },
        {
          poster_url: 'https://image.tmdb.org/t/p/w500/9dKCd55IuTT5QRs989m9Qlb7d2B.jpg',
          title: '沙丘 II',
          subtitle: 'DUNE PART TWO',
          rating: 8.9,
          movie_id: 1
        },
        {
          poster_url: 'https://image.tmdb.org/t/p/w500/9dKCd55IuTT5QRs989m9Qlb7d2B.jpg',
          title: '沙丘 II',
          subtitle: 'DUNE PART TWO',
          rating: 8.9,
          movie_id: 1
        },
        {
          poster_url: 'https://image.tmdb.org/t/p/w500/9dKCd55IuTT5QRs989m9Qlb7d2B.jpg',
          title: '沙丘 II',
          subtitle: 'DUNE PART TWO',
          rating: 8.9,
          movie_id: 1
        },
        {
          poster_url: 'https://image.tmdb.org/t/p/w500/9dKCd55IuTT5QRs989m9Qlb7d2B.jpg',
          title: '沙丘 II',
          subtitle: 'DUNE PART TWO',
          rating: 8.9,
          movie_id: 1
        }, {
          poster_url: 'https://image.tmdb.org/t/p/w500/9dKCd55IuTT5QRs989m9Qlb7d2B.jpg',
          title: '沙丘 II',
          subtitle: 'DUNE PART TWO',
          rating: 8.9,
          movie_id: 1
        },
        {
          poster_url: 'https://image.tmdb.org/t/p/w500/9dKCd55IuTT5QRs989m9Qlb7d2B.jpg',
          title: '沙丘 II',
          subtitle: 'DUNE PART TWO',
          rating: 8.9,
          movie_id: 1
        },
        {
          poster_url: 'https://image.tmdb.org/t/p/w500/9dKCd55IuTT5QRs989m9Qlb7d2B.jpg',
          title: '沙丘 II',
          subtitle: 'DUNE PART TWO',
          rating: 8.9,
          movie_id: 1
        },
        {
          poster_url: 'https://image.tmdb.org/t/p/w500/9dKCd55IuTT5QRs989m9Qlb7d2B.jpg',
          title: '沙丘 II',
          subtitle: 'DUNE PART TWO',
          rating: 8.9,
          movie_id: 1
        },
        {
          poster_url: 'https://image.tmdb.org/t/p/w500/9dKCd55IuTT5QRs989m9Qlb7d2B.jpg',
          title: '沙丘 II',
          subtitle: 'DUNE PART TWO',
          rating: 8.9,
          movie_id: 1
        },
      ],
      movieList_user10: [
        {
          poster_url: 'https://image.tmdb.org/t/p/w500/9dKCd55IuTT5QRs989m9Qlb7d2B.jpg',
          title: '沙丘 II',
          subtitle: 'DUNE PART TWO',
          rating: 8.9,
          movie_id: 1
        },
        {
          poster_url: 'https://image.tmdb.org/t/p/w500/9dKCd55IuTT5QRs989m9Qlb7d2B.jpg',
          title: '沙丘 II',
          subtitle: 'DUNE PART TWO',
          rating: 8.9,
          movie_id: 1
        },
        {
          poster_url: 'https://image.tmdb.org/t/p/w500/9dKCd55IuTT5QRs989m9Qlb7d2B.jpg',
          title: '沙丘 II',
          subtitle: 'DUNE PART TWO',
          rating: 8.9,
          movie_id: 1
        },
        {
          poster_url: 'https://image.tmdb.org/t/p/w500/9dKCd55IuTT5QRs989m9Qlb7d2B.jpg',
          title: '沙丘 II',
          subtitle: 'DUNE PART TWO',
          rating: 8.9,
          movie_id: 1
        },
        {
          poster_url: 'https://image.tmdb.org/t/p/w500/9dKCd55IuTT5QRs989m9Qlb7d2B.jpg',
          title: '沙丘 II',
          subtitle: 'DUNE PART TWO',
          rating: 8.9,
          movie_id: 1
        }, {
          poster_url: 'https://image.tmdb.org/t/p/w500/9dKCd55IuTT5QRs989m9Qlb7d2B.jpg',
          title: '沙丘 II',
          subtitle: 'DUNE PART TWO',
          rating: 8.9,
          movie_id: 1
        },
        {
          poster_url: 'https://image.tmdb.org/t/p/w500/9dKCd55IuTT5QRs989m9Qlb7d2B.jpg',
          title: '沙丘 II',
          subtitle: 'DUNE PART TWO',
          rating: 8.9,
          movie_id: 1
        },
        {
          poster_url: 'https://image.tmdb.org/t/p/w500/9dKCd55IuTT5QRs989m9Qlb7d2B.jpg',
          title: '沙丘 II',
          subtitle: 'DUNE PART TWO',
          rating: 8.9,
          movie_id: 1
        },
        {
          poster_url: 'https://image.tmdb.org/t/p/w500/9dKCd55IuTT5QRs989m9Qlb7d2B.jpg',
          title: '沙丘 II',
          subtitle: 'DUNE PART TWO',
          rating: 8.9,
          movie_id: 1
        },
        {
          poster_url: 'https://image.tmdb.org/t/p/w500/9dKCd55IuTT5QRs989m9Qlb7d2B.jpg',
          title: '沙丘 II',
          subtitle: 'DUNE PART TWO',
          rating: 8.9,
          movie_id: 1
        },
      ],
    }
  },
  methods: {
    load() {
      recommendLatest().then(res => {
        this.movieList_week10 = res;
      }).catch(err => {
        console.log(err);
      });
      recommendPopular().then(res => {
        this.movieList_fans10 = res;
      }).catch(err => {
        console.log(err);
      });
      recommendTop().then(res=>{
        this.movieList_top10 = res;
      }).catch(err => {
        console.log(err);
      });
      if(this.$store.getters.get_user_info_login) {
        recommendUser(this.$store.getters.get_user_id).then(res=>{
          this.movieList_user10 = res;
        }).catch(err=>{
          console.log(err)
        })
      }
    }
  },
  mounted() {
    this.load();
  }
}
</script>

<style scoped>

</style>
