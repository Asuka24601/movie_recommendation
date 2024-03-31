<template>
  <div
       v-for="(item, index) in Data"
       :key="index">
    <detialMovieCardVue
                        v-if="resultType === 'detial'"
                        :id="item.id"
                        :title="item.title"
                        :director="item.director"
                        :releaseDate="item.releaseDate"
                        :rating="item.rating"
                        :category="item.category"
                        :duration="item.duration"
                        :description="item.description"
                        :actors="item.actors"
                        :poster_url="item.poster_url" />
    <compactMovieCardVue
                         v-else
                         :id="item.id"
                         :title="item.title"
                         :releaseDate="item.releaseDate"
                         :rating="item.rating"
                         :duration="item.duration"
                         :poster_url="item.poster_url" />
  </div>
  <el-empty v-if="Data.length===0" description="没有找到相关电影" />
</template>

<script lang="js">
import detialMovieCardVue from './detialMovieCard.vue';
import compactMovieCardVue from './compactMovieCard.vue';

export default {
  name: 'movieStoreResultItemsLineDisplayVue',
  components: {
    detialMovieCardVue,
    compactMovieCardVue
  },
  props: {
    resultType: {
      type: String,
      default: 'detial'
    },
    Data: {
      type: Array,
      default: () => []
    }
  }
}

</script>

<style scoped></style>