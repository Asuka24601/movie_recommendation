<template>
  <div class="myart1">
    <commentItem v-for="item in allData" :key="item.comment_id" :data="item"/>
        <el-empty
        v-if="allData.length == 0"
        :image-size="250"
        description="暂未发表任何新闻额"
      ></el-empty>
  </div>
</template>

<script>
import { commentList } from '@/js/api/comment';
import commentItem from '@/components/personal/commentItem.vue';
export default {
  components: { commentItem },
  name: "commentVue",
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
      commentList(this.$route.params.id)
        .then((res) => {
          console.log(res);
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
  .myart1{
    line-height: 30px;
  }
</style>
