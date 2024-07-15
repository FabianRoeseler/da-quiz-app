let questions = [
  {
    question: "Wer hat HTML erfunden?",
    answer_1: "Robbie Williams",
    answer_2: "Lady Gaga",
    answer_3: "Tim Berners-Lee",
    answer_4: "Justin Bieber",
    right_answer: 3,
  },
  {
    question: "Was bedeutet das HTML Tag <a>?",
    answer_1: "Text Fett",
    answer_2: "Container",
    answer_3: "Ein Link",
    answer_4: "Kursiv",
    right_answer: 3,
  },
  {
    question: "Woe bindet man eine Website in eine Website ein?",
    answer_1: "falsch",
    answer_2: "richtig",
    answer_3: "falsch",
    answer_4: "falsch",
    right_answer: 2,
  },
  {
    question: "Wer ist ein braver Junge?",
    answer_1: "Marv",
    answer_2: "Lyonel",
    answer_3: "Jenny",
    answer_4: "Freddy",
    right_answer: 2,
  },
];

let currentQuestion = 0;

function init() {
  document.getElementById("allQuestions").innerHTML = questions.length;
  showQuestion();
}

function showQuestion() {
  let question = questions[currentQuestion];

  document.getElementById("questiontext").innerHTML = question["question"];
  document.getElementById("answer_1").innerHTML = question["answer_1"];
  document.getElementById("answer_2").innerHTML = question["answer_2"];
  document.getElementById("answer_3").innerHTML = question["answer_3"];
  document.getElementById("answer_4").innerHTML = question["answer_4"];
}

function answer(selection) {
  let question = questions[currentQuestion];
  let selectedQuestionNumber = selection.slice(-1);

  if (selectedQuestionNumber == question["right_answer"]) {
    console.log("Right answer");
  } else {
    console.log("Wrong answer");
  }
}
