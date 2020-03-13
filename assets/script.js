$(document).ready(function () {

    $("#netflixNav").on("click", function () {
        $(".preload").removeClass("preload");
        console.log("click")
        $(".hidden").addClass("display")
        $(".hidden").removeClass("hidden")
        $("#imgSrc").empty()
        $("#deployedLink").empty()
        $("#githubRepo").empty()
        $("#interesting").empty()
        $("#decsription").empty()
        $("#technologies").empty()
        $("#imgSrc").attr("src", "assets/images/netflixNav.png")
        $("#deployedLink").attr("href", "https://thawing-inlet-42364.herokuapp.com/").text("See the project deployed")
        $("#githubRepo").attr("href", "https://github.com/SiJBC/project2").text("See the project Github Repository")
        $("#interesting").text("This application required a new understanding required a new understanding of rendering with handlebars, the concept of how front end elements can be stored in a database was of particular interest to me")
        $("#description").text("The application works requesting a set of user parametres for the website that they would like, they can select a color theme and upload images")
        $("#technologies").text("Technologies used")
        $("#technologies1").text("html")
        $("#technologies2").text("materialize css framework")
        $("#technologies3").text("jquery for dyncamic elements")
        $("#technologies4").text("ajax for getting data from rapid api")
        $("#technologies5").text("rapid api for connecting to the netflix database")
    })

    $("#onePageMan").on("click", function () {
        console.log("click")
        $(".hidden").addClass("display")
        $(".hidden").removeClass("hidden")
        $("#imgSrc").empty()
        $("#deployedLink").empty()
        $("#githubRepo").empty()
        $("#interesting").empty()
        $("#decsription").empty()
        $("#technologies").empty()
        $("#imgSrc").attr("src", "assets/images/onePageMan.png")
        $("#deployedLink").attr("href", "https://sijbc.github.io/project1/").text("See the project deployed")
        $("#githubRepo").attr("href", "https://github.com/SiJBC/project1").text("See the project Github Repository")
        $("#interesting").text("This application required a new understanding of api's. The complexity invovled with the query requests meant that the query needed to be converted into json format to change the query parametres")
        $("#description").text("The application works by tracking the users reqion this allows the results to be specific to netflix in that persions region, then the user can enter in query parametres and a random netflix selection is delivered, the user then has the option to go the netflix site to see their selection")
        $("#technologies").text("Technologies used")
        $("#technologies").text("Technologies used")
        $("#technologies1").text("html/handlebars")
        $("#technologies2").text("materialize css framework")
        $("#technologies3").text("jquery and vanilla javascript for dynamic elements")
        $("#technologies4").text("ajax for sending and receiving data from the database")
        $("#technologies5").text("cloudary for uploading images")
    })

})






