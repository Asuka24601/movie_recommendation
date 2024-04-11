<template>
  <el-card :body-style="{ height: '27vh' }">
    <el-container style="height: 100%;">
      <el-aside>
        <el-image :src="poster_url" :preview-src-list="[poster_url]" fit="cover" style="height: 98%;" />
      </el-aside>
      <el-main class="my-main">
        <div class="mt">
          <el-col>
            <span class="mvtitle" @click="nav2movie">
              {{ title }}
            </span>
          </el-col>
          <el-col>
            <div class="mvdd">
              <span>
                {{ releaseDate }}
              </span>
              <span>
                {{ min2hour(duration) }}
              </span>
            </div>
          </el-col>
          <el-col>
            <div>
              <el-rate
                       v-model="mrating"
                       :max="5"
                       disabled
                       show-text
                       allow-half
                       :texts='["A Complete Flop", "Run-of-the-Mill", "Has Its Moments", "Hits the Nail on the Head", "A Masterpiece"]' />
            </div>
          </el-col>
          <el-col>
            <span>
              类型:
            </span>
            <a
                  v-for="(item, index) in category"
                  :key="index"
                  class="mvcategory">
              {{ item }}
            </a>
          </el-col>
        </div>
        <div class="mm">
          <text>
            {{ description }}
          </text>
        </div>
        <div class="mb">
          <el-col>
            <span>
              导演:
            </span>
            <a class="mvcategory">
              {{ director }}
            </a>
          </el-col>
          <el-col>
            <span>
              参演:
            </span>
            <a
                  v-for="(item,index) in actors"
                  :key="index"
                  class="mvcategory">
              {{ item }}
            </a>
          </el-col>
        </div>
      </el-main>
    </el-container>
  </el-card>
</template>

<script lang="js">
import { min2hour } from '@/js/tool';

export default {
  name: 'detialMovieCardVue',
  props: {
    id: Number,
    title: String,
    director: String,
    releaseDate: String,
    rating: Number,
    category: Array,
    duration: Number,
    description: String,
    actors: Array,
    poster_url: String,
  },
  methods: {
    min2hour,
    nav2movie() {
      console.log('nav2movie', this.id)
      this.$router.push({ path: `/movie/${this.id}` });
    }
  },
  data() {
    return {
      mrating: this.rating
    }
  }
}
</script>

<style scoped>
.my-main {
  display: flex;
  align-items: start;
  justify-content: space-between;
  flex-direction: column;
  text-align: start;
  padding: .5rem;
}

.mt>*,
.mm>*,
.mb>* {
  margin-top: .5rem;
}

.mvtitle {
  font-size: 1.75rem;
  font-weight: 500;
  cursor: pointer;
}

.mvtitle:hover {
  color: #757575;
}

.mvdd {
  display: flex;
  justify-content: space-between;
  font-size: .85rem;
  color: #767676;
}

.mvcategory::after {
  content: ',';
  margin-right: .5rem;
}

.mvcategory:last-child::after {
  content: '';
}

.mm {
  margin-top: .5rem;
  font-size: .75rem;
  width: 100%;
}
</style>