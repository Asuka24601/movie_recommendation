<template>

  <el-tabs @tab-click="tabSwitch" v-model="resultType" id="my-tab">
    <el-tab-pane
                 :label="'详细'"
                 name="detial">
      <lineDisplayVue
                      :Data="Data" />
    </el-tab-pane>
    <el-tab-pane
                 :label="'网格'"
                 name="grid">
      <gridDisplayVue
                      :Data="Data" />
    </el-tab-pane>
    <el-tab-pane
                 :label="'紧凑'"
                 name="compact">
      <lineDisplayVue
                      :resultType="'compact'"
                      :Data="Data" />
    </el-tab-pane>
  </el-tabs>

  <el-pagination
                 v-model:current-page="currentPage"
                 v-model:page-size="pageSize"
                 :total="total"
                 @size-change="handleSizeChange"
                 @current-change="handleCurrentChange"
                 :hide-on-single-page="false"
                 style="margin-top: 2vh;margin-bottom: 2vh;" />

</template>
<script>
import gridDisplayVue from './resultItems/gridDisplay.vue';
import lineDisplayVue from './resultItems/lineDisplay.vue';
import MF from '@/js/movieFiliter';

export default {
  name: 'movieStoreResultVue',
  components: {
    gridDisplayVue,
    lineDisplayVue
  },
  data() {
    return {
      Data: [],
      resultType: 'detial',
      MF,
      currentPage: 1,
      pageSize: 9,
      total: 0
    }
  },
  computed: {
    offset() {
      return (this.currentPage - 1) * this.pageSize
    },
  },
  methods: {
    // eslint-disable-next-line no-unused-vars
    tabSwitch(t,e) {
      const name = t.props.name;
      console.log(name)
    },
    handleSizeChange() {
      console.log('handleSizeChange',this.pageSize)
      this.fetchData(false)
    },
    handleCurrentChange() {
      console.log('handleCurrentChange',this.currentPage)
      this.fetchData(false)
    },
    fetchData(flag=false) {
      console.log('fetch data')
      this.Data = MF.get_data(this.offset, this.pageSize).result.data
      if (flag) {
        this.total = MF.get_Data_from_backend_count();
      }
    }
  },
  mounted() {
    this.fetchData(true)
  }
}
</script>
<style>
#my-tab>.el-tabs__header.is-top {
  position: sticky;
  z-index: 2;
  top: -1vh;
  background-color: white;
  width: 99%;
}
</style>