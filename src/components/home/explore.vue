<template>
  <el-container>
    <el-header>
      <span class="h0-title h1-title">{{'探索'}}</span>
    </el-header>
    <el-main>
      <el-col>
        <el-container>
          <el-header style="padding-left: 0;">
            <span class="h0-title h2-title">{{'编辑精选'}}</span>
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
      <el-container>
        <el-header style="padding-left: 0;">
          <span class="h0-title h2-title">{{'今天诞生'}}</span>
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

      <el-container>
        <el-header style="padding-left: 0;">
          <span class="h0-title h2-title">{{'头条新闻'}}</span>
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
      </el-col>
    </el-main>
  </el-container>
</template>

<script>
export default {
  name: 'HomeExploreVue',
}
</script>

<style scoped></style>