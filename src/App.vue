
<template>
  <div id="app"> <!-- div tab divides sections in html-->
  <!-- <navigation/>  -->
    
    <router-view/> 
  </div>

</template>

<script>


export default {
  name: "App",
  components: {
    // navigation
  }
}

</script>


<style>


#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    /* text-align: center; */
    color: #4e323d;
    background-color:  #f2eee6;
  }
 
 html {
  scroll-behavior: smooth;
}


</style>
