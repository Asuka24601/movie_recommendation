<template>
  <el-card>
    <div class="movie-card">
      <el-image :src="poster_url"
                fit="cover"
                class="movie-poster" />
      <div class="movie-info">
        <h2 class="movie-title">{{ title }}</h2>
        <p class="movie-subtitle">{{ subtitle }}</p>
        <div class="movie-rating">
          <span class="star">&#9733;</span>
          <span class="rating-score">{{ rating }}</span>
        </div>
      </div>
      <div class="movie-actions">
        <el-button @click="addToWatchlist" class="watchlist-btn" :disabled="!this.$store.getters.get_user_info_login">{{ '+ 待看列表' }}</el-button>
        <el-button @click="showTrailer" class="trailer-link">{{ '预告片' }}</el-button>
      </div>
    </div>
  </el-card>

  <el-dialog :title="title"
                    v-if="dialogVisable"
                     v-model="dialogVisable"
                     width="75%"
                     :close-on-click-modal="true"
                     :show-close="false"
                     class="dialog-trailerPlayer">
            <myVideoPlayer :src="trailer_url" class="trailerPlayer"></myVideoPlayer>
          </el-dialog>
</template>

<script lang="js">
import myVideoPlayer from '@/components/trailerPlay.vue'

export default {
  name: 'MovieCard',
  props: {
    poster_url: String,
    title: String,
    subtitle: String,
    rating: Number,
    movie_id: String,
    trailer_url: String
  },
  components: {
    myVideoPlayer
  },

  data() {
    return {
      dialogVisable: false
    }
  },

  methods: {
    addToWatchlist() {
      console.log('addMovieToWatchlist', this.movie_id)
    },
    showTrailer() {
      this.dialogVisable = true;
      console.log('showTrailer', this.movie_id)
    }
  }
}
</script>

<style scoped>
.movie-card {
  width: 12vw;
  /* height: 100%; */
  height: 60vh;
  /* background-color: #222; */
  background-color: #ffffff;
  border-radius: 3%;
  padding: .25rem;
  color: black;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items:stretch;
}

.movie-poster {
  height: 65%;
  width: 100%;
  border-radius: .5rem;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
}

.movie-title {
  font-size: 1.5rem;
  margin: 1rem 0 1rem;
}

.movie-subtitle {
  /* color: #ccc; */
  color: #222;
}

.movie-rating {
  position: absolute;
  top: 1rem;
  right: 1rem;
  background: rgba(0, 0, 0, 0.8);
  color: white;
  padding: .3rem .4rem;
  border-radius: 2rem;
  display: flex;
  align-items: center;
  gap: 6px;
}

.movie-info {
  height: 30%;
}

.movie-actions {
  display: flex;
  justify-content: space-around;
  margin-top: 16px;
  margin-bottom: 1rem;
  height: 5%
}

.watchlist-btn,
.trailer-link {
  padding: 8px 12px;
  border-radius: 20px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
}

.trailer-link {
  background-color: #409eff;
  color: white;
  text-decoration: none;
  border: 1px solid #409eff;
}

.watchlist-btn {
  border: 1px solid #ffffff;
}
</style>