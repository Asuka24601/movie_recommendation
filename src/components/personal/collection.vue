<template>
  <div class="myart1">
    <collectionItem v-for="item in allData" :key="item.collection_id" :data="item"/>
    <el-empty
        v-if="allData.length == 0"
        :image-size="250"
        description="暂未有任何集合"
      ></el-empty>
  </div>
</template>

<script>
import { collectionList } from '@/js/api/collection';
import collectionItem from '@/components/personal/collectionItem.vue';
export default {
  components: { collectionItem },
  name: "MyCollect",
  data() {
    return {
      allData:[]
    };
  },
  mounted() {
    this.load();
  },
  methods: {
    load() {
      collectionList(this.$route.params.id)
        .then((res) => {
          console.log(res);
          // res.forEach(element => {
          // element.createDate=this.$options.filters['formatDate'](parseInt(element.createDate))
          // });
          this.allData=res
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
};
</script>

<style>
.el-card {
    border-radius: 0;
  }

  .el-card:not(:first-child) {
    margin-top: 5px;

  }
  .myart1{
    line-height: 30px;
  }
</style>
