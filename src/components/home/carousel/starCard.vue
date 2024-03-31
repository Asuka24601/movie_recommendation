<template>
  <el-card class="card-cont">
    <div class="pic">
      <el-image :src="pic" :alt="name" fit="cover" />
    </div>
    <div class="name">
      <span>{{ name }}</span>
    </div>
    <div class="age">
      <span>{{ age }}</span>
    </div>
  </el-card>
</template>

<script lang="js">
export default {
  name: 'starCardVue',
  props: {
    actors_id: String,
    name: String,
    pic: String,
    age: Number,
  }
}
</script>

<style lang="css" scoped>
.card-cont {
  width: 100%;
  height: 100%;
  margin: 0 1vw;
  padding: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.pic {
  width: 9vw;
  height: 9vw;
  overflow: hidden;
  border-radius: 100%;
  background-color: rgb(255, 255, 255);
  border: .1rem solid rgb(255, 255, 255);

}

/* .pic>* {
  width: 100%;
  height: 100%;
} */

.name {
  text-align: center;
  font-size: 1rem;
  font-weight: bold;
  margin-top: .5rem;
}

.age {
  margin-top: .5rem;
  text-align: center;
  font-size: .75rem;
}
</style>