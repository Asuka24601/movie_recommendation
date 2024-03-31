<template>
  <movieStoreHeaderVue :title="title" :text="text"  style="margin-bottom: 2rem;"></movieStoreHeaderVue>
  <lineDisplayVue :Data="Data"></lineDisplayVue>
</template>

<script lang="js">
import movieStoreHeaderVue from '@/components/movieStore/header.vue'
import lineDisplayVue from '@/components/movieStore/resultItems/lineDisplay.vue';
import CSM from '@/js/comingSoon'

export default {
  components: {
    movieStoreHeaderVue,
    lineDisplayVue
  },
  data() {
    return {
      CSM,
      title: '即将上映',
      text: '即将上映',
      Data: [],
    }
  },
  methods: {
    fetchData() {
      console.log('fetch data')
      this.Data = CSM.get_data().data.data
    }
  },
  mounted() {
    this.fetchData()
  }
}
</script>