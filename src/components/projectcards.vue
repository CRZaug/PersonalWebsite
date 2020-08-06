<template>
<body>

    <div class = "cIntro">

    <h2> Projects I am proud of</h2>

    </div>
  <div class = "cardContainer">
    <div class = "card" id = "card1">
      <h3> This website! </h3>

      <div class = "cardhover" id = "hcard8">
        <div>
          <ul>
            <li> WHY: Spare time during lockdown to check a goal off the list</li>
            <li> HOW: Vue.js </li>
            <li> WHEN: Ongoing!</li>
          </ul>
        </div>
        <div>
          <p class = "gh"> <font-awesome-icon :icon="['fab', 'github']" size="1x" :style="{ color: '#f2eee6' }"/> Check it out on Arxiv! </p>
        </div>
      </div>


    </div>

    <div class = "card" id = "card2">
       <h3> ML in Kaggle </h3>

      <div class = "cardhover" id = "hcard8">
        <div>
          <ul>
            <li> WHY: Apply statistical learning to real-world data and test results</li>
            <li> HOW: R, R Markdown </li>
            <li> WHEN: Spring 2020</li>
          </ul>
        </div>
        <div>
          <p class = "gh"> <font-awesome-icon :icon="['fab', 'github']" size="1x" :style="{ color: '#f2eee6' }"/> Check it out on Arxiv! </p>
        </div>
      </div>

    </div>

    <div class = "card" id = "card3">
       <h3> Modeling Nonlinear Waves </h3>

       <div class = "cardhover" id = "hcard8">
        <div>
          <ul>
            <li> WHY: Ocean waves are fascinating and beautiful (also my senior thesis!)</li>
            <li> HOW: Python, Mathematica</li>
            <li> WHEN: 2018-2020 </li>
          </ul>
        </div>
        <div>
          <p class = "gh"> <font-awesome-icon :icon="['fa', 'smile']" size="1x" :style="{ color: '#f2eee6' }"/> Check it out on Arxiv! </p>
        </div>
      </div>

    </div>

    <div class = "card" id = "card4">
       <h3> Personality Quiz </h3>

      <div class = "cardhover" id = "hcard8">
        <div>
          <ul>
            <li> WHY: For an inside joke inspired by Girls Who Code student</li>
            <li> HOW: Glitch (my first time writing JavaScript!)</li>
            <li> WHEN: Summer 2020 </li>
          </ul>
        </div>
        <div>
          <p class = "gh"> <font-awesome-icon :icon="['fa', 'fish']" size="1x" :style="{ color: '#f2eee6' }"/> Check it out on Glitch! </p>
        </div>
      </div> 

    </div>

    <div class = "card" id = "card5">
      <h3> Measuring Lightspeed </h3>

        <div class = "cardhover" id = "hcard8">
        <div>
          <ul>
            <li> WHY: We had the tools in advanced physics lab, so why not??</li>
            <li> HOW: Oscilloscopes, Pyhon, MATLAB</li>
            <li> WHEN: Winter 2019 </li>
          </ul>
        </div>
        <div>
          <p class = "gh"> <font-awesome-icon :icon="['fa', 'file']" size="1x" :style="{ color: '#f2eee6' }"/> Check it out the report </p>
        </div>
      </div> 

    </div>

    <div class = "card" id = "card6">
       <h3> Python Timbre Synthesizer </h3>

        <div class = "cardhover" id = "hcard8">
        <div>
          <ul>
            <li> WHY: Explore personal interest in music and Fourier transforms</li>
            <li> HOW: Python (my first object-oriented code!) </li>
            <li> WHEN: Spring 2020 </li>
          </ul>
        </div>
        <div>
          <p class = "gh"> <font-awesome-icon :icon="['fab', 'github']" size="1x" :style="{ color: '#f2eee6' }"/> Check it out on Github! </p>
        </div>
      </div> 

    </div>

    <div class = "card" id = "card7">
       <h3> Applying Arnoldi Iteration </h3>

        <div class = "cardhover" id = "hcard7">
        <div>
          <ul>
            <li> WHY: Practice numerical methods on large matrices</li>
            <li> HOW: Python, Julia </li>
            <li> WHEN: Winter 2019 </li>
          </ul>
        </div>
        <div>
          <p class = "gh"> <font-awesome-icon :icon="['fab', 'github']" size="1x" :style="{ color: '#f2eee6' }"/> Check it out on Github! </p>
        </div>
      </div> 

    </div>

    <div class = "card" id = "card8">
       <h3> Data Structures and Algorithms </h3>
       
      <div class = "cardhover" id = "hcard8">
        <div>
          <ul>
            <li> WHY: Learn incredibly useful CS tools while preparing for my next step!</li>
            <li> HOW: <i>Cracking the Coding Interview</i>, Python, C, C++ </li>
            <li> WHEN: Ongoing! </li>
          </ul>
        </div>
        <div>
          <p class = "gh"> <font-awesome-icon :icon="['fab', 'github']" size="1x" :style="{ color: '#f2eee6' }"/> Check it out on Github! </p>
        </div>
      </div> 



    </div>

    

    <!-- Other ideas: Synthesizer project, Numerical Methods Project, Asymp. Project, Toy CS problems, Physics reports -->
    <!-- Include a "See all" button? -->
  </div>

  <div class = "end">
    <h4> More to come!</h4>
  </div>
