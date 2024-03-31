<template>
  <el-col class="my-col">
    <movieStoreHeaderVue :title="title" :text="text"></movieStoreHeaderVue>
    <tagBarVue
               class="top-stick"
               :listId="10"
               v-show="MF.get_catergory().length > 0">
    </tagBarVue>

    <el-button type="normal"
               @click="drawerFiliterOpen = true"
               class="filt-button"><el-icon>
        <Filter />
      </el-icon>
      进行筛选</el-button>

    <el-drawer v-model="drawerFiliterOpen"
               :title="'筛选'"
               direction="rtl"
               size="50%"
               ref="myDrawer">
      <el-card>
        <movieStoreFiliterVue></movieStoreFiliterVue>
      </el-card>
    </el-drawer>

    <movieStoreResultVue></movieStoreResultVue>
  </el-col>

</template>

<script lang="js">
import MF from '@/js/movieFiliter';

import movieStoreHeaderVue from '@/components/movieStore/header.vue';
import movieStoreFiliterVue from '@/components/movieStore/filiter.vue';
import movieStoreResultVue from '@/components/movieStore/result.vue';
import tagBarVue from '@/components/movieStore/tagBar.vue';

export default {
  name: 'movieStoreViewVue',
  components: {
    movieStoreHeaderVue,
    movieStoreFiliterVue,
    movieStoreResultVue,
    tagBarVue
  },
  data() {
    return {
      MF,
      drawerFiliterOpen: MF.drawerFiliterOpen,
      title:'全部电影',
      text:'你想找的，全在这里!'
    }
  },
  mounted() {
    MF.set_ctx(this.$refs.myDrawer);
  }
}

</script>

<style scoped>
.filt-button {
  position: fixed;
  right: 6%;
  top: 90%;
  font-size: 1rem;
  z-index: 100;
}

.my-col>* {
  margin-bottom: 2rem;
}

.top-stick {
  position: sticky;
  top: 0;
  z-index: 100;
}
</style>