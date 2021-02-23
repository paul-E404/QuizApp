
let questions = [];

/**
 * Loads the questions.json file from the webserver.
 */
async function load() {
    let response = await fetch('http://paul-engerling.developerakademie.com/Modul7/QuizApp/nocors.php?json=questions');
    questions = await response.json();
    /* Show first question */
    nextQuestion();
}


let right_answer;
let question_number = 0;

/**
 * Loads next questions by clicking on next-button.
 */
function nextQuestion() {

    hideElements();
    showProgress();
    question_number++;
    loadQuestion();

}

/**
 * Hides elements which are not longer needed.
 */
function hideElements() {
    document.getElementById('correct-answer').classList.add('d-none');
    document.getElementById('next-btn').classList.add('d-none');
}

/**
 * Updates the progress bar.
 */
function showProgress() {
    let progress = Math.round((question_number / questions.length) * 100) + '%';
    document.getElementById('progress-bar').innerHTML = progress;
    document.getElementById('progress-bar').style.width = progress;
}

/**
 * Shows the current question and answer options.
 */
function loadQuestion() {
    document.getElementById('question').innerHTML = questions[question_number - 1]['question'];
    document.getElementById('answer1').innerHTML = questions[question_number - 1]['answer_1'];
    document.getElementById('answer2').innerHTML = questions[question_number - 1]['answer_2'];
    document.getElementById('answer3').innerHTML = questions[question_number - 1]['answer_3'];
    document.getElementById('answer4').innerHTML = questions[question_number - 1]['answer_4'];
    right_answer = questions[question_number - 1]['right_answer'];
}

/**
 * Shows the correct-answer- or wrong-answer-popup depending on the users choice.
 * Shows the next-button if the answer is correct.
 * @param  {number} a - Number 1 to 4 which stands for the right answer.
 */
function answer(a) {
    if (right_answer == a) {
        document.getElementById('correct-answer').classList.remove('d-none');
        document.getElementById('wrong-answer').classList.add('d-none');
        /* Show next button */
        document.getElementById('next-btn').classList.remove('d-none');
        /* Finishes the quiz if the last answer is correct. */
        if (question_number == questions.length) {
            showProgress();
            finishQuiz();
        }
    } else {
        document.getElementById('correct-answer').classList.add('d-none');
        document.getElementById('wrong-answer').classList.remove('d-none');
    }
}

/**
 * Shows the final screen with congratulations.
 */
function finishQuiz() {
    document.getElementById('quiz-container').classList.add('d-none');
    document.getElementById('finished-container').classList.remove('d-none');
    animate();
}

/**
 * Animates (enlarges) the winner image on the final screen.
 */
function animate() {
    setTimeout(function () {
        document.getElementById('img-winner').classList.add('enlarged');
    }, 100);
    setTimeout(function () {
        document.getElementById('img-winner').style.boxShadow = '0px 0px 10px lightblue';
    }, 1000);
    showRestartButton();
}

/**
 * Pop-ups the restart button when the winner-image-animation finished.
 */
function showRestartButton() {
    setTimeout(function () {
        document.getElementById('restart-btn').classList.remove('d-none');
    }, 2000)
};