// Later, add some cute little things I've done as well! Quarantine cooking, picking up piano, etc

<template>
<body>
    <div class = "c">
      <div id ="opportunity">
          <div class ="opportunity-content">
              <h3>Looking for opportunities summer 2021!</h3>
                  <p>
                        I am interested in data science, AI, and software engineering.

                    <br>
                    <br>
                        Want to know more about my professional experience? Check out my resume!
                  </p>
            </div>
              <div class = triangle-container><div class = "triangle"></div></div>

          </div>

          
           

          <div class = "timeline">
            <div class = "colA">
                <div class = "tlcontainer tlA">
                    <div class = "content A">
                    <h4>Creative Creek</h4>
                    <p>Dipping my toes into software engineering and design
                        <br>
                        <br>
                        Working with Python and SQL to write algorithms and query databases in support of financial software development
                    </p>
                </div>
            </div>

            <div class = "tlcontainer tlA">
                <div class = "content A">
                <h4>Seattle University Grad</h4>
                <p>I graduated summa cum laude with a dual degree!
                    <br>
                    <br>
                    I studied mathematics, physics, and Chinese
                     </p>
                </div>    
            </div>

            <div class = "tlcontainer tlA">
                <div class = "content A">
                <h4>Applied Math Research Assistant at Seattle University</h4>
                <p> I studied nonlinear waves and the propagation of swell across the Pacific ocean
                    <br>
                    <br>
                    My involvement in scientific computing through this project sparked my interest in CS!
                     </p>
                </div>    
            </div>

             <div class = "tlcontainer tlA">
                <div class = "content A">
                <h4>Lawrence Livermore National Laboratory Intern</h4>
                <p> Conducting research in materials science provided my first experience Conducting
                    

                    <br>
                    <br>

                    Starting at hopelessly complicated image processing scripts in MATLAB and learning Python was so worth it.
                     </p>
                </div>
            </div>


            </div>

            <div class = "colB">
                

                <div class = "tlcontainer tlB">
                    <div class = "content B">
                    <h4>Instructor at Girls Who Code</h4>
                    <p>Combing my passions of equitable equcation and STEM
                        <br>
                        <br>
                        Teaching over 310 young women HTML, CSS, and Javascript while building virtual classroom culture

                    </p>
                    </div>
                </div>
                
                <div class = "tlcontainer tlB">
                    <div class = "content B">
                    <h4>First Publication</h4>
                    <p>During the winter and spring of 2019, I conducted research developing precision instruments for physics lab students
                        
                        <br>
                        <br>
                        Check out the result here!
                         </p>
                    </div>    
                </div>
                
                <div class = "tlcontainer tlB">
                    <div class = "content B">
                    <h4>Team Lead with Seattle University Mathematics Corps</h4>
                    <p>Provided support to students at Bailey Gatzert Elementary School
                    <br>
                    <br>
                    Worked in classrooms and ran an after school program. Created the SUM corps website! Found here:
                    </p>
                    </div>
                </div>

              

            </div>
           
        

    </div>
    <div class = "circle">
    </div>
    <div class = "circle">
    </div>
    <div class = "circle">
    </div>
    </div>
    

</body>    
</template>

<style scoped>

