<template>
  <div class="home">
    <HomeVue/>
  </div>
</template>

<script>
// @ is an alias to /src
import HomeVue from '@/components/Home.vue'

export default {
  name: 'HomeView',
  components: {
    HomeVue
  }
}
</script>
