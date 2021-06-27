<template>
<body onclick>
  <div class="cIntro">
    <h2>Highlighted Projects</h2>
  </div>
  <div class="cardContainer">
    <div class="card" id="card1">
      <h3>This website!</h3>

      <div class="clickHere">
        <font-awesome-icon :icon="['fa', 'hand-pointer']" size="2x" :style="{ color: '#f2eee6' }" />
      </div>

      <div class="cardhover" id="hcard8">
        <div>
          <table>
            <tr>
              <th>WHAT</th>
              <td>Built a static webpage by hand as an interactive resume to showcase my work</td>
            </tr>
            <tr>
              <th>WHY</th>
              <td>Spare time during lockdown to check a goal off the list</td>
            </tr>
            <tr>
              <th>HOW</th>
              <td>Vue.js, JavaScript, HTML, CSS</td>
            </tr>
            <tr>
              <th>WHEN</th>
              <td>Ongoing!</td>
            </tr>
          </table>
        </div>
        <div>
          <p class="gh">
            <font-awesome-icon :icon="['fab', 'github']" size="2x" :style="{ color: '#4e323d' }" />
            <a
              href="https://github.com/CRZaug/PersonalWebsite"
              target="_blank"
            >Check it out on Github!</a>
          </p>
        </div>
      </div>
    </div>

    <div class="card" id="card2">
      <h3>Statistical Modeling in Kaggle</h3>
      <div class="clickHere">
        <font-awesome-icon :icon="['fa', 'hand-pointer']" size="2x" :style="{ color: '#f2eee6' }" />
      </div>

      <div class="cardhover" id="hcard8">
        <div>
          <table>
            <tr>
              <th>WHAT</th>
              <td>Applied advanced regression techniques to predict housing prices from large data</td>
            </tr>
            <tr>
              <th>WHY</th>
              <td>Explore how statistical modeling tools hold up to real-world data</td>
            </tr>
            <tr>
              <th>HOW</th>
              <td>R, R Markdown</td>
            </tr>
            <tr>
              <th>WHEN</th>
              <td>Spring 2020</td>
            </tr>
          </table>
        </div>
        <div>
          <p class="gh">
            <font-awesome-icon :icon="['fab', 'github']" size="2x" :style="{ color: '#4e323d' }" />
            <a
              href="https://github.com/CRZaug/Math3910KaggleRegression"
              target="_blank"
            >Check it out on Github!</a>
          </p>
        </div>
      </div>
    </div>

    <div class="card" id="card3">
      <h3>Deep Learning Swell Prediction</h3>
      <div class="clickHere">
        <font-awesome-icon :icon="['fa', 'hand-pointer']" size="2x" :style="{ color: '#f2eee6' }" />
      </div>

      <div class="cardhover" id="hcard8">
        <div>
          <table>
            <tr>
              <th>WHAT</th>
              <td>Used sequence-to-sequence models to predict swell in Santa Cruz, CA</td>
            </tr>
            <tr>
              <th>WHY</th>
              <td>Build upon previous swell-prediction work and grow ML skills</td>
            </tr>
            <tr>
              <th>HOW</th>
              <td>Pytorch, Google Colab</td>
            </tr>
            <tr>
              <th>WHEN</th>
              <td>Spring 2021</td>
            </tr>
          </table>
        </div>
        <div>
          <p class="gh">
            <font-awesome-icon :icon="['fab', 'github']" size="2x" :style="{ color: '#4e323d' }" />
            <a
              href="https://github.com/CRZaug/AMATH563/blob/master/Project/AMATH563_Project.ipynb"
              target="_blank"
            >Check it out on Github!</a>
          </p>
        </div>
      </div>
    </div>

    <div class="card" id="card4">
      <h3>Modeling Nonlinear Waves</h3>
      <div class="clickHere">
        <font-awesome-icon :icon="['fa', 'hand-pointer']" size="2x" :style="{ color: '#f2eee6' }" />
      </div>

      <div class="cardhover" id="hcard8">
        <div>
          <table>
            <tr>
              <th>WHAT</th>
              <td>Numerically solved nonlinear partial differential equations with ocean data as initial conditions (senior thesis)</td>
            </tr>
            <tr>
              <th>WHY</th>
              <td>Ocean waves and Fourier transforms are fascinating</td>
            </tr>
            <tr>
              <th>HOW</th>
              <td>Python, Mathematica</td>
            </tr>
            <tr>
              <th>WHEN</th>
              <td>2018-2020</td>
            </tr>
          </table>
        </div>
        <div>
          <p class="gh">
            <font-awesome-icon :icon="['fa', 'smile']" size="2x" :style="{ color: '#4e323d' }" />
            <a href="https://arxiv.org/abs/2005.06635" target="_blank">Check it out on Arxiv!</a>
          </p>
        </div>
      </div>
    </div>

    <div class="card" id="card5">
      <h3>Personality Quiz</h3>
      <div class="clickHere">
        <font-awesome-icon :icon="['fa', 'hand-pointer']" size="2x" :style="{ color: '#f2eee6' }" />
      </div>

      <div class="cardhover" id="hcard8">
        <div>
          <table>
            <tr>
              <th>WHAT</th>
              <td>A short, online coronavirus-themed Buzzfeed-style personality quiz</td>
            </tr>
            <tr></tr>
            <tr>
              <th>WHY</th>
              <td>Inspired by a Girls Who Code student</td>
            </tr>
            <tr>
              <th>HOW</th>
              <td>Glitch (my first time writing JavaScript!)</td>
            </tr>
            <tr>
              <th>WHEN</th>
              <td>Summer 2020</td>
            </tr>
          </table>
        </div>
        <div>
          <p class="gh">
            <font-awesome-icon :icon="['fa', 'fish']" size="2x" :style="{ color: '#4e323d' }" />
            <a href="https://glitch.com/~who-are-you-quiz" target="_blank">Check it out on Glitch!</a>
          </p>
        </div>
      </div>
    </div>

    <div class="card" id="card6">
      <h3>Measuring Lightspeed</h3>
      <div class="clickHere">
        <font-awesome-icon :icon="['fa', 'hand-pointer']" size="2x" :style="{ color: '#f2eee6' }" />
      </div>

      <div class="cardhover" id="hcard8">
        <div>
          <table>
            <tr>
              <th>WHAT</th>
              <td>Measured the speed of light in a laboratory setting</td>
            </tr>
            <tr>
              <th>WHY</th>
              <td>It is incredible to be able to measure the speed of light inside a lab!</td>
            </tr>
            <tr>
              <th>HOW</th>
              <td>Oscilloscopes, Python, MATLAB</td>
            </tr>
            <tr>
              <th>WHEN</th>
              <td>Winter 2018</td>
            </tr>
          </table>
        </div>
        <div>
          <p class="gh">
            <font-awesome-icon :icon="['fa', 'download']" size="2x" :style="{ color: '#4e323d' }" />
            <a href="/measuring-speed-light.pdf" download>Download the report!</a>
          </p>
        </div>
      </div>
    </div>

    <div class="card" id="card7">
      <h3>Python Timbre Synthesizer</h3>
      <div class="clickHere">
        <font-awesome-icon :icon="['fa', 'hand-pointer']" size="2x" :style="{ color: '#f2eee6' }" />
      </div>

      <div class="cardhover" id="hcard8">
        <div>
          <table>
            <tr>
              <th>WHY</th>
              <td>A simple GUI and program to allow users to adjust the timbre of different notes</td>
            </tr>
            <tr>
              <th>WHY</th>
              <td>Explore personal interest in music and Fourier transforms</td>
            </tr>
            <tr>
              <th>HOW</th>
              <td>Python (my first object-oriented code!)</td>
            </tr>
            <tr>
              <th>WHEN</th>
              <td>Spring 2020</td>
            </tr>
          </table>
        </div>
        <div>
          <p class="gh">
            <font-awesome-icon :icon="['fab', 'github']" size="2x" :style="{ color: '#4e323d' }" />
            <a
              href="https://github.com/CRZaug/SynthesizerProject"
              target="_blank"
            >Check it out on Github!</a>
          </p>
        </div>
      </div>
    </div>

    <div class="card" id="card8">
      <h3>Applying Arnoldi Iteration</h3>
      <div class="clickHere">
        <font-awesome-icon :icon="['fa', 'hand-pointer']" size="2x" :style="{ color: '#f2eee6' }" />
      </div>

      <div class="cardhover" id="hcard7">
        <div>
          <table>
            <tr>
              <th>WHAT</th>
              <td>Implemented the Arnoldi iteration algorithm to find eigenvalues and solve the heat equation</td>
            </tr>
            <tr>
              <th>WHY</th>
              <td>Practice numerical linear algebra on large matrices</td>
            </tr>
            <tr>
              <th>HOW</th>
              <td>Python, Julia</td>
            </tr>
            <tr>
              <th>WHEN</th>
              <td>Winter 2019</td>
            </tr>
          </table>
        </div>
        <div>
          <p class="gh">
            <font-awesome-icon :icon="['fa', 'download']" size="2x" :style="{ color: '#4e323d' }" />
            <a href="Arnoldi_Iteration_Report.pdf" download>Download the report!</a>
          </p>
        </div>
      </div>
    </div>

    <!-- <div class = "card" id = "card8">
       <h3> <i>Cracking the Coding Interview</i> Problems </h3>
       <div class = "clickHere"><font-awesome-icon :icon="['fa', 'hand-pointer']" size="2x" :style="{ color: '#f2eee6' }"/></div>
       
      <div class = "cardhover" id = "hcard8">
        <div>
          <table>
            <tr>
              <th>WHAT</th>
              <td>Practice implementing data structures and designing algorithms</td>
            </tr>
            <tr>
              <th>WHY</th>
              <td>Play with fun CS problems while learning useful tools!</td>
            </tr>
            <tr>
              <th>HOW</th>
              <td> Python, C, C++</td>
            </tr>
            <tr>
              <th>WHEN</th>
              <td>Ongoing!</td>
            </tr>
          </table>  

        
        </div>
        <div>
          <p class = "gh"> <font-awesome-icon :icon="['fab', 'github']" size="2x" :style="{ color: '#4e323d' }"/> <a href = "https://github.com/CRZaug/Misc" target = "_blank"> Check it out on Github! </a> </p>
        </div>
      </div> 



    </div>-->

    <!-- Other ideas: Synthesizer project, Numerical Methods Project, Asymp. Project, Toy CS problems, Physics reports -->
    <!-- Include a "See all" button? -->
  </div>

  <div class="circleContainer">
    <div class="circle"></div>
    <div class="circle"></div>
    <div class="circle"></div>
  </div>

  <!-- <div class = "end">
    <h4> More to come!</h4>
  </div>-->
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
  content: "";
  display: block;
  position: relative;
  width: 0;
  height: 10em;
  margin-top: -5em;
}

