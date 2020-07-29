<template>
<body>
    <div id = "intro">
        <div>
            <img src = "../assets/college.gif" alt = "A gif of college students on a bench" id = "introPic" />
        </div>
        <div>
            <h1>Hello!</h1>
        </div>
    </div>
</body>
</template>


<style scoped>

body {
    margin-top: 5em;
    margin-bottom: 5em;
}

h1 {
    font-size: 40px;
    color:#f28482;
}

#intro{
    text-align: center;
    display: flex;
    flex-direction: column;
    margin-bottom: 5em;
}

#introPic {
    border-radius: 50%;
}

</style>