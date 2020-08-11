<template>
<body>
    <nav class = "navbar">

                 <!-- <img src = "../assets/IMG_2768.jpeg" alt = "from Taylor" id = "introPic" width="30px" /> -->
            
                <a href = "#intro" ><h4 id= "name">Camille Renee Zaug</h4></a>
            <div>
            <a href = "#about">About</a>
            <a href = "#projectcards">Projects</a>
            <a href = "#timeline">Experience</a>
            <a href = "#contact">Contact</a>
            <a href="/Camille_Zaug_Resume_July_2020.pdf" download>Resume</a>
            </div>

    </nav>
</body>
</template>

<style scoped>

*{
    padding:0;
    margin: 0;
}



a {
    padding-right: 0.5em;
    color: #f2eee6;
}

a:hover {
    color:#e9c0b0;
    text-decoration: none;
}

.navbar {
    color: #f2eee6;
    background-color: #4e323d;
    position: fixed; /* Set the navbar to fixed position */
    top: 0; /* Position the navbar at the top of the page */
    width: 100%; /* Full width */
    z-index:2;

    padding-top: 0.75em;
    padding-bottom: 0.5em;
    padding-left: 0%;

    display: flex;
    justify-content: flex-start;
    align-items: flex-end;

}

#name {
    color: #d8746a;
    padding-right: 1em;
    padding-left: 1em;
}

#imgId{
    width: "100";
}

</style>