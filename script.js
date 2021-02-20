let right_answer;
let question_number = 0;


function hideElements() {
    document.getElementById('correct-answer').classList.add('d-none');
    document.getElementById('next-btn').classList.add('d-none');
}


function nextQuestion() {

    hideElements();
    showProgress();
    question_number++;
    loadQuestion();

}

function showProgress() {
    let progress = Math.round((question_number / questions.length) * 100) + '%';
    document.getElementById('progress-bar').innerHTML = progress;
    document.getElementById('progress-bar').style.width = progress;
}


function loadQuestion() {
    document.getElementById('question').innerHTML = questions[question_number - 1]['question'];
    document.getElementById('answer1').innerHTML = questions[question_number - 1]['answer_1'];
    document.getElementById('answer2').innerHTML = questions[question_number - 1]['answer_2'];
    document.getElementById('answer3').innerHTML = questions[question_number - 1]['answer_3'];
    document.getElementById('answer4').innerHTML = questions[question_number - 1]['answer_4'];
    right_answer = questions[question_number - 1]['right_answer'];
}


function answer(a) {
    if (right_answer == a) {
        document.getElementById('correct-answer').classList.remove('d-none');
        document.getElementById('wrong-answer').classList.add('d-none');
        /* Show next button */
        document.getElementById('next-btn').classList.remove('d-none');
    } else {
        document.getElementById('correct-answer').classList.add('d-none');
        document.getElementById('wrong-answer').classList.remove('d-none');
    }
    if (question_number == questions.length) {
        showProgress();
        finishQuiz();
    }
}

function finishQuiz() {
    document.getElementById('quiz-container').classList.add('d-none');
    document.getElementById('finished-container').classList.remove('d-none');
    animate();
}

function animate() {
    setTimeout(function () {
        document.getElementById('img-winner').classList.add('enlarged');
    }, 100);
    setTimeout(function () {
        document.getElementById('img-winner').style.boxShadow = '0px 0px 10px lightblue';
    }, 1000);
    showRestartButton();
}

function showRestartButton() {
    setTimeout(function () {
        document.getElementById('restart-btn').classList.remove('d-none');
    }, 2000)
};