<template>
  <el-card>
    <div class="conta">
      <div class="logo">
        <el-icon>
          <Star />
        </el-icon>
      </div>
      <div class="content">
        <h1>{{ '登入访问你的观影列表' }}</h1>
        <p>
          {{ '保存你的观影记录、收藏你最喜欢的电影' }}
        </p>
        <el-button @click="signIn" type="primary" class="sign-in-button">{{ '登入网站' }}</el-button>
      </div>
    </div>
  </el-card>
</template>

<script lang="js">
export default {
  name: 'emptyMovieListVue',
  methods: {
    signIn() {
      this.$router.push('/login');
    },
  },
}
</script>

<style scoped>
.conta {
  padding: 1rem 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #ffffff;
}

.logo {
  font-size: 1.5rem;
  margin-bottom: -1rem;
}

.content {
  text-align: center;
  color: #000000;
}

h1 {
  font-size: 2rem;
  margin-bottom: 1.5rem;
}

p {
  margin-bottom: 1.5rem;
}

.sign-in-button {
  font-size: 1rem;
}
</style>
