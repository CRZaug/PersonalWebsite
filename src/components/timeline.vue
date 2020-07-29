// Later, add some cute little things I've done as well! Quarantine cooking, picking up piano, etc

<template>
<body>
    <div class = "c">
                <h3> Looking for opportunites Summer 2021! </h3>
    <div class = "timeline">
            <div class = "colA">
                <div class = "tlcontainer tlA">
                    <div class = "content">
                    <h4>Intern at Creative Creek</h4>
                    <p>Dipping my toes into software engineering and design
                        <br>
                        <br>
                        Working with Python and SQL to write algorithms and query databases in support of financial software development
                    </p>
                </div>
            </div>

            <div class = "tlcontainer tlA">
                <div class = "content">
                <h4>Seattle University Grad</h4>
                <p>I graduated summa cum laude with a dual degree!
                    <br>
                    <br>
                    I studied mathematics, physics, and Chinese
                     </p>
                </div>    
            </div>

            <div class = "tlcontainer tlA">
                <div class = "content">
                <h4>Applied Math Research Assistant at Seattle University</h4>
                <p> I studied nonlinear waves and the propagation of swell across the Pacific ocean
                    <br>
                    <br>
                    My involvement in scientific computing through this project sparked my interest in CS!
                     </p>
                </div>    
            </div>

             <div class = "tlcontainer tlA">
                <div class = "content">
                <h4>Lawrence Livermore National Laboratory Summer students</h4>
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
                    <div class = "content">
                    <h4>Instructor at Girls Who Code</h4>
                    <p>Combing my passions of equitable equcation and STEM
                        <br>
                        <br>
                        Teaching over 310 young women HTML, CSS, and Javascript while building virtual classroom culture

                    </p>
                    </div>
                </div>
                
                <div class = "tlcontainer tlB">
                    <div class = "content">
                    <h4>First Publication</h4>
                    <p>During the winter and spring of 2019, I conducted research developing precision instruments for physics lab students
                        
                        <br>
                        <br>
                        Check out the result here!
                         </p>
                    </div>    
                </div>
                
                <div class = "tlcontainer tlB">
                    <div class = "content">
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
    </div>
    

</body>    
</template>

<style scoped>

h3 {
    text-align: center;
}

/* The extensive styling for the timeline comes below */
.c {
    background-color: #f6bd60;
    margin-bottom: 10em;
    box-sizing: border-box;

}


.timeline{
    position: relative;
    max-width: 1200px;
    margin: 0 auto;

    display: flex;
    flex-direction: row;
}


.timeline::after{
    content: '';
    position: absolute;
    width: 8px;
    background-color: #f7ede2;
    top: 0;
    bottom: 0;
    left: 50%;
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
  right: -17px;
  background-color: #f7ede2;
  border: 4px solid #84a59d;
  top: 15px;
  border-radius: 50%;
  z-index: 1;
}

.colA, .colB {
    width: 600px; 
    margin-left: auto;
    margin-right: auto;
}

.tlA {
    margin-bottom: 3em;
    left: 20%;
}

.tlB {
    margin-top: 5em;
}

.tlB::after {
    left:-.5em;
}

/* Add arrows to the left container (pointing right) */
.tlA::before {
  content: " ";
  height: 0;
  position: absolute;
  top: 22px;
  width: 0;
  z-index: 1;
  right: 30px;
  border: medium solid white;
  border-width: 10px 0 10px 10px;
  border-color: transparent transparent transparent white;
}

/* Add arrows to the right container (pointing left) */
.tlB::before {
  content: " ";
  height: 0;
  position: absolute;
  top: 22px;
  width: 0;
  z-index: 1;
  left: 30px;
  border: medium solid white;
  border-width: 10px 10px 10px 0;
  border-color: transparent white transparent transparent;
}

/* The actual content */
.content {
  padding: 20px 30px;
  background-color: white;
  position: relative;
  border-radius: 6px;
  margin: 2.5em;
}



/* Media queries - Responsive timeline on screens less than 600px wide */
@media screen and (max-width: 600px) {
/* Place the timelime to the left */
  .timeline::after {
    left: 31px;
  }

/* Full-width containers */
  .tlcontainer {
    width: 100%;
    padding-left: 70px;
    padding-right: 25px;
  }

/* Make sure that all arrows are pointing leftwards */
  .tlcontainer::before {
    left: 60px;
    border: medium solid white;
    border-width: 10px 10px 10px 0;
    border-color: transparent white transparent transparent;
  }

/* Make sure all circles are at the same spot */
  .tlA::after, .tlB::after {
    left: 15px;
  }

/* Make all right containers behave like the left ones */
  .right {
    left: 0%;
  }
}


</style>