body{
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

h3 {
    text-align: center;
    color: #f2eee6;
}

/* The extensive styling for the timeline comes below */
.c {
    background-color: inherit;
    margin-bottom: 10em;
    box-sizing: border-box;
    padding-top: 1em;

}


.timeline{
    position: relative;
    max-width: 1200px;
    margin: 0 auto;

    display: flex;
    flex-direction: row;
}

/* Timeline */
.timeline::after{
    content: '';
    position: absolute;
    width: 8px;
    background-color: #693338;
    top: 0;
    bottom: 0;
    left: 49.75%;
}

/* Circles after the timeline, dot dot dot*/
.circle{
  margin-top: 1em;
  margin-left:auto;
  margin-right:auto;
  width: 10px;
  height: 10px;
  left: 2px;
  top: 50px;
  z-index: 1;
  background-color: #693338;
  border-radius: 50%;

}


/* Container around content */
.tlcontainer {
    position: relative;
    background-color: inherit;
    width: 80%;
    left:0;
}

/* The circles on the timeline */
.tlcontainer::after {
  content: '';
  position: absolute;
  width: 25px;
  height: 25px;
  right: -14px;
  background-color: #f2eee6;
  border: 5px solid #d54325;
  top: 15px;
  border-radius: 50%;
  z-index: 1;
}


.colA, .colB {
    width: 600px; 
    margin-left: auto;
    margin-right: auto;
}

.colB{
  margin-top: 6em;
}

.tlA {
    margin-bottom: 1em;
    left: 20%;
}

.tlB {
    margin-top: 0em;
    margin-bottom: 4em;
    
}

.tlB::after {
    left:-.7em;
}

/* Add cirles on right of left col of cards */
.tlA::before {
  content: " ";
  position: absolute;
  width: 10px;
  height: 10px;
  right: 15px;
  top: 21px;
  z-index: 1;
  background-color: #693338;
  border-radius: 50%;
}

/* Add cirles on left of right col of cards */
.tlB::before {
  content: " ";
  position: absolute;
  width: 10px;
  height: 10px;
  left: 20px;
  top: 21px;
  z-index: 1;
  background-color: #693338;
  border-radius: 50%;
}

/* Add arrows to the left container (pointing right) */
/* .tlA::before {
  content: " ";
  height: 0;
  position: absolute;
  top: 22px;
  width: 0;
  z-index: 1;
  right: 30px;
  border: medium solid #f2eee6;
  border-width: 10px 0 10px 10px;
  border-color: transparent transparent transparent #f2eee6;
}*/



/* Add arrows to the right container (pointing left) */
/* .tlB::before {
  content: " ";
  height: 0;
  position: absolute;
  top: 22px;
  width: 0;
  z-index: 1;
  left: 30px;
  border: medium solid #f2eee6;
  border-width: 10px 10px 10px 0;
  border-color: transparent #f2eee6 transparent transparent;
}  */

/* The actual content */
.content {
  padding: 20px 30px;
  background-color: #f2eee6;
  position: relative;
  border-radius: 6px;
  margin: 2.5em;
}


.A {
border-top: 5px solid #d54325;
border-left: 5px solid #d54325;
box-shadow: 3px 3px 8px #4e323d;
}

.B {
border-bottom: 5px solid #d54325;
border-right: 5px solid #d54325;
box-shadow: 3px 3px 8px #4e323d;

}


.opportunity-content {
  text-align: center;
  padding: 20px 20px;
  margin-top: 3em;
  background-color: #d8746a;
  border-radius: 6px;
  max-width: 600px;
  /* margin-bottom: 1em; */
  margin-left: auto;
  margin-right: auto;
  color:  #f2eee6;
  box-shadow: 3px 3px 8px #4e323d;

}

.triangle-container{
  width: 5px;
  position: relative;
  top: 0%;
  left: 49.75%;
  margin-left: -15px;
  padding-bottom: 1em;
}

.triangle{
  text-align: center;
  width: 0;
  z-index: 1;
  border: medium solid white;
  border-width: 20px 20px 0px 20px;
  border-color: #d8746a transparent transparent transparent;



}


/* Media queries - Responsive timeline on screens less than 600px wide */
@media screen and (max-width: 640px) {

/* Full-width containers */
  .tlcontainer {
    width: 100%;
    padding: 0;
    margin:0;
    
  }
}

.colA::after{
  padding:0px;
  margin-left:0px;
}

.colB::after{
  padding:0px;
  margin-right:0px;
}

.tlA::after{
  padding:0px;
  margin-right:0px;
}

.tlB::after{
  padding:0px;
  margin-left:0px;
}

.content::after{
  margin: 0px;

}




</style>