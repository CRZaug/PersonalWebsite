<template>
<body>
    <nav class = "navbar">
        <ul>
            <li>
                 <img src = "../assets/IMG_2768.jpeg" alt = "from Taylor" id = "introPic" width="30px" />
            </li>
            <li id= "name">  
                <h3>Camille Zaug</h3>
            </li>
            <li><a href = "#intro">Home</a></li>
            <li><a href = "#about">About</a></li>
            <li><a href = "#projectcards">Projects</a></li>
            <li><a href = "#timeline">Experience</a></li>
            <li><a href = "#contact">Contact</a></li>
        </ul>

    </nav>
</body>
</template>

<style scoped>

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
    padding-right: 4em;
    top: -10%;
}



</style>