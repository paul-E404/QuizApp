let question_1 = 'Wer hat HTML erfunden?';
let question_1_answer_1 = 'Michael Jackson';
let question_1_answer_2 = 'Tim Berners-Lee';
let question_1_answer_3 = 'Lady Gaga';
let question_1_answer_4 = 'Angela Merkel';

let question_2 = 'Wofür steht das HTML Tag &lt;a&gt;?';
let question_2_answer_1 = 'Eine Tabelle';
let question_2_answer_2 = 'Einen Link';
let question_2_answer_3 = 'Einen Container';
let question_2_answer_4 = 'Fettgedruckten Text';

let right_answer;
let question_number = 0;

function hideElements() {
    document.getElementById('correct-answer').classList.add('d-none');
    document.getElementById('next-btn').classList.add('d-none');
}

function nextQuestion() {

    hideElements();

    let progress = question_number * 10 + '%';
    document.getElementById('progress-bar').innerHTML = progress;
    document.getElementById('progress-bar').style.width = progress;
    question_number++;

    if (document.getElementById('question').innerHTML == question_1) {
        loadQuestion2();
    } else {
        loadQuestion1();
    }
    
    right_answer = 2;
}

function loadQuestion1() {
    document.getElementById('question').innerHTML = question_1;
    document.getElementById('answer1').innerHTML = question_1_answer_1;
    document.getElementById('answer2').innerHTML = question_1_answer_2;
    document.getElementById('answer3').innerHTML = question_1_answer_3;
    document.getElementById('answer4').innerHTML = question_1_answer_4;
}

function loadQuestion2() {
    document.getElementById('question').innerHTML = question_2;
    document.getElementById('answer1').innerHTML = question_2_answer_1;
    document.getElementById('answer2').innerHTML = question_2_answer_2;
    document.getElementById('answer3').innerHTML = question_2_answer_3;
    document.getElementById('answer4').innerHTML = question_2_answer_4;
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
}