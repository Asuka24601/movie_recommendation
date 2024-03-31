<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <el-checkbox-group v-model="checkboxGroup">
    <el-checkbox-button v-for="(genre,index) in genres"
                        :key="index"
                        :value="genre.English"
                        style="margin: .1rem;border: .01rem solid #dcdfe6;border-radius: 10%;">
      {{ genre.Chinese }}
    </el-checkbox-button>
  </el-checkbox-group>
</template>

<script lang="js">
export default {
  name: 'genreVue',
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
      genres: [
        {
          "Chinese": "超级英雄",
          "English": "Superhero"
        },
        {
          "Chinese": "谍战电影",
          "English": "Espionage"
        },
        {
          "Chinese": "武侠片",
          "English": "Martial-Arts"
        },
        {
          "Chinese": "灾难片",
          "English": "Disaster"
        },
        {
          "Chinese": "双拍档警匪片",
          "English": "Buddy-Cop"
        },
        {
          "Chinese": "心理惊悚片",
          "English": "Psychological-Thriller"
        },
        {
          "Chinese": "悬疑片",
          "English": "Suspense"
        },
        {
          "Chinese": "科幻惊悚片",
          "English": "Sci-Fi-Thriller"
        },
        {
          "Chinese": "阴谋惊悚片",
          "English": "Conspiracy-Thriller"
        },
        {
          "Chinese": "行为喜剧",
          "English": "Slapstick-Comedy"
        },
        {
          "Chinese": "搞笑模仿",
          "English": "Parody"
        },
        {
          "Chinese": "黑色喜剧",
          "English": "Black-Comedy"
        },
        {
          "Chinese": "滑稽喜剧",
          "English": "Screwball-Comedy"
        },
        {
          "Chinese": "新式喜剧",
          "English": "Modern-Comedy"
        },
        {
          "Chinese": "情景喜剧",
          "English": "Sitcom"
        },
        {
          "Chinese": "嘲讽纪录片",
          "English": "Mockumentary"
        },
        {
          "Chinese": "抢劫片",
          "English": "Heist"
        },
        {
          "Chinese": "律政片",
          "English": "Legal-Drama"
        },
        {
          "Chinese": "办案程序电影",
          "English": "Police-Procedural"
        },
        {
          "Chinese": "警匪片",
          "English": "Cop-and-Robber"
        },
        {
          "Chinese": "侦探",
          "English": "Detective"
        },
        {
          "Chinese": "剧情片",
          "English": "Drama"
        },
        {
          "Chinese": "医疗剧",
          "English": "Medical-Drama"
        },
        {
          "Chinese": "少年/成长电影",
          "English": "Coming-of-Age"
        },
        {
          "Chinese": "律政",
          "English": "Legal"
        },
        {
          "Chinese": "纪录片",
          "English": "Documentary"
        },
        {
          "Chinese": "时代剧",
          "English": "Period-Drama"
        },
        {
          "Chinese": "政治剧",
          "English": "Political-Drama"
        },
        {
          "Chinese": "史诗",
          "English": "Epic"
        },
        {
          "Chinese": "浪漫爱情",
          "English": "Romantic"
        },
        {
          "Chinese": "超自然",
          "English": "Supernatural"
        },
        {
          "Chinese": "浪漫惊悚",
          "English": "Romantic-Thriller"
        },
        {
          "Chinese": "浪漫主义剧情片",
          "English": "Romantic-Drama"
        },
        {
          "Chinese": "荒诞派",
          "English": "Absurdist"
        },
        {
          "Chinese": "超现实主义",
          "English": "Surrealism"
        },
        {
          "Chinese": "恐怖片",
          "English": "Horror"
        },
        {
          "Chinese": "血腥片",
          "English": "Gore"
        },
        {
          "Chinese": "怪物",
          "English": "Monster"
        },
        {
          "Chinese": "隐秘恐怖片",
          "English": "Psychological-Horror"
        },
        {
          "Chinese": "旧片重制",
          "English": "Remake"
        },
        {
          "Chinese": "心理恐怖片",
          "English": "Thriller"
        },
        {
          "Chinese": "幽灵",
          "English": "Ghost"
        },
        {
          "Chinese": "传记片",
          "English": "Biographical"
        },
        {
          "Chinese": "虚构历史",
          "English": "Alternate-History"
        },
        {
          "Chinese": "宗教",
          "English": "Religious"
        },
        {
          "Chinese": "历史",
          "English": "Historical"
        },
        {
          "Chinese": "外太空",
          "English": "Space"
        },
        {
          "Chinese": "后启示录",
          "English": "Post-Apocalyptic"
        },
        {
          "Chinese": "黑科幻",
          "English": "Cyberpunk"
        },
        {
          "Chinese": "乌托邦",
          "English": "Utopian"
        },
        {
          "Chinese": "军事题材",
          "English": "Military"
        },
        {
          "Chinese": "朋克",
          "English": "Steampunk"
        },
        {
          "Chinese": "动画电影",
          "English": "Animation"
        },
        {
          "Chinese": "首领",
          "English": "Leader"
        },
        {
          "Chinese": "帝国",
          "English": "Empire"
        },
        {
          "Chinese": "复仇",
          "English": "Revenge"
        },
        {
          "Chinese": "意大利式西部片",
          "English": "Spaghetti-Western"
        },
        {
          "Chinese": "修正主义",
          "English": "Revisionist"
        },
        {
          "Chinese": "亡命之徒",
          "English": "Outlaw"
        }
      ]
    }
  }
}

</script>

<style scoped></style>