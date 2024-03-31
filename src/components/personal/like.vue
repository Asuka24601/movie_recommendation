<!-- eslint-disable vue/require-v-for-key -->
<!-- eslint-disable no-unused-vars -->
<template>
  <div class="fanorfollow_box">
    <div class="fanorfollow" v-for="(item, index) in allData" :key="index">
      <compactMovieCard class="fanorfollow_left"
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
      <div class="fanorfollow_botton">
        <el-button
                   @click="unlike(item.id)"
                   type="primary"
                   size="small"
                   round
                   icon="el-icon-check"
                   v-text="'取消喜欢'"></el-button>
      </div>
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
import { likeList, likeDelete } from '@/js/api/like';
import compactMovieCard from '@/components/movieStore/resultItems/compactMovieCard.vue';

export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "recnet",
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
      if (to.path == `/personal/like/${this.$route.params.id}`) {
        likeList(this.$route.params.id)
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
        this.$route.path == `/personal/like/${this.$route.params.id}`
      ) {
        likeList(this.$route.params.id)
          .then((res) => {
            // console.log(res);
            this.allData = res;
          })
          .catch((err) => {
            console.log(err);
          });
      }
    },
    unlike(item_id) {
      if (!this.$store.state.user_info.user_id) {
        this.$message({
          showClose: true,
          message: "请登录后再进行操作哦",
          type: "warning",
        });
        return;
      }

      if (this.$store.state.user_info.user_id != this.$route.params.id) {
        this.$message({
          showClose: true,
          message: "此页面不是你的个人中心哦",
          type: "warning",
        });
        return;
      }

      const body = {
        user_id: this.$route.params.id,
        movie_id: item_id
      }

      likeDelete(body).then((res) => {
        this.allData = res;
      }).catch((e) => {
        console.log(e)
      })
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
  position: relative;
}

.fanorfollow :hover {
  border-width: 1px;
  border-color: deepskyblue;
}

.fanorfollow_left {
  margin-bottom: 1rem;
}

.fanorfollow_botton {
  position: absolute;
  top: 5rem;
  right: 2rem;
  z-index: 1;
}


</style>
