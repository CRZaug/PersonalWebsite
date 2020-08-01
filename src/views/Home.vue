<template>

  <div class="home" data-spy="scroll" data-target=".navbar" data-offset="50">
    <navigation1/>
    
    <section id = "intro">
      
      <intro/>
    </section>

    <section id ="about">
      <about/>
    </section>

    <section id = "projectcards">
        <projectcards/>
      </section>

    <section id = "timeline">
      <timeline/>
    </section>

    <section id = "contact">
      <contact/>
    </section>

    <section id = "footer">
      <footer1/>
    </section>
  
    <router-view/> 
  </div>

</template>

<script>
import navigation1 from '@/components/navigation1.vue'
import intro from '@/components/intro.vue'
import projectcards from '@/components/projectcards.vue'
import about from '@/components/about.vue'
import timeline from '@/components/timeline.vue'
import contact from '@/components/contact.vue'
import footer1 from '@/components/footer.vue'


export default {
  name: "Home",
  components: {
    navigation1,
    intro,
    about,
    projectcards,
    timeline,
    contact,
    footer1
    
  }
}
</script>


<style scoped>


#home {
    
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    /* text-align: center; */
    color: #4e323d;
    background-color:  #f2eee6;
    
  }



</style>
