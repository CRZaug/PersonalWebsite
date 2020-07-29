<template>

    <div class = "about">

        <div class = "paragraph">
            <div>
            <h2> A little about me </h2>

            <div class = "aboutA">
                🎓 Recent Seattle U graduate (BS Math, BA Physics, Chinese Minor, Summa Cum Laude)    
            </div>
            <div class = "aboutB">🖥 Software Engineering intern and instructor with GWC</div>
            <div class = "aboutA">
                💯 Applied mathematics graduate student at UW fall 2020
            </div>
                </div>

        
        </div>
        <div class = "bullets">
          
             <h2> Things I am excited to be learning</h2>


                <h3> Serious things </h3> <!-- Change font -->
            <div class ="bulletA">
                👩‍💻 Computer science
            </div>
            <div class ="bulletB">
                🍎 Equitable, anti-racist education
            </div>
            <div class ="bulletA">
                🧮 Applied mathematics
            </div>
            <div class ="bulletB">
                🥮 Mandarin Chinese
            </div>

            <p>and<p/> <!-- Change font -->

            <h3> Things for fun! </h3> <!-- Change font -->

            
            <div class ="bulletB">
                🛹 Skateboarding
            </div>
            <div class ="bulletA">
                 🎾 Tennis
            </div>
            <div class ="bulletB">
                🎹 Piano
            </div>
            <div class ="bulletA">
                🍳 Cooking
            </div>



        </div>
    </div>

</template>

<style scoped>

* {
    padding: 0;
    margin: 0;
}

ul {
text-align: left;
list-style-type:none;

    }

.about {
    display: flex;
    justify-content: center;
    margin-bottom: 10em;
}

.bullets, .paragraph {
    display:flex;
    flex-direction: column;
    justify-content: center;
    width:100%;
    padding: 2em;
}

.bullets {
    background-color: #f5cac3;
    padding-left: 10%;
    padding-right: 10%;
}
.paragraph {
    background-color: #84a59d;
    max-height:100%;
    color: #f7ede2;
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

