<template>
  <div class="home" data-spy="scroll" data-target=".navbar" data-offset="50">
    <navigation1 v-if="$mq === 'md'"></navigation1>

    <navigationmobile v-if="$mq === 'sm'"></navigationmobile>

    <section id="intro">
      <intro />
    </section>

    <section id="about">
      <about />
    </section>

    <section id="projectcards">
      <projectcards />
    </section>

    <section id="timeline">
      <timeline />
    </section>

    <section id="awards">
      <awards />
    </section>

    <section id="contact">
      <contact />
    </section>

    <section id="footer">
      <footer1 />
    </section>

    <router-view />
  </div>
</template>

<script>
import navigation1 from "@/components/navigation1.vue";
import navigationmobile from "@/components/navigationmobile.vue";
import intro from "@/components/intro.vue";
import projectcards from "@/components/projectcards.vue";
import about from "@/components/about.vue";
import timeline from "@/components/timeline.vue";
import awards from "@/components/awards.vue";
import contact from "@/components/contact.vue";
import footer1 from "@/components/footer.vue";

export default {
  name: "Home",
  components: {
    navigationmobile,
    navigation1,
    intro,
    about,
    projectcards,
    timeline,
    awards,
    contact,
    footer1
  }
};
</script>


<style>
html,
body {
  width: 100%;
  height: 100%;
  margin: 0px;
  padding: 0px;
  overflow-x: hidden;
  scroll-behavior: smooth;
}

#home {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center; */
  color: #4e323d;
  background-color: #f2eee6;
}
</style>
