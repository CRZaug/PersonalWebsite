<template>
<body>
    <div class = "bgImg">
    <div id = "intro">
        <div class = "overlay"></div>
        
        <!-- <div>
            <h1>Hello!</h1>
        </div> -->
        <!-- <div>
            <img src = "../assets/IMG_2768.jpeg" alt = "from Taylor" id = "introPic" width="200px" />
        </div> -->
        <br>
        <div class = "text"> 
            <h1>I'm Camille.</h1>
            <h4>Welcome to my interactive resume!</h4>
        </div>
    
        
    </div>
    </div>
</body>
</template>


<style scoped>

body {
    margin-bottom: 3em;
    background-color: #f2eee6;
    
}

h1 {
    position: relative;
    font-size: 1000%;
    color:#f2eee6;
    z-index: 1;

  
}


h4 {
    position: relative;
    color:#f2eee6;

    font-size:300%;
    z-index: 1;
}


#intro{
    text-align: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-content: center;

    margin-bottom: 5em;
    background-color:#f2eee6;
    /* padding-top: 10em; */

    height: 100vh;

    background-image: url(../assets/IMG_2768.jpeg);
    background-size: 105%;
    background-position: center;

    z-index: 0;

    
}

/* .overlay{
    position: relative;
    top:0;
    left:0;
    width: 100%;
    height: 100%;
    background-color: #4e323d;
    opacity: 0.5;
    z-index: 0;
} */



:target {
  display: block;
  position: relative;
  top: -120px; 
  visibility: hidden;
}

/* Media query to shrink margin on top */
@media only screen and (max-width: 800px) {
    

#intro{
    /* padding-top: 5em; */

    height: 50vh;
}

.overlay{
    display:none;
}

h1 {
    font-size: 500%;
}

h4 {
   font-size: 300%; 
}

}
@media only screen and (max-width: 800px) {

h1 {
    font-size: 300%;
    z-index: 1;
}

h4 {
   font-size: 125%; 
}

}




</style>