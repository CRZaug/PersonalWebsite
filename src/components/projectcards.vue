<template>
<body>
    <h2> Here are a couple projects I am excited about! </h2>
  <b-card-group deck>
    <b-card 
      title="ML with Kaggle"
      img-src="https://upload.wikimedia.org/wikipedia/commons/7/7c/Kaggle_logo.png"
      img-alt="Image"
      img-top
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
      img-src="https://cdn.glitch.com/2bdfb3f8-05ef-4035-a06e-2043962a3a13%2Flogo-sunset.svg"
      img-alt="Image"
      img-top
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
      img-src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/1200px-Python-logo-notext.svg.png"
      img-alt="Image"
      img-top
      tag="article"
      style="max-width: 20rem;"
      class="mb-2"
      id = "card3"
    >
      <b-card-text>Some quick example text to build on the card title and make up the bulk of the card's content.</b-card-text>

      <b-button href="#" variant="primary">Go somewhere</b-button>
    </b-card>

    <b-card
      title="PUBLICATIONS"
      img-src="https://upload.wikimedia.org/wikipedia/en/thumb/3/35/Seattle_University_seal.svg/1200px-Seattle_University_seal.svg.png"
      img-alt="Image"
      img-top
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
}

#card1 {
    background-color: #f28482;
    
}
#card2 {
    background-color: #84a59d;
}
#card3 {
    background-color: #f6bd60;
}
#card4 {
    background-color: #f5cac3;
}
</style>