<template>
  
  <div>
    <b-navbar class = "navbar fixed-top" toggleable = 'lg' type = 'dark' variant = 'dark' >
        <b-navbar-brand> Camille Renee Zaug </b-navbar-brand>
        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

        <b-collapse id="nav-collapse" is-nav>
            <b-navbar-nav>
                <b-nav-item id = "nhome" href="/" v-smooth-scroll>Home</b-nav-item>
                <b-nav-item id = "nabout" href="/#about" v-smooth-scroll>About</b-nav-item>
                <b-nav-item id = "nprojectcards" href="/#projectcards" v-smooth-scroll>Projects </b-nav-item>
                <b-nav-item id = "ntimeline" href="#timeline" v-smooth-scroll>Timeline </b-nav-item>
                <b-nav-item id = "ncontact" href="#contact" v-smooth-scroll>Contact </b-nav-item>
            </b-navbar-nav>

        </b-collapse>

        
    </b-navbar>
  </div>

</template>

<script>
export default {
    name: "navigtion",
    components: {
    }
}


</script>

<style scoped>

</style>