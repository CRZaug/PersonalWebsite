// Later, add some cute little things I've done as well! Quarantine cooking, picking up piano, etc

<template>
<body onclick>
    <div class = "c">
      <div id ="opportunity">
          <div class ="opportunity-content">
              <h3>Looking for opportunities summer 2021!</h3>
                  <p id = "par">
                        I am interested in data science, AI, and software engineering.

                    <br>
                    <br>
                        Want to know more about my experience? Check out my <a href="/Camille_Zaug_Resume_July_2020.pdf" download> resume!</a>
                  </p>
                  
            </div>
              <div class = triangle-container><div class = "triangle"></div></div>

          </div>
          <div id = "hCircle" class = "circle"></div>

          
           

          <div class = "timeline">
            <div class = "container">

            <div class = "tlcontainer tlA">
                <div class = "content A">
                    <h4>Applied Mathematics Ph.D Student</h4>
                    <h5>University of Washington</h5>
                    <h6>2020-present</h6>
                    <p class = "moreInfo"> Growing my mathematical background, exploring new fields, and teaching calculus
                        <br>
                        <br>
                        Current coursework:
                        <ul>
                          <li> Intro to Probability and Random Processes </li>
                          <li> Applied Complex Analysis </li>
                          <li> Applied Linear Algebra and Introductory Numerical Analysis <a href = "https://github.com/CRZaug/AMATH584" target = "_blank"> <font-awesome-icon :icon="['fab', 'github']" size="1x" /> </a></li>
                        </ul>
                    </p>
                </div>
              </div>



              <div class = "tlcontainer tlB">
                <div class = "content B">
                    <h4>Software Engineering and Development Intern</h4>
                    <h5>Creative Creek</h5>
                    <h6>Summer-Fall 2020</h6>
                    <p class = "moreInfo">Dipped my toes into software engineering 
                        <br>
                        <br>
                        Working with Python, C++, and SQL to write algorithms and query databases in support of financial software development
                    </p>
                </div>
              </div>

            <div class = "tlcontainer tlA">
                    <div class = "content A">
                    <h4>Computer Science Instructor</h4>
                    <h5>Girls Who Code </h5>
                <h6>Summer 2020</h6>
                    <p class = "moreInfo">Combined my passions of equitable equcation, coding, and STEM
                        <br>
                        <br>
                        Taught over 175 young women HTML, CSS, and Javascript while building lasting community 

                    </p>
                    
                    </div>
                </div>

            <div class = "tlcontainer tlB">
                <div class = "content B">
                <h4>Seattle University Graduate</h4>
                <h6>2016-2020</h6>
                <p class = "moreInfo">I graduated <i> summa cum laude</i> during the pandemic
                    <br>
                    <br>
                    I earned dual degree in mathematics and physics and minored in Chinese and received the <a href = "https://www.seattleu.edu/newsroom/stories/student-awards.html" target = "_blank">President's Award</a> for my academic achievement 
         
                     </p>
                     
                </div>    
            </div>

            <div class = "tlcontainer tlA">
                    <div class = "content Alt A">
                    <h4>Picked up guitar</h4>
        
                    <h6>2020</h6>
                    
                    </div>
                </div>

            <div class = "tlcontainer tlB">
                    <div class = "content B">
                    <h4>First Publication</h4>
                <h6>Spring 2020</h6>
                    <p class = "moreInfo">My team published work stemming from an advanced physics lab project
                        
                        <br>
                        <br>
                        I demonstrated the utility of novel tools for undergraduate physics labs. Check out the results in <a href = "https://aapt.scitation.org/doi/abs/10.1119/10.0001269" target="_blank"><i>American Journal of Physics</i></a>
                         </p>
                   
                    </div>
                </div>
             <div class = "tlcontainer tlA">
                  <div class = "content Alt A">
                    <h4>Started bouldering</h4>
        
                    <h6>2019</h6>
                    
                  </div>
                </div> 
            

            <div class = "tlcontainer tlB">
                <div class = "content B">
                <h4>Applied Math Research Assistant</h4>
                <h5>Seattle University </h5>
                <h6>2018-2020</h6>
                <p class = "moreInfo"> Modeling ocean waves sparked my lasting interest in scientific computing
                    <br>
                    <br>
                    My work resulted in an invited talk at the University of Washington and an award for best poster at a 2019 SIAM sectional meeting
                     </p>
                     
                </div>    
            </div>

            <div class = "tlcontainer tlA">
                    <div class = "content A">
                    <h4>Team Lead</h4>
                    <h5>Seattle University Mathematics Corps</h5>
                    <h6>2018-2020</h6>
                    <p class = "moreInfo">Provided educational support to the wonderful students of Bailey Gatzert Elementary School
                    <br>
                    <br>
                    I worked in classrooms as a teacher's aide, ran an after school program, and planned and built the <a href = "https://www.seattleu.edu/scieng/math/community-outreach/sum-corps/" target="_blank"> SUM Corps website</a>
                    </p>
                    
                    </div>
                </div>

            

            

            <div class = "tlcontainer tlB">
                <div class = "content B">
                <h4>Materials Science Intern</h4>
                <h5>Lawrence Livermore National Laboratory </h5>
                <h6>2016-2017</h6>
                <p class = "moreInfo">Writing MATLAB scripts to process images of nanoparticles was my first experience coding
                    

                    <br>
                    <br>

                    My two summers at LLNL taught me how to approach large, complicated problems through independent learning
                     </p>
                     
                </div>
            </div>

            <div class = "tlcontainer tlA">
                  <div class = "content Alt A">
                    <h4>Began playing piano</h4>
        
                    <h6>2016</h6>
                    
                  </div>
            </div>

            <div class = "tlcontainer tlB">
                  <div class = "content Alt B">
                    <h4>Started learning Chinese</h4>
        
                    <h6>2012</h6>
                    
                  </div>
                  </div>

            
            </div>

    </div>
      <div class = "circle"></div>
      <div class = "circle"></div>
      <div class = "circle"></div>
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
    height:10em;
    margin-top:-5em;

}

