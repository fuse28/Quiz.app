const startButton = document.getElementById("start-button");
const nextButton = document.getElementById("next-button");
const questionContainerElement = document.getElementById("question-container");
const questionElement = document.getElementById("question");
const answerButtonElement = document.getElementById("answer-button");

let shuffleQuestions = 0;
let currentQuestion = 0;

startButton.addEventListener("click", startQuiz);
nextButton.addEventListener("click", () => {
  currentQuestion++;
  setNextQuestion();
});

function startQuiz() {
  console.log("started");
  startButton.classList.add("hide");
  shuffleQuestions = Quizquestions.sort(() => Math.random() - 0.5);

  questionContainerElement.classList.remove("hide");
  setNextQuestion();
}

function setNextQuestion() {
  resetQuiz();
  showQuestions(shuffleQuestions[currentQuestion]);
}

function showQuestions(question) {
  questionElement.innerText = question.question;
  question.options.forEach((options) => {
    const button = document.createElement("button");
    button.innerText = options.text;
    button.classList.add("btn");

    if (options.correct) {
      button.dataset.correct = options.correct;
    }
    button.addEventListener("click", selectAnswer);
    answerButtonElement.appendChild(button);
  });
}

function resetQuiz() {
  clearStatusClass(document.body);
  nextButton.classList.add("hide");
  while (answerButtonElement.firstChild) {
    answerButtonElement.removeChild(answerButtonElement.firstChild);
  }
}

function selectAnswer(e) {
  const selectedButton = e.target;
  const correct = selectedButton.dataset.correct;
  setStatusClass(document.body, correct);
  Array.from(answerButtonElement.children).forEach((button) => {
    setStatusClass(button, button.dataset.correct);
  });
  if (shuffleQuestions.length > currentQuestion + 1) {
    nextButton.classList.remove("hide");
  } else {
    startButton.innerText = "Restart?";
    startButton.classList.remove("hide");
  }
}

function setStatusClass(element, correct) {
  clearStatusClass(element);
  if (correct) {
    element.classList.add("correct");
  } else {
    element.classList.add("wrong");
  }
}

function clearStatusClass(element) {
  element.classList.remove("correct");
  element.classList.remove("wrong");
}

const Quizquestions = [
  {
    id: 0,
    question: "Javascript is an _______ language?",
    options: [
      { text: "Object-Oriented", correct: true },
      { text: "Object-Based", correct: false },
      { text: "Procedural", correct: false },
      { text: "None of these", correct: false },
    ],
  },
  {
    id: 1,
    question:
      "Which of the following keywords is used to define a variable in Javascript?",
    options: [
      { text: "var", correct: false },
      { text: "let", correct: false },
      { text: "Both a and b", correct: true },
      { text: "None of the above", correct: false },
    ],
  },
  {
    id: 2,
    question:
      "Which of the following method is used to access HTML element using Javascript?",
    options: [
      { text: "getElementbyId()", correct: false },
      { text: "getElementbyClassName()", correct: false },
      { text: "Both a and b", correct: true },
      { text: "None of the above", correct: false },
    ],
  },
  {
    id: 3,
    question:
      "Upon encountering empty statement, what does the Javascript Interpreter do?",
    options: [
      { text: "Throws an error", correct: false },
      { text: "Ignore the statements", correct: true },
      { text: "Give a warning", correct: false },
      { text: "None of the above", correct: false },
    ],
  },
  {
    id: 4,
    question:
      "Which of the following method can be used to display data in some form using Javascript?",
    options: [
      { text: "document.write()", correct: false },
      { text: "console.log()", correct: false },
      { text: "window.alert()", correct: false },
      { text: "All of the above", correct: true },
    ],
  },
  {
    id: 5,
    question: "How can a datatype be declared to be a constant type",
    options: [
      { text: "const", correct: true },
      { text: "var", correct: false },
      { text: "let", correct: false },
      { text: "constant", correct: false },
    ],
  },
  {
    id: 6,
    question:
      "When the switch statement matches the expression with the given labels, how is the comparison done?",
    options: [
      {
        text: "Both the datatype and the result of the expression are compared",
        correct: true,
      },
      {
        text: "Only the datatype of the expression is compared",
        correct: false,
      },
      { text: "Only the value of the expression is compared", correct: false },
      { text: "None of these", correct: false },
    ],
  },
];
