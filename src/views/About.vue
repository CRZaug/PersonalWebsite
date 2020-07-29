<template>
  <div id="about">
    <p>{{msg}}</p>
    <router-link to ="/"> Navigate to Home </router-link>

  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'
//import cards from '@/components/cards.vue'

export default {
  name: 'About',
  data () {
      return {
          msg: 'This is my message'
      }
  }
}
</script>


<style scoped>
#about {
  color: black;
}
</style>