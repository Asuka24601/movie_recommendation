<template>
  <div class="article-card">
    <div class="image-container">
      <img :src="cover" alt="Article Cover" />
    </div>
    <div class="content">
      <h1 class="title">{{content}}</h1>
      <div class="info">
        <span class="date">{{ date }}</span>
        <span class="category">{{' - ' + from +' - ' + type}}</span>
      </div>
    </div>
  </div>
</template>

<script lang="js">

export default {
  name: 'newsCardVue',
  props: {
    news_id:String,
    title: String,
    cover: String,
    date: String,
    type: String,
    from: String,
    content: String
  }
}
</script>

<style lang="css" scoped>
.article-card {
  display: flex;
  background-color: #fff;
  border: 1px solid #ddd;
}

.image-container {
  flex: 0 0 30%;
  /* Adjust image container width as needed */
  padding: 1rem;
  align-content: center;
}

.image-container img {
  width: 100%;
  height: auto;
  object-fit: cover;
  margin: auto 0;
}

.content {
  flex: 1;
  padding: 1rem;
  align-content: space-around;
}

.title {
  font-size: 1rem;
  /* Or use percentage */
  margin: 0;
  font-weight: bold;
  text-align: start;
}

.info {
  margin-top: 1rem;
  color: #666;
  text-align: start;
}

.date,
.category {
  font-size: .5rem;
  text-align: start;
}

/* You might need media queries for responsive adjustments */
@media (max-width: 768px) {
  .article-card {
    flex-direction: column;
  }

  .image-container {
    flex: 0 0 50%;
    /* Adjust image container width on smaller screens */
  }
}
</style>