<template>
  <el-card :body-style="{ height: '15vh' }">
    <div class="movie-card">
      <div class="poster">
        <el-image :preview-src-list="[poster_url]" style="height: 100%;" :src="poster_url" alt="Movie Poster" fit="cover"/>
      </div>
      <div class="info">
        <h2 @click="nav2movie">{{ title }}</h2>
        <p>上映日期：{{ releaseDate }}</p>
        <p>片长：{{ min2hour(duration) }}</p>
        <div class="rating">评分：{{ rating }}/10</div>
      </div>
    </div>
  </el-card>
</template>

<script lang="js">
import { min2hour } from '@/js/tool';

export default {
  name: 'compactMovieCardVue',
  props: {
    movie_id: String,
    title: String,
    releaseDate: String,
    rating: Number,
    duration: Number,
    poster_url: String,
  },
  methods: {
    min2hour,
    nav2movie() {
      console.log('nav2movie', this.id)
      this.$router.push({ path: `/movie/${this.id}` });
    }
  },
}
</script>

<style scoped>
.movie-card {
  height: 100%;
  display: flex;
  background-color: #fff;
  border-radius: 0.5rem;
  overflow: hidden;
  /* box-shadow: 0 0.25rem 0.5rem rgba(0,0,0,0.1); */
  /* font-family: 'Arial', sans-serif; */
  text-align: start;
  font-size: .75rem;
}

.info {
  padding: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
}

h2 {
  margin: -1rem 0 0 0;
  font-size: 1.5rem; /* 使用rem单位 */
  color: #333;
  cursor: pointer;
}

h2:hover {
  color: #757575;
}

p, .rating {
  margin: 0.5rem 0 0 0;
  font-size: 1rem; /* 使用rem单位 */
  color: #666;
}
</style>