const startButton = document.querySelector("#start-btn");
const nextButton = document.querySelector("#next-btn");
const questionContainerElement = document.querySelector("#question-container");
const questionElement = document.querySelector("#question");
const answerButtonsElement = document.querySelector("#answer-buttons");


const questions = [
    {
      question: "Arrays in JavaScript can be used to store ___. ",
      answers: [
        { text: "Numbers and strings", correct: false },
        { text: "other arrays", correct: false },
        { text: "All of the above", correct: true },
        { text: "Booleans", correct: false },
      ],
    },
    {
      question: "The condition in an if/else statement is enclosed within ________.",
      answers: [
        { text: "Quotes", correct: false },
        { text: "Curly Braces", correct: true },
        { text: "Parenthesis", correct: false },
        { text: "Square Brackets", correct: false },
      ],
    },
    {
      question: "Commonly used data types do NOT include:",
      answers: [
        { text: "Strings", correct: false },
        { text: "Booleans", correct: false },
        { text: "Alerts", correct: true },
        { text: "Numbers", correct: false },
      ],
    },
  ];

let shuffledQuestions, currentQuestionIndex;

//randomly displays questions
const startQuiz = () => {
  startButton.classList.add("hide");
  shuffledQuestions = questions.sort(() => Math.random() - 0.5);
  currentQuestionIndex = 0;
  questionContainerElement.classList.remove("hide");
  setNextQuestion();
};

//event listener to startquiz
startButton.addEventListener("click", startQuiz);

const setNextQuestion = () => {
    resetState();
    displayQuestion(shuffledQuestions[currentQuestionIndex]);
  };

  nextButton.addEventListener("click", () => {
    currentQuestionIndex++;
    setNextQuestion();
  });

  const displayQuestion = (question) => {
    questionElement.innerText = question.question;
    question.answers.forEach((answer) => {
      const button = document.createElement("button");
      button.innerText = answer.text;
      button.classList.add("btn");
      if (answer.correct) {
        button.dataset.correct = answer.correct;
      }
      button.addEventListener("click", chooseAnswer);
      answerButtonsElement.appendChild(button);
    });
  };

  const resetState = () => {
    clearStatusClass(document.body);
    nextButton.classList.add("hide");
    while (answerButtonsElement.firstChild) {
      answerButtonsElement.removeChild(answerButtonsElement.firstChild);
    }
  };

  const chooseAnswer = (e) => {
    const selectedButton = e.target;
    const correct = selectedButton.dataset.correct;
    Array.from(answerButtonsElement.children).forEach((button) => {
      setStatusClass(button, button.dataset.correct);
    });
    if (shuffledQuestions.length > currentQuestionIndex + 1) {
      nextButton.classList.remove("hide");
    } else {
      startButton.innerText = "Restart";
      startButton.classList.remove("hide");
    }
  };

  const setStatusClass = (element, correct) => {
    clearStatusClass(element);
    if (correct) {
      element.classList.add("correct");
    } else {
      element.classList.add("wrong");
    }
  };

  const clearStatusClass = (element) => {
    element.classList.remove("correct");
    element.classList.remove("wrong");
  };
/*
let lastScores = JSON.parse(localStorage.getItem("highscores"));


var questionsArray = [
    {
        question: "Commonly used data types do NOT include:",
        a: "Strings",
        b: "Booleans",
        c: "Alerts",
        d: "Numbers",
        answer: "Alerts"
    },
    {
        question: "The condition in an if/else statement is enclosed within ________.",
        a: "Quotes",
        b: "Curly Braces",
        c: "Parenthesis",
        d: "Square Brackets",
        answer: "Curly Braces"
    },
    {
        question: "Arrays in JavaScript can be used to store ___. ",
        a: "Numbers and strings",
        b: "other arrays",
        c: "Booleans",
        d: "All of the above",
        answer: "All of the above"
    }];

// var StartBtn = document.querySelector("#Start");
// StartBtn.addEventListener("click", quizTime)
$("#Start").on("click", function(){
    startQuiz();
    $("#Start").hide();
}); 

//start game but need to set up to ask Q's

function startQuiz (){
    nextQuestion();
}; 

//define next Q w empty var to hold
var nextQuestion ;
var random; 
//time the Q refer to: https://www.w3schools.com/jsref/met_win_settimeout.asp
function nextQuestion(){
    nextQuestion = setTimeout( alertFunc, 1000*75 )
    if (questionsArray.length > 0) {
        $("#Start").empty();
        random = Math.floor(Math.random()*(questionsArray.length));
        //need to append
        $("#Start").append('<div class = "question"><p>' + questionsArray.question + '</p></div>'); 
        $(".question").append(<div id = "time"><p>Time Left: <span id = "time">75</span></p></div>);
    }
    function alertFunc(){
        alert("You ran out of time!");

    }
};
*/