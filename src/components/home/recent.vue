<template>
  <el-container>
    <el-header>
      <span class="h0-title h1-title">{{'最近浏览'}}</span>
    </el-header>
    <el-main>
      <movieScrollListVue :monitorList="items" :listId="9" v-if="this.$store.getters.get_user_info_login" />
      <emptyMovieListVue v-else />
    </el-main>
  </el-container>
</template>

<script>
import movieScrollListVue from './scrollList/movieScrollList.vue';
import emptyMovieListVue from './scrollList/emptyMovieList.vue';

export default {
  name: 'HomeRecentVue',
  components: {
    movieScrollListVue,
    emptyMovieListVue
  },
  data() {
    return {
      items:[
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
      ]
    }
  }
}
</script>

<style scoped>
</style>