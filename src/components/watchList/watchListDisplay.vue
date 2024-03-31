<template>
  <div class="watchListDisplayBox"
       v-for="(item, index) in Data"
       :key="index">
    <compactMovieCardVue
                         :id="item.movie_id"
                         :title="item.title"
                         :releaseDate="item.releaseDate"
                         :rating="item.rating"
                         :duration="item.duration"
                         :poster_url="item.poster_url" />
  <el-radio class="watchendBox" value="1" size="large" :change="watched">{{ '完成' }}</el-radio>
  </div>

  <el-empty v-if="Data.length===0" description="没有找到相关电影" />
</template>

<script lang="js">
import compactMovieCardVue from '@/components/movieStore/resultItems/compactMovieCard.vue';

export default {
  name: 'watchListDisplayVue',
  components: {
    compactMovieCardVue
  },
  props: {
    Data: {
      type: Array,
      default: () => []
    }
  },
  methods: {
    watched(idx) {
      console.log(idx);
    }
  }
}

</script>

<style scoped>
.watchListDisplayBox{
  position: relative;
  margin-bottom: 1rem;
}
.watchendBox{
    position: absolute;
    right: 1.25rem;
    z-index: 1;
    bottom: 1rem;
}
</style>