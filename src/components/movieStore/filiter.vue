<template>
  <el-tabs v-model="filiterType" tab-position="right">
    <el-tab-pane :label="'标题'" name="titles">
    <filiterTitleVue />
    </el-tab-pane>
    <el-tab-pane :label="'演员'" name="names">
    <filiterNameVue />
    </el-tab-pane>
    <el-tab-pane :label="'合作'" name="collaborations">
    <filiterCollaborationVue />
    </el-tab-pane>

  </el-tabs>
</template>

<script>
import filiterTitleVue from './filiterMenu/filiterTitle.vue';
import filiterNameVue from './filiterMenu/filiterName.vue';
import filiterCollaborationVue from './filiterMenu/filiterCollaboration.vue';

export default {
  name: 'movieStoreFiliterVue',
  components: {
    filiterTitleVue,
    filiterNameVue,
    filiterCollaborationVue
  },
  data() {
    return {
      form: {},
      filiterType: 'titles'
    }
  },
}
</script>

<style scoped>
</style>