<template>
<body>
    <nav class = "navbar">
        <ul>
            <li>
                 <img src = "../assets/IMG_2768.jpeg" alt = "from Taylor" id = "introPic" width="30px" />
            </li>
            <li>  
                <a href = "#intro" ><h3 id= "name">Camille Zaug</h3></a>
            </li>
            <li><a href = "#about">About</a></li>
            <li><a href = "#projectcards">Projects</a></li>
            <li><a href = "#timeline">Experience</a></li>
            <li><a href = "#contact">Contact</a></li>
            <li><a href = "../assets/Camille_Zaug_Resume_July_2020.pdf" target = "_blank" download> Resume </a></li>
        </ul>

    </nav>
</body>
</template>

<style scoped>

*{
    padding:0;
    margin: 0;
}

ul {
    padding-top: 0.2em;
    list-style-type: none;
    margin-bottom: 0.4em;
}

li{
    display: inline-block;
    padding-right:1em;


    }

a {
    color: #f2eee6;
    top: -10%;
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
    height: 60px;
    z-index:2;

}

#name {
    color: #d54325;
    padding-right: 1em;
}



</style>