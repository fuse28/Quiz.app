const Quizquestions = [
  {
    question: "Javascript is an _______ language?",
    options: {
      a: "Object-Oriented",
      b: "Object-Based",
      c: "Procedural",
      d: "None of these",
    },

    correctAnswer: "a",
  },
  {
    question:
      "Which of the following keywords is used to define a variable in Javascript?",

    a: "var",
    b: "let",
    c: "Both a and b",
    d: "None of the above",

    correctAnswer: "c",
  },
  {
    question:
      "Which of the following method is used to access HTML element using Javascript?",

    a: "getElementbyId()",
    b: "getElementbyClassName()",
    c: "Both a and b",
    d: "None of the above",

    correctAnswer: "c",
  },
  {
    question:
      "Upon encountering empty statement, what does the Javascript Interpreter do?",

    a: "Throws an error",
    b: "Ignore the statements",
    c: "Give a warning",
    d: "None of the above",

    correctAnswer: "b",
  },
  {
    question:
      "Which of the following method can be used to display data in some form using Javascript?",

    a: "document.write()",
    b: "console.log()",
    c: "window.alert()",
    d: "All of the above",

    correctAnswer: "d",
  },
  {
    question: "How can a datatype be declared to be a constant type",

    a: "const",
    b: "var",
    c: "let",
    d: "constant",

    correctAnswer: "a",
  },
  {
    question:
      "When the switch statement matches the expression with the given labels, how is the comparison done?",

    a: "Both the datatype and the result of the expression are compared",
    b: "Only the datatype of the expression is compared",
    c: "Only the value of the expression is compared",
    d: "None of these",

    correctAnswer: "a",
  },
];

const quiz = document.getElementById("quiz");
const answerElement = document.querySelectorAll(".answer");
const questionElement = document.getElementById("question");

const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");

const submitButton = document.getElementById("submit");

let currentQuiz = 0;
let score = 0;

const deselectAnswer = () => {
  answerElement.forEach((answerElement) => (answerElement.checked = false));
};
deselectAnswer();

const loadQuiz = () => {
  deselectAnswer();
  const currentQuizData = Quizquestions[currentQuiz];

  questionElement.innerText = currentQuizData.question;

  a_text.innerText = currentQuizData.a;
  b_text.innerHTML = currentQuizData.b;
  c_text.innerHTML = currentQuizData.c;
  d_text.innerHTML = currentQuizData.d;
};
loadQuiz();

const selected = () => {
  let answer;
  answerElement.forEach((answerElement) => {
    if (answerElement.checked) {
      answer = answerElement.id;
    }
  });
  return answer;
};

submitButton.addEventListener("click", () => {
  const answer = selected();
  if (answer) {
    if (answer === Quizquestions[currentQuiz].correctAnswer) {
      score++;
    }
    currentQuiz++;

    if (currentQuiz < Quizquestions.length) {
      loadQuiz();
    } else {
      quiz.innerHTML = `<h2>You answered ${score}/${Quizquestions.length} questions correctly</h2>
      <button onClick="location.reload()">Reload</button>`;
    }
  }
});
