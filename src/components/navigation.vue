<template>
  
  <div>
    <b-navbar toggleable = 'lg' type = 'dark' variant = 'dark'>
        <b-navbar-brand> Camille Renee Zaug </b-navbar-brand>
        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

        <b-collapse id="nav-collapse" is-nav>
            <b-navbar-nav>
                <b-nav-item href="/">Home</b-nav-item>
                <b-nav-item href="/About">About me</b-nav-item>
                <b-nav-item href="/Portfolio">Portfolio</b-nav-item>
                <b-nav-item href="#" disabled>Resume to go here</b-nav-item>
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