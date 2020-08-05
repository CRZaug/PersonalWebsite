<template>
<body>
    <div class = "about">

        <div class = "paragraph">
    
            <div id="p-card">
            <h2> A little about me </h2>

            <div class = "aboutA">
                <font-awesome-icon icon = "graduation-cap" /> 2020 Seattle University graduate    
            </div>
            <div class = "aboutB">
                <font-awesome-icon icon = "laptop-house" /> Software engineering intern and Girls Who Code instructor</div>
            <div class = "aboutA">
                <font-awesome-icon icon = "calculator" /> Applied mathematics graduate student at the University of Washington fall 2020
            </div>
                </div>
           

        
        </div>
        <div class = "bullets">
          
             <h2> Things I am excited to be learning</h2>
            <br>

                <h3> Serious things </h3> <!-- Change font -->
            <div class ="bulletA">
                <font-awesome-icon icon = "mouse" /> Computer science
            </div>
            <div class ="bulletB">
                <font-awesome-icon icon = "chalkboard-teacher" /> Equitable, anti-racist education
            </div>
            <div class ="bulletA">
                <font-awesome-icon icon = "infinity" /> Applied mathematics
            </div>
            <div class ="bulletB">
                <font-awesome-icon icon = "language" /> Mandarin Chinese
            </div>
            <br>

            <br>

            <h3> Things for fun! </h3> <!-- Change font -->

            
            <div class ="bulletB">
                <font-awesome-icon icon = "mountain" /> Bouldering
            </div>
            <div class ="bulletA">
                 <font-awesome-icon icon = "trophy" /> Tennis
            </div>
            <div class ="bulletB">
                <font-awesome-icon icon = "music" /> Piano and Guitar
            </div>
            <div class ="bulletA">
                <font-awesome-icon icon = "utensils" /> Vegetarian cooking
            </div>



        </div>
    </div>
</body>
</template>

<style scoped>

* {
    padding: 0;
    margin: 0;
}

body {
    background-color: #f2eee6;
}

body:before {
    content:'';
    display:block;
    position: relative;
    width:0;
    height:5em;
    margin-top:-5em;
}

ul {
text-align: left;
list-style-type:none;

    }

.about {
    display: flex;
    justify-content: center;
    align-items: center;
    flex: wrap;
    margin-bottom: 10em;
}



.bullets, .paragraph {
    display:flex;
    flex-direction: column;
    justify-content: center;
    width:100%;
    padding: 2em;
    border-radius: 4px;
}

.bullets {
    /* position: relative; */
    background-color: #e9c0b0;
    padding-left: 10%;
    padding-right: 15%;
    border-left: 8px solid #693338;


}
.paragraph {
    position: relative;
    /* height: 80%; */
    margin-left:1.5em;
    margin-right: 1.5em;
    max-height:100%;
    padding-top: 10%;
    padding-bottom: 10%;
    border-top: 8px solid #d54325;
    border-left: 8px solid #d54325;
    box-shadow: 3px 3px 8px #4e323d;
    background-color:  #f2eee6;
    left: 5%;
}





.aboutA, .bulletA{
    /* width: 80%; */
    text-align: left;
    margin: 1em;
    flex-basis: 80%;

}

.aboutB, .bulletB{
    /* width: 80%; */
    text-align: right;
    margin: 1em;
    flex-basis: 80%;

}



</style>


