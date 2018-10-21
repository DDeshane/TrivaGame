var userAnswers = ['x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x'];
var correctAnswers = ['b', 'a', 'c', 'a', 'b', 'd', 'b', 'a', 'a', 'd'];
var correct = 0;
var endTimer = false;

function countdown() {
    var seconds = 60;
    function tick() {
        var counter = document.getElementById("counter");
        seconds--;
        counter.innerHTML = "0:" + (seconds < 10 ? "0" : "") + String(seconds);
        if (endTimer === true) {
            return;
        }
        if (seconds > 0) {
            setTimeout(tick, 1000);
        }
        else {
            calculateResults();
        }
    }
    tick();
}

$('#start-quiz').on('click', function (e) {
    $('#quiz').show();
    $('#intro').hide();
    countdown();
});

$('input[type="radio"]').on('click', function (e) {
    var input = $(e.currentTarget);
    var question = input.attr('name');
    var stringNumber = question.substring(1, question.length);
    var number = parseInt(stringNumber);
    userAnswers[number - 1] = input.val();
});

$('#submit-test').on('click', function (e) {
    endTimer = true;
    calculateResults();
    alert('done');
});

function calculateResults() {
    $('#quiz').hide();
    $('#status').show();
    for (var i = 0; i < correctAnswers.length; i++) {
        if (userAnswers[i] == correctAnswers[i]) {
            correct++;
        }
    }

    $('.game-result').html('You got ' + correct + '/' + correctAnswers.length + ' correct');
}