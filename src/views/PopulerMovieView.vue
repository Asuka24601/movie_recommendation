<template>
  <movieStoreHeaderVue :title="title" :text="text" style="margin-bottom: 2rem;"></movieStoreHeaderVue>
  <lineDisplayVue :Data="Data"></lineDisplayVue>
</template>

<script lang="js">
import movieStoreHeaderVue from '@/components/movieStore/header.vue'
import lineDisplayVue from '@/components/movieStore/resultItems/lineDisplay.vue';
import PM from '@/js/populerMovie'

export default {
  components: {
    movieStoreHeaderVue,
    lineDisplayVue
  },
  data() {
    return {
      PM,
      title: '正在热映',
      text: '正在热映',
      Data: [],
    }
  },
  methods: {
    fetchData() {
      console.log('fetch data')
      this.Data = PM.get_data().data.data
    }
  },
  mounted() {
    this.fetchData()
  }
}
</script>