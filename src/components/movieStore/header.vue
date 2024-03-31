<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div>
    <h1>{{title}}</h1>
  <el-text>
    {{ text }}
  </el-text>
  </div>
</template>

<script lang="js">
export default {
  name: 'movieStoreHeader',
  props: {
    title: {
      type: String,
      default: 'title'
    },
    text: {
      type: String,
      default: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex fugit obcaecati ipsa accusantium. Quia quisquam corporis doloribus ut quaerat sed cum velit facilis est asperiores, repellendus et pariatur quam sint?'
    }
  }
}
</script>

<style scoped>

</style>