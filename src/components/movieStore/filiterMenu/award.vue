<template>
  <el-checkbox-group v-model="checkboxGroup">
    <el-checkbox-button v-for="award in awards"
                        :key="award.English"
                        :value="award.English"
                        style="margin: .1rem;border: .01rem solid #dcdfe6;border-radius: 10%;">
      {{ award.Chinese }}
    </el-checkbox-button>
  </el-checkbox-group>
</template>

<script lang="js">
export default {
  name: 'awardVue',
  props: {
    Data: {
      type: Array,
      required: true,
      default: () => []
    }
  },
  data() {
    return {
      checkboxGroup: this.Data,
      awards: [
        {
          "Chinese": "奥斯卡-获奖",
          "English": "Oscar-Winning"
        },
        {
          "Chinese": "艾美奖-获奖",
          "English": "Emmy-Award-Winning"
        },
        {
          "Chinese": "金球奖-获奖",
          "English": "Golden-Globe-Winning"
        },
        {
          "Chinese": "奥斯卡-提名",
          "English": "Oscar-Nominated"
        },
        {
          "Chinese": "艾美奖-提名",
          "English": "Emmy-Award-Nominated"
        },
        {
          "Chinese": "金球奖-提名",
          "English": "Golden-Globe-Nominated"
        },
        {
          "Chinese": "最佳影片-获奖",
          "English": "Best-Picture-Winning"
        },
        {
          "Chinese": "最佳影片-提名",
          "English": "Best-Picture-Nominated"
        },
        {
          "Chinese": "最佳导演-获奖",
          "English": "Best-Director-Winning"
        },
        {
          "Chinese": "最佳导演-提名",
          "English": "Best-Director-Nominated"
        },
        {
          "Chinese": "国家电影局保存",
          "English": "National-Film-Board-Preserved"
        },
        {
          "Chinese": "金酸梅奖-获奖",
          "English": "Razzie-Winning"
        },
        {
          "Chinese": "金酸梅奖-提名",
          "English": "Razzie-Nominated"
        },
        {
          "Chinese": "IMDb前100",
          "English": "IMDb-Top-100"
        },
        {
          "Chinese": "IMDb前1000",
          "English": "IMDb-Top-1000"
        },
        {
          "Chinese": "IMDb前250",
          "English": "IMDb-Top-250"
        },
        {
          "Chinese": "IMDb后250",
          "English": "IMDb-Bottom-250"
        },
        {
          "Chinese": "IMDb后1000",
          "English": "IMDb-Bottom-1000"
        }
      ]
    }
  }
}

</script>

<style scoped></style>