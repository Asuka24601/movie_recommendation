<template>
  <span class="h0-title h2-title"><slot></slot><el-icon class="rightA">
    <ArrowRightBold />
  </el-icon></span>
</template>

<script lang="js">
export default {
  name:'RightArrowVue'
}
</script>

<style scoped>
.rightA {
  position: relative;
  top: .2rem;
  cursor:pointer;
}

.rightA:hover {
  color: cadetblue;
}
</style>