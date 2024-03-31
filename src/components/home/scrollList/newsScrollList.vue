<template>

  <div class="monitor-list">
    <!-- 左边按钮 -->
    <div class="btn" @click="scrollLeft">
      <el-icon>
        <ArrowLeft />
      </el-icon>
    </div>
    <!-- 中间列表 -->
    <div :id="String(listId) + 'list-box'" class="list-box">
      <div :id="String(listId) + 'list'" class="list" :style="'width:' + listWidth + ';'">

        <newsCardVue :id="String(listId) + 'mvCard'"
                     v-for="item in monitorList"
                     :key="item" class="list-item"
                     :title="item.title"
                     :cover="item.cover"
                     :date="item.date"
                     :type="item.type"
                     :from="item.from"
                     :content="item.content" />

      </div>
    </div>
    <!-- 右边按钮 -->
    <div class="btn" @click="scrollRight">
      <el-icon>
        <ArrowRight />
      </el-icon>
    </div>
  </div>

</template>

<script lang="js">
import newsCardVue from '../carousel/newsCard.vue';

export default {
  name: 'startScrollListVue',
  props: {
    monitorList: Array,
    listId: Number,
    listWidth: String,
  },
  components: {
    newsCardVue
  },
  methods: {
    // 左滑动逻辑
    scrollLeft() {
      const marginR = getComputedStyle(document.getElementById(String(this.listId) + 'mvCard'), null).marginRight;
      const itemLength = document.getElementById(String(this.listId) + 'mvCard').offsetWidth + parseInt(marginR.substring(0, marginR.length - 2)) * 2;
      const allLength = itemLength * this.monitorList.length;
      const boxLength = document.getElementById(String(this.listId) + 'list-box').offsetWidth;
      if (allLength < boxLength) return
      const listEl = document.getElementById(String(this.listId) + 'list')
      const leftMove = Math.abs(parseInt(window.getComputedStyle(listEl, null)?.left))
      if (leftMove + boxLength - itemLength < boxLength) {
        // 到最开始的时候
        listEl.style.left = '0px'
      } else {
        listEl.style.left = '-' + (leftMove - itemLength) + 'px'
      }
    },
    // 右滑动逻辑
    scrollRight() {
      const marginR = getComputedStyle(document.getElementById(String(this.listId) + 'mvCard'), null).marginRight;
      const itemLength = document.getElementById(String(this.listId) + 'mvCard').offsetWidth + parseInt(marginR.substring(0, marginR.length - 2)) * 2;
      const allLength = itemLength * this.monitorList.length;
      const boxLength = document.getElementById(String(this.listId) + 'list-box').offsetWidth;
      if (allLength < boxLength) return
      const listEl = document.getElementById(String(this.listId) + 'list')
      const leftMove = Math.abs(parseInt(window.getComputedStyle(listEl, null)?.left))
      if (leftMove + boxLength + itemLength > allLength) {
        listEl.style.left = '-' + (allLength - boxLength) + 'px'
      } else {
        listEl.style.left = '-' + (leftMove + itemLength) + 'px'
      }
    }
  }
}
</script>
<style scoped>
.monitor-list {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
}

.list-box {
  width: 100%;
  overflow: hidden;
}

.list {
  width: 200%;
  display: flex;
  flex-direction: row;
  position: relative;
  transform: all 2s;
  left: 0;
  transition: left 1s;
}

.list-item {
  flex-grow: 1;
  cursor: pointer;
  margin: .75rem;
}

.list-item:nth-child(1) {
  margin-left: 0;
}

.list-item:nth-last-child(1) {
  margin-right: 0;
}

.btn {
  border: 1px solid #b3d8ff;
  width: 3rem;
  height: 7rem;
  line-height: 7rem;
  text-align: center;
  cursor: pointer;
  background-color: #ecf5ff;
  font-size: 2rem;
  color: #409eff;
}

.btn:nth-last-child(1) {
  margin-left: .75rem;
}

.btn:nth-child(1) {
  margin-right: .75rem;
}

.btn:hover {
  background-color: #409eff;
  color: white;
}
</style>