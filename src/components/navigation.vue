<template>
  
  <div>
    <b-navbar class = "navbar fixed-top color" toggleable = 'lg' type = 'dark' variant = 'dark' >
        <b-navbar-brand> Camille Renee Zaug </b-navbar-brand>
        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

        <b-collapse id="nav-collapse" is-nav>
            <b-navbar-nav>
                <b-nav-item id = "nhome" href="#intro">Home</b-nav-item>
                <b-nav-item id = "nabout" href="#about">About</b-nav-item>
                <b-nav-item id = "nprojectcards" href="#projectcards">Projects </b-nav-item>
                <b-nav-item id = "ntimeline" href="#timeline">Timeline </b-nav-item>
                <b-nav-item id = "ncontact" href="#contact">Contact </b-nav-item>
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

.color {
  background-color: #4e323d;
  color: #f2eee6;
}

</style>