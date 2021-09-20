<template>
  <div id="app">
   <Headerbar> </Headerbar>
   <router-view></router-view>
   <!-- <Login></Login> -->
   <!-- <Panelmain> </Panelmain> -->
   <Footer> </Footer>
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
import Headerbar from './components/Headerbar.vue';
// import Login from './components/Login.vue';
// import Panelmain from './components/Panelmain.vue';
import Footer from './components/Footer.vue'
export default {
  name: 'App',
  components: {
    Headerbar,
    // Login,
    // Panelmain
    Footer
  }
}
</script>

<style>
#app {
  /* margin: 0%;
  padding: 0%;
  width: 100%;
  height: 100%; */
}

</style>
