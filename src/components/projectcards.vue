<template>
<body>
    <h2> Here are a couple projects I am excited about! </h2>
  <b-card-group deck>
    <b-card 
      title="ML with Kaggle"
    
      tag="article"
      style="max-width: 20rem;"
      class="mb-2"
      id = "card1"
    >
      <b-card-text>Some quick example text to build on the card title and make up the bulk of the card's content.</b-card-text>

      <b-button href="#" variant="primary">Go somewhere</b-button>
    </b-card>

    <b-card
      title="Glitch-based Personality Quiz"
      tag="article"
      style="max-width: 20rem;"
      class="mb-2"
      id = "card2"
    >
      <b-card-text>Some quick example text to build on the card title and make up the bulk of the card's content.</b-card-text>

      <b-button href="#" variant="primary">Go somewhere</b-button>
    </b-card>
 
    <b-card
      title="Toy CS Problems"

      tag="article"
      style="max-width: 20rem;"
      class="mb-2"
      id = "card3"
    >
    <button>
      <b-card-text>Some quick example text to build on the card title and make up the bulk of the card's content.</b-card-text>

      <b-button href="#" variant="primary">Go somewhere</b-button>
      </button>
    </b-card>

    <b-card
      title="PUBLICATIONS"
     
      tag="article"
      style="max-width: 20rem;"
      class="mb-2"
      id = "card4"
    >
      <b-card-text>Some quick example text to build on the card title and make up the bulk of the card's content.</b-card-text>

      <b-button href="#" variant="primary">Go somewhere</b-button>
    </b-card>
  </b-card-group>
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

#card1, #card2, #card3, #card4 {
  padding: 1%;
  width: 100%;
}



#card1 {
  height: 400px;
  background-position: center;
  border: 4px solid #d54325;
  background-color: #693338;
  color: #f2eee6;
  transition: 0.4s;
    
}

button {
  background-color: #d54325;
  transition: 0.4s;
}

#button:hover{
  background-color: black;
}

#card2 {
    background-color: #e9c0b0;
}
#card3 {
    background-color: #4e323d;
    color: #f2eee6;
}
#card4 {
    background-color: #d8746a;
}
</style>