th {
  vertical-align: top;
}
td {
  padding-left: 0.25em;
}

.cIntro {
  background-color: #693338;
  color: #f2eee6;
  padding: 1%;
  border-radius: 5px;
  max-width: 800px;

  margin-bottom: 2em;
  margin-left: auto;
  margin-right: auto;

  border-top: 4px solid #d54325;
  border-left: 4px solid #d54325;

  text-align: center;
}

.cardContainer {
  display: grid;
  grid-template-columns: 25% 25% 25% 25%;
  grid-template-rows: 50% 50%;

  grid-gap: 10px;
}

.card {
  padding: 1%;
  margin: 1%;
  margin-bottom: 4%;
  width: 300px;
  min-height: 250px;
  border-radius: 5px;
  box-shadow: 3px 3px 8px #4e323d;

  text-align: center;

  display: flex;
  justify-content: center;
  align-content: center;

  top: 0;
  transition: all ease-in 0.5s;
}

.card:hover {
  top: -2.5%;
}

.cardhover {
  padding-top: 0.5em;
  padding-left: 0.5em;
  padding-right: 0.5em;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #f2eee6;

  color: #4e323d;
  opacity: 0;
  transition: all ease-in 0.5s;
  text-align: left;

  display: grid;
  grid-template-columns: 100%;
  grid-template-rows: auto 15%;
}

