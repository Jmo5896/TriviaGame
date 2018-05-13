// The player will have a limited amount of time to finish the quiz. 


// The game ends when the time runs out. The page will reveal the number of questions
// that players answer correctly and incorrectly.


// Don't let the player pick more than one answer per question.
// Don't forget to include a countdown timer.
$('#start').on('click', function(){
    $('#start').remove();
    game.loadQuestion();
});

$(document).on('click', '.answer-button', function(e) {
    game.clicked(e);
});

$(document).on('click', '#reset', function() {
    game.reset();
});

var questions = [
    {
        question: 'question 1?',
        choices: [
            'a', 'b', 'c', 'd'
        ],
        correctAnswer: 'a'
    },
    {
        question: 'question 2?',
        choices: [
            '1', '2', '3', '4'
        ],
        correctAnswer: '3'
    },
    {
        question: 'question 3?',
        choices: [
            'a', 'b', 'c', 'd'
        ],
        correctAnswer: 'b'
    }
];
 
//need an object to represent game
    //inside object we need: counter, answeredCorrectly, answered Incorrectly,
    // unAnswered, question
        //methods: countdown, load question, next question, answered correctly, answered 
        // incorrectly, times up, clicked, results, reset
var timer;
var game = {
    counter: 30,
    correct: 0,
    incorrect: 0,
    unAnswered: 0,
    currentQuestion: 0,
    question: questions,
    countDown: function() {
        game.counter--;
        $('#counter').html(game.counter);
        if (game.counter <= 0) { 
            console.log('times up'); 
            game.timeUp();
        }
          
    },
    loadQuestion: function() {
        timer = setInterval(game.countDown, 1000);
        $('.gameGoesHere').html('<h2>TIME REMAINING: <span id = "counter">30</span> Seconds</h2>');
        $('.gameGoesHere').append('<h2>' + questions[game.currentQuestion].question + '</h2>');

        for (var i = 0; i < questions[game.currentQuestion].choices.length; i++) {
            $('.gameGoesHere').append('<button class= "answer-button" id = "button-' + i + '" data-name = "' + questions[game.currentQuestion].choices[i] + '">' + questions[game.currentQuestion].choices[i] + '</button>');
        }
    },
    nextQuestion: function() {
        clearInterval(timer);
        game.counter = 30;
        $('#counter').html(game.counter);
        game.currentQuestion++;
        game.loadQuestion();
    }, 
    answeredCorrectly: function() {
        clearInterval(timer);
        game.correct++;
        $('.gameGoesHere').html('<h2>YOU GOT IT RIGHT!!!</h2>');
        if (game.currentQuestion == questions.length - 1) {
            setTimeout(game.results, 3 * 1000);
        } else {
            setTimeout(game.nextQuestion, 3 * 1000);
        }
    },
    answeredIncorrectly: function() {
        clearInterval(timer);
        game.incorrect++;
        $('.gameGoesHere').html('<h2>YOU GOT IT WRONG!!!</h2>');
        $('.gameGoesHere').append('<h3>The Correct Answer Was: ' + questions[game.currentQuestion].correctAnswer + '</h3>');
        if (game.currentQuestion == questions.length - 1) {
            setTimeout(game.results, 3 * 1000);
        } else {
            setTimeout(game.nextQuestion, 3 * 1000);
        }
    },
    timeUp: function() {
        clearInterval(timer);
        game.unAnswered++;
        $('.gameGoesHere').html('<h2>OUT OF TIME!</h2>');
        $('.gameGoesHere').append('<h3>The Correct Answer Was: ' + questions[game.currentQuestion].correctAnswer + '</h3>');
        if (game.currentQuestion == questions.length - 1) {
            setTimeout(game.results, 3 * 1000);
        } else {
            setTimeout(game.nextQuestion, 3 * 1000);
        }
    },
    clicked: function(e) {
        clearInterval(timer);
        if ($(e.target).data('name') == questions[game.currentQuestion].correctAnswer) {
            game.answeredCorrectly();
        } else {
            game.answeredIncorrectly();
        }
    },
    results: function() {
        clearInterval(timer);
        $('.gameGoesHere').html('<h2>ALL DONE!</h2>');
        $('.gameGoesHere').append('<h3>Correct: ' + game.correct + '</h3>');
        $('.gameGoesHere').append('<h3>Incorrect: ' + game.incorrect + '</h3>');
        $('.gameGoesHere').append('<h3>unanswered: ' + game.unAnswered + '</h3>');
        $('.gameGoesHere').append('<button id = "reset">RESET</button>');
    }, 
    reset: function() {
        clearInterval(timer);
        game.currentQuestion = 0;
        game.counter = 30;
        game.correct = 0;
        game.incorrect = 0;
        game.unAnswered = 0;
        game.loadQuestion();
    }
}


