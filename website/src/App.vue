<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<style>
@font-face {
  font-family: "Roboto";
  src: local("Roboto"),
   url(./assets/fonts/Roboto-Regular.ttf) format("truetype");
}

#app {
  font-family: "Roboto", Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
body{
  padding:0;
  margin:0;
}


</style>
