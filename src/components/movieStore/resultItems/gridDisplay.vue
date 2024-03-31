<template>
  <div class="gridDisplay">
    <gridMovieCardVue v-for="(item, index) in Data"
                      :key="index"
                      :id="item.id"
                      :title="item.title"
                      :releaseDate="item.releaseDate"
                      :rating="item.rating"
                      :duration="item.duration"
                      :poster_url="item.poster_url" />
    <el-empty v-if="Data.length === 0" description="没有找到相关电影" />
  </div>
</template>

<script lang="js">
import gridMovieCardVue from './gridMovieCard.vue';

export default {
  name: 'movieStoreResultItemsGridDisplayVue',
  components: {
    gridMovieCardVue
  },
  props: {
    Data: {
      type: Array,
      default: () => []
    }
  }
}

</script>

<style scoped>
.gridDisplay {
  display: grid;
  grid-template-columns: repeat(auto-fill, 30%);
  gap: 1rem;
  padding: 1rem;
}
</style>