</body>
</template>

<style scoped>

body {
  padding-left: 3em;
  padding-right: 3em;
  margin-bottom: 10em;
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

.cIntro{
  background-color:  #693338;
  color: #f2eee6;
  padding: 1%;
  border-radius: 5px;
  margin-left: 20%;
  margin-right: 20%;
  margin-bottom: 2em;

  border-top: 4px solid #d54325;
  border-left: 4px solid #d54325;

  text-align: center;

}

.cardContainer{
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-evenly;
  align-content: space-around;
}

.card {
  padding: 1%;
  margin: 1%;
  margin-bottom: 4%;
  width: 200px;
  height: 200px;
  border-radius: 5px;
  box-shadow: 3px 3px 8px #4e323d;
  
  text-align: center;

  display: flex;
  justify-content: center;
  align-content: center;

  flex-basis: 20%;

  transition: all ease-in 0.5s;

}

.card:hover{
  transform: scale(1.01);

}

.cardhover{
  padding: 1%;
  position: absolute;
  top:0;
  left:0;
  width: 100%;
  height: 100%;
  background-color: #4e323d;
  color: #f2eee6;
  opacity: 0;
  transition: all ease-in 0.5s;
  text-align: left;

  display: flex;
  flex-direction: column;
  align-content: center;

  
}

.cardhover:hover{
  opacity: 1;
}

.gh {
  text-align: center;
}


#card1, #card8 {
  background-position: center;
  border-bottom: 4px solid #d54325;
  border-right: 4px solid #d54325;
  background-color: #693338;
  color: #f2eee6;  
}


#card2,#card7 {
    background-color: #e9c0b0;
    border-bottom: 4px solid #d54325;
  border-right: 4px solid #d54325;
}
#card3, #card6 {
    background-color: #4e323d;
    border-bottom: 4px solid #d54325;
  border-right: 4px solid #d54325;
    color: #f2eee6;
}
#card4, #card5 {
    background-color: #d8746a;
    border-bottom: 4px solid #d54325;
  border-right: 4px solid #d54325;
}



.end {
  color: #4e323d;
  background-color:#e9c0b0;
  border-radius: 5px;
  
  width: 25%;
  height: 100px;
  margin-left:auto;
  margin-right:auto;

  border-top: 4px solid #d54325;
  border-left: 4px solid #d54325;

  margin-top: 2em;

  display: flex;
  justify-content: center;
  align-items: center;

}
</style>