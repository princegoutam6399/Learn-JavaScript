const data = [
    {
        "question": "A flashing red traffic light signifies that a driver should do what?",
        "A": "stop",
        "B": "speed up",
        "C": "proceed with caution",
        "D": "honk the horn",
        "answer": "A"
    }, {
        "question": "A knish is traditionally stuffed with what filling?",
        "A": "potato",
        "B": "creamed corn",
        "C": "lemon custard",
        "D": "raspberry jelly",
        "answer": "A"
    }, {
        "question": "A pita is a type of what?",
        "A": "fresh fruit",
        "B": "flat bread",
        "C": "French tart",
        "D": "friend bean dip",
        "answer": "B"
    }, {
        "question": "A portrait that comically exaggerates a person's physical traits is called a what?",
        "A": "landscape",
        "B": "caricature",
        "C": "still life",
        "D": "Impressionism",
        "answer": "B"
    }, {
        "question": "A second-year college student is usually called a what?",
        "A": "sophomore",
        "B": "senior",
        "C": "freshman ",
        "D": "junior ",
        "answer": "A"
    }, {
        "question": "A student who earns a J.D. can begin his or her career as a what?",
        "A": "lawyer",
        "B": "bricklayer",
        "C": "doctor",
        "D": "accountant",
        "answer": "A"
    }, {
        "question": "A triptych is a work of art that is painted on how many panels?",
        "A": "two",
        "B": "three",
        "C": "five",
        "D": "eight",
        "answer": "B"
    }, {
        "question": "According to a famous line from the existentialist play 'No Exit' what is hell?",
        "A": "oneself",
        "B": "other people",
        "C": "little made large",
        "D": "hued in green and blue",
        "answer": "B"
    }, {
        "question": "According to a popular slogan, what state should people not 'mess with'?",
        "A": "New York",
        "B": "Texas",
        "C": "Montana",
        "D": "Rhode Island",
        "answer": "B"
    }, {
        "question": "According to a Yale University study, what smell is the most recognizable to American adults?",
        "A": "tuna",
        "B": "laundry",
        "C": "popcorn",
        "D": "coffee",
        "answer": "D"
    }, {
        "question": "According to folklore, the 'jackalope' is an antlered version of what animal?",
        "A": "chicken",
        "B": "rabbit",
        "C": "moose",
        "D": "snake",
        "answer": "B"
    }]

const quiz = document.getElementById("quiz");
const answerEles = document.querySelectorAll(".answer");
const questionEles = document.getElementById("question");
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const submitBtn = document.getElementById("submit");

let currentQuiz = 0;
let score = 0;

loadQuiz();

function loadQuiz() {
    deSelectedAnswer()
    const currentQuizData = data[currentQuiz];

    questionEles.textContent = currentQuizData.question;
    a_text.textContent = currentQuizData.A;
    b_text.textContent = currentQuizData.B;
    c_text.textContent = currentQuizData.C;
    d_text.textContent = currentQuizData.D;

}

function deSelectedAnswer() {
    answerEles.forEach(answerEle => answerEle.checked = false);
}

function getSelectedAnswer() {
    let answers;
    answerEles.forEach(answerEle => {
        if (answerEle.checked) {
            answers = answerEle.id;
        }
    })
    return answers;
}

submitBtn.addEventListener("click", () => {
    const selectedAns = getSelectedAnswer();
    if (selectedAns) {

        const currentQuizData = data[currentQuiz];

        if (selectedAns === currentQuizData.answer) {
            score++;
        }
        currentQuiz++;

        if (currentQuiz < data.length) {
            loadQuiz()
        } else {
            quiz.innerHTML = `<h2>You answered ${score}/${quizData.length} questions correctly.</h2>`;
            submitBtn.textContent = "Restart";
        }
    }
});