h3 {
    text-align: center;
    color: #f2eee6;
}

a{
  color: #d8746a;
}

a:hover{
  color: #d54325;
}

/* The extensive styling for the timeline comes below */
.c {
    background-color: inherit;
    margin-bottom: 5em;
    box-sizing: border-box;
    padding-top: 1em;

}

.container{
  display: grid;
  grid-template-columns: 50% 50%;
  grid-template-rows: auto;
  justify-content: stretch;
  
}

.timeline{
    position: relative;
 
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

/* Circles that act as pointers to TL*/
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
    width: 100%;
    justify-self: center;
    /* align-self: center; */
    margin-bottom: 1em;
}

.tlA{
  align-self: start;
}

.tlB{
  margin-top: 4em;
  align-self: end;
}



/* Add cirles on right of left col of cards */
.tlA::before {
  content: " ";
  position: absolute;
  width: 10px;
  height: 10px;
  right:5%;
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
  left: 5%;
  top: 21px;
  z-index: 1;
  background-color: #693338;
  border-radius: 50%;
}



/* The actual content */
.content {
  width: 80%;
  padding: 20px 30px;
  background-color: #f2eee6;
  /* position: relative; */
  border-radius: 6px;
  margin-left:auto;
  margin-right:auto;

}


.A {
border-top: 5px solid #d54325;
border-left: 5px solid #d54325;
box-shadow: 3px 3px 8px #4e323d;
left: 0;
transition: all ease-in 0.5s;

}




/* The share arrow */

.overturn{
  text-align: right;
  visibility: hidden;
  opacity: 0;
  transition: all ease-in 0.5s;
}

.A:hover{
  left: 1%;

}

.A:hover > .overturn{
    opacity: 1;
    visibility:visible;
}

.B {
border-bottom: 5px solid #d54325;
border-right: 5px solid #d54325;
box-shadow: 3px 3px 8px #4e323d;
transition: all ease-in 0.5s;
right: 0;
}

.B:hover{
  right: 1%;

}



.B:hover > .overturn{
    opacity: 1;
    visibility:visible;
}


.opportunity-content {
  text-align: center;
  padding: 20px 20px;
  background-color: #693338;
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
  border-color: #693338 transparent transparent transparent;



}

.Alt{
  border: 0px;
  box-shadow: 0 0 0 #4e323d;
  background-color: #e9c0b0
}


#hCircle{
  display: none;
}



/* Media queries - Responsive timeline on screens less than 600px wide */
@media screen and (max-width: 800px) {

.moreInfo{
  display: none;
}

.A:hover > .moreInfo{
  display: block;
}

.B:hover > .moreInfo{
  display: block;
}

.tlB{
  margin-top: 0em;
}

h4, h5,{
  font-size: 90%;
}

.content{

  margin-left: 15%;

}
/* Change the grid */
.container{
  justify-self: center;
  display: grid;
  grid-template-columns: 100%;
  grid-template-rows: auto;

}

/* Move right cirles */

.tlA::before {
  content: " ";
  position: absolute;
  width: 10px;
  height: 10px;
  left:5%;
  top: 21px;
  z-index: 1;
  background-color: #693338;
  border-radius: 50%;
}

/* Change all the red circles to the left */
.tlA::after, .tlB::after {
    left:-1.5%;
}

/* Brown circles */

.tlA::before, .tlB::before{
  left: 7%;
}

/* Replace the triangle from the main card with a circle */
.triangle{
  display: none;
}

#hCircle{
  display: block;
  margin-left:10.1%;
  margin-bottom: 1em;
}

.timeline::after{

    left: 10%;
}

/* Circles after the timeline, dot dot dot*/
.circle{
  margin-left:10.1%;
  margin-right:0;
}


/* Fix box shadow */

.opportunity-content{
  box-shadow: 0 0 0 #4e323d;
}

}

@media screen and (max-width: 650px) {

#hCircle{
  display: block;
  margin-left:0.9em;
  margin-bottom: 1em;
}

.timeline::after{

    left: 1em;
}

/* Circles after the timeline, dot dot dot*/
.circle{
  margin-left:0.9em;
  margin-right:0;
}



}



</style>