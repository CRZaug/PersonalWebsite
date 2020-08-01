<template>
    <body>
        <div class = "content">
        <h3> Say hello! </h3>

        <p> There will be some links here in the future! </p>
        </div>

        <div class = "work">
            <h4> Want to see more of my work? </h4>

           
       
        </div>

         <div class = "links">
                <div id ="resume"> </div>
                <div id ="github"> </div>
                <div id ="glitch"> </div>
                <div id ="arch"> </div>

            </div>
    </body>
</template>

<style scoped>
body {

    background-color: #f2eee6;
    margin-bottom: 5em;
}

body:before {
    content:'';
    display:block;
    position: relative;
    width:0;
    height:5em;
    margin-top:-5em;

}

.content {
    position: relative;
    text-align: center;
    padding: 10%;
    background-color: #693338;
    color: #f2eee6;
    max-width: 600px;
    max-height: 50%;
    border-radius: 5px;
    border-top: 8px solid #d54325;
    border-left: 8px solid #d54325;
    margin-left: auto;
    margin-right: auto;
    

}

.work {
    position: relative;
    top: -2em;
    text-align: center;
    padding: 2%;
    background-color: #e9c0b0;
    color: #4e323d;
    max-width: 400px;
    max-height: 50%;
    border-radius: 5px;
    margin-left: auto;
    margin-right: auto;
    box-shadow: 3px 3px 8px #4e323d;

    

}

.links {
    margin-top: 2em;
    padding-left: 15%;
    padding-right: 15%;
    padding-bottom: 3em;
    display: flex;
    justify-content: space-evenly;

   

}

#resume, #github, #glitch, #arch {

background-color: #d54325;
width: 70px;
height: 70px;
border-radius: 5px;
box-shadow: 3px 3px 8px #4e323d;


}


</style>