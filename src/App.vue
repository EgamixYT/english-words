<template>
  <div id="app">
    <component :is="layout" >
    </component>
      <router-view></router-view>
  </div>
</template>


<script>
  import Navbar from './layouts/Navbar.vue'
  
  export default {
    components: {
      Navbar
    },
    computed: {
      layout() {
        return `${this.$route.meta.layout}`
      }
    },
  }
</script>


<style>

</style>