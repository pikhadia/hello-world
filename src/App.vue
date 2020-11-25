<template>
  <div>
    <HelloWorld msg="Home" />
    <Drawer/>
    <Card/>
  </div>
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";
import Drawer from "./components/Drawer.vue";
import Card from "./components/Card.vue";



export default {
  name: "App",
  components: {
    HelloWorld,
    Drawer,
    Card,

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
