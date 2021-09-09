<template>
  <div id="app">
    <Header />
    <Home />
  </div>
</template>

<script>
import Home from '@/components/Home.vue'
import Header from '@/components/shared/Header.vue'

import '@/assets/css/style.css'

export default {
  name: 'App',
  components: {
    Home,
    Header
  },

  mounted(){
    
  }
}
</script>
