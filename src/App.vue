<template>
  <div id="app">
    <NavBar/>
    <router-view class="my-5 py-5"/>
    <Footer class="mt-3"/>
  </div>
</template>

<script>

import NavBar from './components/NavBar.vue';
import Footer from './components/Footer.vue';

export default {
  components: {
    NavBar,
    Footer
  },
  name: 'App',
  created() {
       this.$store.dispatch('apiData');
  },
}
  
</script>

<style scoped>
#app {
  min-height: 100vh;
  background-image: url("assets/0ddb97bb344db989e99479155395f4cf.jpg");
   background-repeat: repeat-y;
    background-size: cover;
    margin: 0;
    padding: 0;
}

h1 {
  text-align: center;
}

</style>
