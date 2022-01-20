<template>
  <Home />
  <!-- <router-view/> -->
</template>

<script>
import Home from '@/views/Home.vue';

export default {
  components: {
    Home,
  },
};

</script>

<style>
@import url('https://fonts.googleapis.com/css?family=Roboto');

html { font-size: 22px; }

.skeleton {
  z-index: 5;
  display: flex;
  justify-content: center;
  align-items: center;
}

body {
  font-family: 'Roboto', sans-serif;
  width: 100%;
  min-height: 100vh;
  margin: 0;
  padding: 0;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

</style>
