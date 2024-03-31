<!-- eslint-disable vue/require-v-for-key -->
<!-- eslint-disable no-unused-vars -->
<template>
  <div class="fanorfollow_box">
    <div class="fanorfollow" v-for="(item, index) in allData" :key="index">
      <compactMovieCard
                          :movie_id="item.movie_id"
                          :title="item.title"
                          :director="item.director"
                          :releaseDate="item.releaseDate"
                          :rating="item.rating"
                          :category="item.category"
                          :duration="item.duration"
                          :description="item.description"
                          :actors="item.actors"
                          :poster_url="item.poster_url" />
    </div>
    <div>
      <el-empty
                v-if="allData.length == 0"
                :image-size="250"
                description="这里什么都没有哟"></el-empty>
    </div>
  </div>
</template>

<script>
import { recent } from '@/js/api/recent';
import compactMovieCard from '@/components/movieStore/resultItems/compactMovieCard.vue';

export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "recent",
  inject: ["reload"],
  components: { compactMovieCard },
  data() {
    return {
      allData: [],
    };
  },
  watch: {
    $route(to, from) {
      if (from);
      if (to.path == `/personal/recent/${this.$route.params.id}`) {
        recent(this.$route.params.id)
          .then((res) => {
            // console.log(res);
            this.allData = res;
          })
          .catch((err) => {
            console.log(err);
          });
      }
    },
  },
  mounted() {
    this.load();
  },
  methods: {
    load() {
      if (
        this.$route.path == `/personal/recent/${this.$route.params.id}`
      ) {
        recent(this.$route.params.id)
          .then((res) => {
            // console.log(res);
            this.allData = res;
          })
          .catch((err) => {
            console.log(err);
          });
      }
    },

    personal(id) {
      this.$router.push({ path: `/personal/${id}` });
    },
  },
};
</script>

<style>
.fanorfollow_box :hover {
  border-width: 1px;
  border-color: deepskyblue;
}

.fanorfollow {
  /* display: flex; */
  /* align-items: center; */
  width: 99%;
  margin-bottom: 1rem;
}

.fanorfollow :hover {
  border-width: 1px;
  border-color: deepskyblue;
}
</style>
