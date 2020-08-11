<template>
    <body>
        <div class = "seeMore">
            <div class = "content">
                <h2> Say hello! </h2>

                <p> Connect with me on LinkedIn or see my resume for my contact information. </p>
                <div class = "linkedin">
                    <a href = "https://www.linkedin.com/in/crzaug/">
                        <font-awesome-icon :icon="['fab', 'linkedin']" size="3x" :style="{ color: '#f2eee6' }"/>
                    </a>
                </div>
            </div>
            <div class = "work">
                <h4> Want to see more of my work? </h4>
            </div>
        








            <div class = "links">
                    <div class ="linkIcons">
                        
                            <a href="/Camille_Zaug_Resume_July_2020.pdf" download>
                                <font-awesome-icon icon = "file" size = "3x" :style="{ color: '#f2eee6' }" />
                            </a>
                            <p>Resume</p>
                    </div>

                       
    
                    <div class = "linkIcons"> 
                        
                        <a href="https://github.com/CRZaug" target="_blank">
                            <font-awesome-icon :icon="['fab', 'github']" size="3x" :style="{ color: '#f2eee6' }"/>
                        </a>
                        <p>GitHub</p>
                    </div>

                    
                    <div class = "linkIcons"> 
                        <a href="https://glitch.com/@camille.zaug" target="_blank">
                            <font-awesome-icon icon="fish" size="3x" :style="{ color: '#f2eee6' }"/>
                        </a>
                        <p>Glitch</p>

                    </div>
                    <div class = "linkIcons" > 
                        
                        <a href = "https://scholar.google.com/citations?hl=en&view_op=list_works&gmla=AJsN-F4e9juNtDe0KuhTfdLumk4y-vepbccEnJ1umz_lA06XMx8FeBr29UT51rlMULoA-4rOHZXsShRt56sxKEpSiZ-KMVq1lV3uQbS0cB6-E_rq2ZBSGk4&user=iy1IEsMAAAAJ" target="_blank">
                            <font-awesome-icon icon="book" size="3x" :style="{ color: '#f2eee6' }"/>
                        </a>
                        <p>Scholar</p>
                    </div>

                </div>
        </div>
    </body>
</template>

<style scoped>
body {

    background-color: #f2eee6;
    /* margin-bottom: 5em; */
}

body:before {
    content:'';
    display:block;
    position: relative;
    width:0;
    height:5em;
    margin-top:-5em;

}

p{
    margin: 0;
    color: #f2eee6;
}

.seeMore{
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-content: center;
}

.content {
    position: relative;
    text-align: center;
    padding-top: 7%;
    padding-bottom: 7%;
    padding-left: 2%;
    padding-right: 2%;

    background-color: #693338;
    color: #f2eee6;
    max-width: 600px;
    max-height: 50%;
    border-radius: 5px;
    border-top: 8px solid #d54325;
    border-left: 8px solid #d54325;
    margin-left: auto;
    margin-right: auto;
    

}

.work {
    position: relative;
    top: -2em;
    text-align: center;
    padding: 2%;
    background-color: #e9c0b0;
    color: #4e323d;
    max-width: 400px;
    max-height: 50%;
    border-radius: 5px;
    margin-left: auto;
    margin-right: auto;
    box-shadow: 3px 3px 8px #4e323d;

    

}

.links {
    margin-top: 2em;
    padding-left: 15%;
    padding-right: 15%;
    padding-bottom: 3em;
    display: flex;
    justify-content: space-evenly;
}



.linkedin{
    margin-top: 1em;
    transition: all .2s ease-in-out;
}

.linkedin:hover{
    transform: scale(1.1);
}

.linkIcons {
    width: 90px;
    height: 90px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: #d54325;
    border-radius: 5px;
    box-shadow: 3px 3px 8px #4e323d;
    transition: all .2s ease-in-out
}


.linkIcons:hover{
    transform: scale(1.1);
}



@media only screen and (max-width: 600px) {

.links{
    padding-left: 1%;
    padding-right: 1%;
    display: flex;
    justify-content: space-between;
}


.content{
    border-left: 0;
    padding-bottom: 15%;
}





}
</style>