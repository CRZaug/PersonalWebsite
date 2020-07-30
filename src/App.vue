
<template>
  <div id="app"> <!-- div tab divides sections in html-->
  <!-- <navigation/>  -->
    
    <router-view/> 
  </div>

</template>

<script>
// import navigation from '@/components/navigation.vue'
// import projectcards from '@/components/projectcards.vue'
// import about from '@/components/about.vue'
// import timeline from '@/components/timeline.vue'
// import contact from '@/components/contact.vue'

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
    color: #2c3e50;
    background-color: #f7ede2;
  }
 
 html {
  scroll-behavior: smooth;
}


</style>
