<template>
    <body>
        <div id = "container">
            <div id = "title">
            <h2> Awards </h2>
            <p> <i> A few favorite accomplishments! </i> </p>
            </div> 
            <div id = "main">
                
                <!-- <p> I'm proud to have been recognized for my work in academics and research. Here are some key achievements: </p> -->
                <ul>
                    <li >  <h5>  <font-awesome-icon  icon = "award"  size = "1x" :style="{ color: '#4e323d' }"/> President's Award (2020)</h5>  </li>
                    <ul class = "sub"> <li> <i>Elected by department chairs and university president to receive the highest academic award at Seattle University given to a graduating senior</i></li> </ul>
                    <li id> <h5>  <font-awesome-icon  icon = "thumbtack"  size = "1x" :style="{ color: '#4e323d' }"/>  SIAM Best Poster Award (2019) </h5> </li>
                    <ul class = "sub"> <li> <i> Award presented for the poster "Frequency Downshift in the Ocean" at the October PNW sectional meeting </i></li> </ul>
                    <li > <h5>  <font-awesome-icon  icon = "apple-alt"  size = "1x" :style="{ color: '#4e323d' }"/>  Seattle University Impactaton Winner (2018) </h5> </li>
                     <ul class = "sub"> <li> <i>Won for designing a responsive nutrition education plan for the Seattle community in a hackathon-style event</i></li> </ul>
                </ul>
            </div>
        </div>
    </body>
</template>

<style scoped>
body {
    background-color: #f2eee6;
    
    padding-top: 1em;
    padding-bottom: 2em;


    color: #4e323d;
    /* margin-top: 1em;
    margin-bottom: 1em; */
}

#container{
    margin-top: 5em;
    height: 100%;
    display:flex;
    justify-content: center;


}

#title{
    height: 7em;
    background-color:#d8746a;
    border-top: 4px solid #d54325;
    border-left: 4px solid #d54325;
    padding-top: 1em;
    padding-bottom: 1em;
    padding-left: 2em;
    padding-right: 7em;
    border-radius: 5px;
    
    margin-right: -5%;
    margin-top: 2.5%
}

#main{
    
    border-radius: 5px;

    padding: 1em;
    padding-top: 2em;

    border-left: 4px solid #4e323d;
    
    box-shadow: 3px 3px 8px #4e323d;
    width:40%;
    background-color:#f2eee6;
}

.sub{
    margin-bottom:0.5em;
    margin-left: -1.25em;
}

ul {
    list-style: none;
    margin-left: -1.5em;

}

@media only screen and (max-width: 1000px) {

#container{
    display: block;
}

#title{
    padding-right: 2em;
    padding-bottom: 7em;
    
    
    margin-left:auto;
    margin-right:auto;
    margin-bottom: -1em;

    width: 22em;
    text-align:center;
}

#main{
    width: 75%;
    margin-left:auto;
    margin-right:auto;
}

}

</style>