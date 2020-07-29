<template>
  <div class="portfolio1">
    <p>{{msg}}</p>
    

     <cards>
    
    </cards> 

  <router-link to ="/"> Is this working haha </router-link>

  </div>

</template>

<script>
"use strict";
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'

import cards from '@/components/cards.vue'

export default {
  name: 'Portfolio1',
  components: {
    cards
  },

  data () {
      return {
          msg: 'This is my message; a portfolio message'
      }
  }
}


</script>

