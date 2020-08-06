<template>
<body>
    <div class = "about">

        <div class = "paragraph">
    

            <h2> A little about me </h2>
            <br>

            <div class = "aboutA">
                <font-awesome-icon icon = "graduation-cap" size = "2x" :style="{ color: '#4e323d' }"/>
                <p> <b>2020 Seattle University graduate</b>, <i>summa cum laude</i>
                    <br>
                    B.S. Mathematics, B.A. Physics, Chinese minor
                     </p>
            </div>
            <br>
            <div class = "aboutB">
                <font-awesome-icon icon = "laptop-house"  size = "2x" :style="{ color: '#4e323d' }"/>
                <p> <b>Software engineering intern</b> with Creative Creek
                    <br>
                    <b>Instructor</b> with Girls Who Code</p>
                </div>
                <br>
            <div class = "aboutA">
                <font-awesome-icon icon = "calculator"  size = "2x" :style="{ color: '#4e323d' }"/>
                <p> <b>Applied mathematics graduate student</b> at the University of Washington starting fall 2020</p>
            </div>
        
           

        
        </div>
        <div class = "break"></div>
        <div class = "bullets">
          
             <h2> What I'm learning</h2>
             <br>
             <h3> "Professional" things </h3> <!-- Change font -->
             <br>
             <div class = "bulletSection">
            <div class ="bullet">
                <font-awesome-icon icon = "infinity" size = "2x" :style="{ color: '#4e323d' }"/> 
                <h6>Applied mathematics</h6>
            </div>
            <div class ="bullet">
                <font-awesome-icon icon = "mouse" size = "2x" :style="{ color: '#4e323d' }"/>
               <h6>  Computer science</h6>
            </div>
            <div class ="bullet">
                <font-awesome-icon icon = "language" size = "2x" :style="{ color: '#4e323d' }"/>
                <h6> Mandarin Chinese</h6>
            </div>
            
            
            <div class ="bullet">
                <font-awesome-icon icon = "chalkboard-teacher" size = "2x" :style="{ color: '#4e323d' }"/> 
                <h6>Anti-racist education</h6>
            </div>
            </div>
            <br>

            <br>

            <h3> Things for fun! </h3> <!-- Change font -->
            <br>
            
            <div class = "bulletSection">
            <div class ="bullet">
                <font-awesome-icon  icon = "mountain"  size = "2x" :style="{ color: '#4e323d' }"/> 
                <h6> Bouldering</h6> 
                
            </div>
            <div class ="bullet">
                 <font-awesome-icon icon = "music" size = "2x" :style="{ color: '#4e323d' }"/>
                 <h6> Piano and guitar </h6> 
            </div>
            <div class ="bullet">
                <font-awesome-icon   icon = "trophy" size = "2x" :style="{ color: '#4e323d' }"/> 
                 <h6> Tennis</h6> 
            </div>
            
            <div class ="bullet">
                 <font-awesome-icon icon = "utensils" size = "2x" :style="{ color: '#4e323d' }"/>
                <h6> Vegetarian cooking</h6> 
            </div>
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

p {
    margin-left: 0.5em;
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
    position: relative;
    background-color: #e9c0b0;
    padding-right: 5%;
    border-left: 8px solid #693338;
    right: 5%;
    margin-right: 1.5em;
    padding-left: 12.5%;

}
.paragraph {
    position: relative;
    /* height: 80%; */
    margin-left:1.5em;
    margin-right: 1.5em;
    max-height:100%;
    padding-top: 7%;
    padding-bottom: 7%;
    border-top: 8px solid #d54325;
    border-left: 8px solid #d54325;
    box-shadow: 3px 3px 8px #4e323d;
    background-color:  #f2eee6;
    left: 5%;
    z-index: 1;
}


.aboutA, .aboutB{
    display: flex;
    flex-direction: row;
}

.bullet{
text-align: center;
flex-basis:50%;
margin-bottom: 0.75em;
}

.bulletSection{
    display:flex;
    flex-wrap: wrap;
    }

/* Media breakpoint */
@media only screen and (max-width: 1000px) {


.about{
    flex-direction: column;
}

.paragraph{
    width:80%;
    left:0;
}

.bullets{
    width:100%;
    border: 0px;
    margin: 0;
    padding-top: 2em;
    left:0;
    top: -1em;
    border-bottom: 8px solid #693338;
}

.break{
    flex-basis: 100%
}
}


</style>


