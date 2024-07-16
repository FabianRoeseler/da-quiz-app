let questions = [
  {
    question:
      "Mit wem stand Edmund Hillary 1953 auf dem Gipfel des Mount Everest?",
    answer_1: "Nasreddin Hodscha",
    answer_2: "Nursay Pimsorn",
    answer_3: "Tenzing Norgay",
    answer_4: "Abrindranath Singh",
    right_answer: 3,
  },
  {
    question:
      "Welche beiden Gibb-Brüder der Popband The Bee Gees sind Zwillinge?",
    answer_1: "Robin und Barry",
    answer_2: "Maurice und Robin ",
    answer_3: "Barry und Maurice",
    answer_4: "Andy und Robin",
    right_answer: 2,
  },
  {
    question:
      "Welcher berühmte Schriftsteller erbaute als diplomierter Architekt ein Freibad in Zürich?",
    answer_1: "Joseph Roth",
    answer_2: "Martin Walser",
    answer_3: "Friedrich Dürrenmatt",
    answer_4: "Max Frisch",
    right_answer: 4,
  },
  {
    question: "Wer ist ein braver Junge?",
    answer_1: "Marv",
    answer_2: "Lyonel",
    answer_3: "Jenny",
    answer_4: "Freddy",
    right_answer: 4,
  },
];

let currentQuestion = 0;
let rightQuestions = 0;
let audio_success = new Audio("sounds/powerUp.wav");
let audio_fail = new Audio("sounds/laserShoot.wav");

function init() {
  document.getElementById("allQuestions").innerHTML = questions.length;
  showQuestion();
}

function showQuestion() {
  if (gameIsOver()) {
    showEndScreen();
  } else {
    updateToNextQuestion();
    updateProgressBar();
  }
}

function answer(selection) {
  let question = questions[currentQuestion];
  let selectedQuestionNumber = selection.slice(-1);
  let idOfRightAnwser = `answer_${question["right_answer"]}`;

  if (rightAnswerSelected(selectedQuestionNumber, question)) {
    document.getElementById(selection).parentNode.classList.add("bg-success");
    audio_success.play();
    rightQuestions++;
  } else {
    document.getElementById(selection).parentNode.classList.add("bg-danger");
    document
      .getElementById(idOfRightAnwser)
      .parentNode.classList.add("bg-success");
    audio_fail.play();
  }
  document.getElementById("next-button").disabled = false;
}

function nextQuestion() {
  currentQuestion++;
  document.getElementById("next-button").disabled = true;
  resetAnswerButtons();
  showQuestion();
}

function resetAnswerButtons() {
  document.getElementById("answer_1").parentNode.classList.remove("bg-danger");
  document.getElementById("answer_1").parentNode.classList.remove("bg-success");
  document.getElementById("answer_2").parentNode.classList.remove("bg-danger");
  document.getElementById("answer_2").parentNode.classList.remove("bg-success");
  document.getElementById("answer_3").parentNode.classList.remove("bg-danger");
  document.getElementById("answer_3").parentNode.classList.remove("bg-success");
  document.getElementById("answer_4").parentNode.classList.remove("bg-danger");
  document.getElementById("answer_4").parentNode.classList.remove("bg-success");
}

function restartGame() {
  document.getElementById("headerImage").src = "./img/card.jpg";
  currentQuestion = 0;
  rightQuestions = 0;
  init();
  document.getElementById("endScreen").style = "display: none";
  document.getElementById("questionBody").style = "";
  document.getElementById("question-footer").style = "";
}

function showEndScreen() {
  document.getElementById("endScreen").style = "";
  document.getElementById("questionBody").style = "display: none";
  document.getElementById("amountOfQuestions").innerHTML = questions.length;
  document.getElementById("amountOfRightQuestions").innerHTML = rightQuestions;
  document.getElementById("headerImage").src = "./img/win.png";
  document.getElementById("question-footer").style = "display: none";
}

function updateToNextQuestion() {
  let question = questions[currentQuestion];
  document.getElementById("question-number").innerHTML = currentQuestion + 1;
  document.getElementById("questiontext").innerHTML = question["question"];
  document.getElementById("answer_1").innerHTML = question["answer_1"];
  document.getElementById("answer_2").innerHTML = question["answer_2"];
  document.getElementById("answer_3").innerHTML = question["answer_3"];
  document.getElementById("answer_4").innerHTML = question["answer_4"];
}

function updateProgressBar() {
  let percent = (currentQuestion + 1) / questions.length;
  percent = Math.round(percent * 100);
  document.getElementById("progress-bar").innerHTML = `${percent} %`;
  document.getElementById("progress-bar").style = `width: ${percent}%;`;
}

function gameIsOver() {
  return currentQuestion >= questions.length;
}

function rightAnswerSelected(selectedQuestionNumber, question) {
  return selectedQuestionNumber == question["right_answer"];
}
