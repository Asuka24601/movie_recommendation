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
  name: 'personAwardVue',
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
          "Chinese": "最佳女主角提名",
          "English": "Best-Actress-Nominated"
        },
        {
          "Chinese": "最佳男主角提名",
          "English": "Best-Actor-Nominated"
        },
        {
          "Chinese": "最佳女主角获奖",
          "English": "Best-Actress-Winning"
        },
        {
          "Chinese": "最佳男主角获奖",
          "English": "Best-Actor-Winning"
        },
        {
          "Chinese": "最佳女配角提名",
          "English": "Best-Supporting-Actress-Nominated"
        },
        {
          "Chinese": "最佳男配角提名",
          "English": "Best-Supporting-Actor-Nominated"
        },
        {
          "Chinese": "最佳女配角获奖",
          "English": "Best-Supporting-Actress-Winning"
        },
        {
          "Chinese": "最佳男配角获奖",
          "English": "Best-Supporting-Actor-Winning"
        },
        {
          "Chinese": "最佳导演提名",
          "English": "Best-Director-Nominated"
        },
        {
          "Chinese": "最佳导演获奖",
          "English": "Best-Director-Winning"
        },
        {
          "Chinese": "奥斯卡提名",
          "English": "Oscar-Nominated"
        },
        {
          "Chinese": "艾美奖提名",
          "English": "Emmy-Award-Nominated"
        },
        {
          "Chinese": "金球奖提名",
          "English": "Golden-Globe-Nominated"
        },
        {
          "Chinese": "奥斯卡获奖",
          "English": "Oscar-Winning"
        },
        {
          "Chinese": "艾美奖获奖",
          "English": "Emmy-Award-Winning"
        },
        {
          "Chinese": "金球奖获奖",
          "English": "Golden-Globe-Winning"
        }
      ]
    }
  }
}

</script>

<style scoped></style>