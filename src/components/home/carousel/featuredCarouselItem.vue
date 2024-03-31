<template>
  <el-card>
    <div class="mymain">
      <div class="pic">
        <el-image :src="pic" alt="" fit="cover" class="info-p" />
        <div class="info">
          <div>
            <div v-if="(type === '清单' | 'List')">
              <el-icon>
                <Film />
              </el-icon>
            </div>
            <div v-else>
              <el-icon>
                <Picture />
              </el-icon>
            </div>
          </div>
          <div>
            <span>{{ type }}</span>
          </div>
        </div>
      </div>
      <div class="title">
        <span>
          {{ title }}
        </span>
      </div>
      <div class="get">
        <el-button type="text" size="small">{{ getMore }} ></el-button>
      </div>
    </div>
  </el-card>
</template>

<script lang="js">
export default {
  name: 'featuredCarouselItemVue',
  props: {
    collection_id: String,
    pic: String,
    title: String,
    type: String,
    getMore: String,
  },
};
</script>

<style scoped>
.mymain {
  display: flex;
  flex-direction: column;
  background-color: black;
  color: white;
  height: 100%;
}

.pic {
  position: relative;
  height: 70%;
}

.info-p {
  width: 100%;
  height: 100%;
}

.info {
  position: absolute;
  left: 0;
  bottom: 0;
  /* width: 100%;
  height: 100%; */
  display: inline-block;
  display: flex;
  flex-direction: row;
  align-items: end;
  justify-content: start;
  margin: .5rem;
  background-color: rgba(0, 0, 0, 0.205);
}

.info>div {
  margin: .25rem;
}

.info div:nth-child(2) {
  padding-bottom: .15rem;
}

.title {
  /* position: relative; */
  margin: 1rem 1rem 0 .75rem;
  font-size: 1.25rem;
  text-align: start;
  height: 15%;
}

.get {
  /* position: relative; */
  margin-left: .15rem;
  text-align: start;
  height: 15%;
}
</style>