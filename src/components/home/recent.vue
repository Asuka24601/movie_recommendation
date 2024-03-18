<template>
  <el-container>
    <el-header>
      <span class="h0-title h1-title">{{'最近浏览'}}</span>
    </el-header>
    <el-main>
      <el-carousel trigger="click" height="200px">
        <el-carousel-item v-for="item in 4" :key="item">
          <div class="featured" text="2xl">
            <h3 >{{ item }}</h3>
            <h3 >{{ item+1 }}</h3>
          </div>
        </el-carousel-item>
      </el-carousel>
    </el-main>
  </el-container>
</template>

<script>
export default {
  name: 'HomeRecentVue',
}
</script>

<style scoped>
</style>