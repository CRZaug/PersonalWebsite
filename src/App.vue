<!-- The App.vue is what main.ts instatiates -->

<template>
  <div id="app"> <!-- div tab divides sections in html-->
    <div id="nav">
      <router-link to="/">Home</router-link> 
    </div>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: "App",
  components: {

  }
}
</script>>


<style>


#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
  }
  
  #nav {
    padding: 30px;
  }
  
  #nav a {
    font-weight: bold;
    color: #2c3e50;
  }
  
  #nav a.router-link-exact-active {
    color: #42b983;
  }


</style>
