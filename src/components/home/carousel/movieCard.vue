<template>
  <el-card>
    <div class="movie-card">
      <el-image :src="poster_path"
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
        <button class="watchlist-btn">{{'+ 观看列表'}}</button>
        <a href="#" class="trailer-link">{{'预告片'}}</a>
      </div>
    </div>
  </el-card>

</template>

<script lang="js">
export default {
  name: 'MovieCard',
  props: {
    poster_path: String,
    title: String,
    subtitle: String,
    rating: Number
  }
}
</script>

<style scoped>
.movie-card {
  width: 100%;
  height: 100%;
  background-color: #222;
  border-radius: 3%;
  padding: .25rem;
  color: white;
  position: relative;
}

.movie-poster {
  height: 65%;
  width: 100%;
  border-radius: .5rem;
}

.movie-title {
  font-size: 1.5rem;
  margin: 1rem 0 1rem;
}

.movie-subtitle {
  color: #ccc;
}

.movie-rating {
  position: absolute;
  top: 1rem;
  right: 1rem;
  background: rgba(0, 0, 0, 0.8);
  padding: .3rem .4rem;
  border-radius: 2rem;
  display: flex;
  align-items: center;
  gap: 6px;
}

.movie-actions {
  display: flex;
  justify-content: space-around;
  margin-top: 16px;
  margin-bottom: 1rem;
}

.watchlist-btn,
.trailer-link {
  padding: 8px 12px;
  border-radius: 20px;
}

.trailer-link {
  background-color: #409eff;
  color: white;
  text-decoration: none;
}
</style>