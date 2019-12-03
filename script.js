// / 
// start timer 
// display questions
//    for loop to display the choice array
//        create element
// set button text set.buttonAttribute (attribute sets the data)
// on click 
//condition to check if answer is question 
// if  
// correct answer = this.attribute
// one elemnet is the answer  
// remove text and then laod the new question
// else
//time penalty



var questions = [

  {
    title: "Commonly used data types DO NOT include ?",
    choices: ["strings", "booleans", "alerts", "numbers"],
    answer: "alerts"
  },
  {
    title: "The condition in an if / else statement is enclosed within ____ ?",
    choices: ["quotes", "curly brackets", "parentheses", "square brackets"],
    answer: "parentheses",
  },

]



var answer1El = document.querySelector("#answer1");
var questionEl = document.querySelector("#question");
var timerEl = document.querySelector(".timer");
var secondsLeft = 100;
timerEl.textContent = secondsLeft;
var finalTime = ""
timeLeft = ""

// tried to implement conidition to end game if time reached zero but was unable to run the condition below
if (secondsLeft <= 0) {
  alert("Sorry times up try again")
  clearInterval(timeLeft)
}

$("#click-me").on("click", function startTimer() {

  var timeLeft = setInterval(function () {
    secondsLeft--;
    timerEl.textContent = secondsLeft;
    finalTime = secondsLeft
   

  }, 1000);

  $(this).hide();

  // set up a boolean to check if timer is running and then change to initally to false, 
  // using validations, using an if statement 



  displayQuestion1()
});
function displayQuestion1() {
  $("#question").text(questions[0].title);

  // this loops through the choices array to create a button for each choice[i]

  for (var i = 0; i < questions[0].choices.length; i++) {

    var answersBtns = $("<button>");
    //dynamically creating a button   
    // setting the text of each button to to display the choice 
    answersBtns.addClass("multiple-choice")
    answersBtns.text(questions[0].choices[i]);

    //  assign an attribute for each answer to each button 
    answersBtns.attr("value", questions[0].choices[i]);

    // make all the buttons appear on the page appending the element or child

    $("#answers").append(answersBtns);


  }
}
// create a variable for uthe users choice so that we have a value to compare to the right answer
var userChoice = ""

// create an onclick function to determine what the user choice
$("#answers").on("click", function (event) {
  //console log to make sure that the users choice is captured
  console.log(event.target)
  // var userChoice = $(this).val();
  var userChoice = event.target.value
  console.log(userChoice + "your pick");
  console.log(questions[0].answer + "is the answer");
  console.log(userChoice)

  // check that the users choice matches the answer


  if (userChoice === questions[0].answer) {
    console.log("yes the answer is " + userChoice)
    // if the answer is correct we can clear question 1
    $("#answers").empty();
    $("#question").empty();
    // then we can run the same code for question 1 just replacing the value to question 2
    displayQuestion2()
    function displayQuestion2() {
      $("#question").text(questions[1].title);
      for (var i = 0; i < questions[1].choices.length; i++) {
        var answersBtns = $("<button>");
        answersBtns.addClass("multiple-choice")
        answersBtns.text(questions[1].choices[i]);
        answersBtns.attr("value", questions[1].choices[i]);
        $("#answers1").append(answersBtns);
      }

    }
  }

  else {
    wrongAnswer();

  
    function wrongAnswer() {
      penalty();
      function penalty() {
        secondsLeft -= 10;
      }
    }
  }
});

$("#answers1").on("click", function (event) {
  var userChoice = event.target.value;
  console.log(questions[1].answer)
  if (userChoice === questions[1].answer) {
    console.log("yes the answer is " + userChoice)
    $("#answers1").empty();
    $("#question").empty();
    $(".timer").hide(); 
    function saveScore ()
    {
      // saving user time to local storage
      localStorage.setItem("timer", finalTime)
      var displayScore = localStorage.getItem("timer");
      $("#answers2").text("your final time is " + displayScore + " congratulation")
      console.log(displayScore)
      clearInterval(secondsLeft);
    }
  // adding button to display high scores 
    saveScore();
    var highScores = $("<button>");
    displayHighScores()
    
  // began trying to implement functions for displaying highscores
    // function displayHighScores(){
      // $("#highscores").text("display high scores");
      // highScores.addClass("high-score")
      // $("#highscores").append(displayHighScores)

    // }
    
//     $("#answers2").on("click"), function seeHighScores(){
// console.log(event.target)
//       $("#answers2").hide
//       $("#highscores").hide
//     }

  
  }


else {
  wrongAnswer();

  // alert("no that is wrong try again before the time runs out but be careful 10 second time penalty for every wrong answer")

  function wrongAnswer() {
    penalty();
    function penalty() {
      secondsLeft -= 10;
    }
  }
}
});




















