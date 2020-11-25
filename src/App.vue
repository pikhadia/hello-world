<template>
  <div>
    <HelloWorld msg="Home" />
    <Card />
    <Drawer/>
    <!-- <vue-dropdown></vue-dropdown> -->
    <!-- <vue-dropdown :config="config"></vue-dropdown> -->
  </div>
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";
import Drawer from "./components/Drawer.vue";
import Card from "./components/Card.vue";
// import vueDropdown from "./components/vue-dropdown/vue-dropdown";


export default {
  name: "App",
  components: {
    HelloWorld,
    Card,
    Drawer,
    // vueDropdown,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
#app {
  background-image: url('./assets/cold-bg3.jpg');
  background-size: cover;
  background-position: bottom;
  transition: 0.4s;
}
</style>
