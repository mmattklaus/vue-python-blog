<template>
  <div id="app">
    <nav-bar></nav-bar>
    <div class="views">
      <router-view/>
    </div>
  </div>
</template>
<script >
import NavBar from '@/components/NavBar.vue'
export default {
  name: 'app',
  components: {
    'nav-bar': NavBar
  }
}
</script>

<style>
#app {}
.views > :not(#home) {
  padding-top: 200px;
}
  body {
    overflow-x: hidden;
  }
</style>
