<template>

  <el-button  class="mvListButton" @click="drawer = true">
  <el-icon>
    <List />
    </el-icon>
    {{ '待看列表' }}
  </el-button>

  <el-drawer v-model="drawer" direction="rtl">
    <template #header>
      <h4>{{ '待看列表' }}</h4>
    </template>
    <template #default>
      <watchListDisplayVue
                      :resultType="'compact'"
                      :Data="Data" />
    </template>
    <template #footer>
      <el-pagination
                 v-model:current-page="currentPage"
                 v-model:page-size="pageSize"
                 :total="total"
                 @size-change="handleSizeChange"
                 @current-change="handleCurrentChange"
                 :hide-on-single-page="false"
                 style="margin-top: 2vh;margin-bottom: 2vh;" />
    </template>
  </el-drawer>

</template>

<script lang='js'>
import watchListDisplayVue from '@/components/watchList/watchListDisplay.vue';
import {userWatchList} from '@/js/api/user.js';
import {moviesInfo} from '@/js/api/movie.js';

export default {
  name: 'WatchlistView',

  data() {
    return {
      drawer: false,
      currentPage: 1,
      pageSize: 5,
      total: 0,
      Data_idx: [],
      Data: [],
    }
  },
  components: {
    watchListDisplayVue
  },
  methods: {
    load() {
      userWatchList().then(res => {
        this.total = res.length;
        const ans = [];
        res.forEach(e=>{
          ans.push(e.movie_id);
        });
        this.Data_idx = ans;
      // eslint-disable-next-line no-unused-vars
      }).then(_res=>{
        moviesInfo(this.getSubIdx()).then(res=>{
          this.Data = res;
        })
      })
    },
    getSubIdx() {
      const start = (this.currentPage-1)*this.pageSize;
      const end = start + this.pageSize;
      return this.Data_idx.slice(start,end)
    },
    handleSizeChange() {
      console.log('handleSizeChange',this.pageSize)
      moviesInfo(this.getSubIdx()).then(res=>{
        this.Data = res;
      })
    },
    handleCurrentChange() {
      console.log('handleCurrentChange',this.currentPage)
      moviesInfo(this.getSubIdx()).then(res=>{
        this.Data = res;
      })
    },
  },
  mounted() {
    if (this.$store.getters.get_user_info_login) {
      this.load();
    }
  }
}


</script>

<style scoped>
.mvListButton {
  position: absolute;
}
</style>