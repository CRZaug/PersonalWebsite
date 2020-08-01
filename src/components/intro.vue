<template>
<body>
    <div id = "intro">
        <div>
            <h1>Hello!</h1>
        </div>
        <div>
            <img src = "../assets/IMG_2768.jpeg" alt = "from Taylor" id = "introPic" width="200px" />
        </div>
        <br>
        <div> 
            <h2>I'm Camille.</h2>
            <h4>Welcome to my interactive resume!</h4>
        </div>
        
    </div>
</body>
</template>


<style scoped>

body {
    margin-bottom: 3em;
}

h1 {
    font-size: 40px;
    color:#693338;
}

h2 {
    color: #d54325;

}
h4 {
    color:#693338;
}

#intro{
    text-align: center;
    display: flex;
    flex-direction: column;
    margin-bottom: 5em;
    background-color:#f2eee6;
    padding-top: 10em;
}

#introPic {
    border-radius: 20%;
}


:target {
  display: block;
  position: relative;
  top: -120px; 
  visibility: hidden;
}
</style>