.cardhover:hover {
  opacity: 1;
}

.clickHere {
  display: none;
}

.gh {
  text-align: center;
}

a {
  text-align: center;
  color: #d8746a;
}

a:hover {
  color: #d54325;
}

#card1,
#card8 {
  background-position: center;
  border-bottom: 4px solid #d54325;
  border-right: 4px solid #d54325;
  background-color: #693338;

  color: #f2eee6;
}

#card2,
#card7 {
  background-color: #e9c0b0;

  border-bottom: 4px solid #d54325;
  border-right: 4px solid #d54325;
}
#card3,
#card6 {
  background-color: #4e323d;

  border-bottom: 4px solid #d54325;
  border-right: 4px solid #d54325;
  color: #f2eee6;
}
#card4,
#card5 {
  background-color: #d8746a;

  border-bottom: 4px solid #d54325;
  border-right: 4px solid #d54325;
}

/* 
.end {
  color: #4e323d;
  
  background-color:#e9c0b0;
  border-radius: 5px;
  
  max-width: 400px;
  height: 100px;
  margin-left:auto;
  margin-right:auto;

  border-top: 4px solid #d54325;
  border-left: 4px solid #d54325;

  margin-top: 2em;

  display: flex;
  justify-content: center;
  align-items: center;

} */

.circleContainer {
  margin-top: 3em;
  display: flex;
  justify-content: center;
}

.circle {
  margin-top: 2em;
  margin-left: 1em;
  margin-right: 1em;
  width: 10px;
  height: 10px;
  left: 2px;
  top: 50px;
  z-index: 1;
  background-color: #693338;
  border-radius: 50%;
}

/* Media breakpoints */
@media only screen and (max-width: 1300px) {
  .cardContainer {
    display: grid;
    grid-template-columns: 50% 50%;
    grid-template-rows: auto auto auto auto;

    grid-gap: 20px;
    justify-content: center;

    margin-left: 0%;
    margin-right: 0%;
  }

  .card {
    justify-self: center;
  }
}

@media only screen and (max-width: 800px) {
  .cardContainer {
    display: block;
    height: 100%;
    justify-content: center;
  }

  .card {
    max-width: 100%;
    height: 300px;
    margin-left: auto;
    margin-right: auto;
  }

  .clickHere {
    display: block;
    position: absolute;
    right: 5%;
    bottom: 5%;
  }

  #card5 {
    background-color: #693338;
    color: #f2eee6;
  }

  #card6 {
    background-color: #e9c0b0;
    color: #4e323d;
  }

  #card7 {
    background-color: #4e323d;
    color: #f2eee6;
  }

  #card8 {
    background-color: #d8746a;
    color: #4e323d;
  }
}
</style>