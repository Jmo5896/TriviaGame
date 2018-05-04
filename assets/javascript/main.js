// The player will have a limited amount of time to finish the quiz. 


// The game ends when the time runs out. The page will reveal the number of questions
// that players answer correctly and incorrectly.


// Don't let the player pick more than one answer per question.
// Don't forget to include a countdown timer.

var timerID;

var count = 0;
var questions = [
    {
        question: 'question 1?',
        choices: [
            'a', 'b', 'c', 'd'
        ],
        answerIndex: 1
    },
    {
        question: 'question 2?',
        choices: [
            '1', '2', '3', '4'
        ],
        answerIndex: 2
    },
    {
        question: 'question 3?',
        choices: [
            'a', 'b', 'c', 'd'
        ],
        answerIndex: 0
    }
];
var currentQuestion;
var currentChoices;
//start button
$('.startButton').on('click', startGame);

function startGame() {
    //TODO: loop thru array of questions 
    timerID = setInterval(nextQuestion, 1000*11);
        //call showQuestion function and pass it the questions and choices from the current 
        //object that is being iterrated
            
    //TODO: start the timer and assign it to timerID
    //stack overflow, it works
    function startTimer(duration, display) {
        var timer = duration, minutes, seconds;
        setInterval(function () {
            seconds = parseInt(timer % 60, 10);
    
            seconds = seconds < 10 ? "0" + seconds : seconds;
    
            display.text(seconds);
    
            if (--timer < 0) {
                timer = duration;
            }
        }, 1000);
    }
    
    jQuery(function ($) {
        var thirtySeconds = 10,
            display = $('.displayTimer');
        startTimer(thirtySeconds, display);
    });
    
}

function showQuestion(question, choices) {
    //TODO: use jquery to create a question div, a <p> for the question and radio buttons for 
    //the choices
    var newPForQuestions = $('<p>');
    $('#showChoices').text('');
    for (var i = 0; i < questions[count].choices.length; i++ ) {
       
        $('#showChoices').append('<button value = "' + i + '" class = "buttons">' + questions[count].choices[i] + '</button><br>');
    }
    //TODO: after above is finished append question div to the html
    $('#showQuestion').text(questions[count].question);
    
}

function nextQuestion() {
    //  TODO: Increment the count by 1.
  if (count + 1 < questions.length) {
    //   clearTimeout(nextQuestion);
    count++;
    
    // TODO: Use a setTimeout to run displayImage after 1 second.
    setTimeout(showQuestion(questions[count].question, questions[count].choices), 1000*5);
  }
}
showQuestion(questions[count].question, questions[count].choices);

//TODO: click event handler for submit button
    // loop thru all the questions in the html using jquery
        // loop thru all radio buttons for this question and push the value attribute of the 
        //selected radio button to an array of choices

    //TODO: compare the lenghth of the userChoices array to the length of the questions array
    //loop thru all user choices array compare each value to the questions array
    var answerIndex = questions[count].answerIndex;
    $('.buttons').on('click', function() {
        answerIndex = this.value
       console.log(answerIndex);
   })
    
    
    if (questions[count].choices[answerIndex] === answerIndex) {
        //TODO: thisIsACorrectAnswer
        alert('correct');
    } else {
        // this is incorrect answer
        alert('incorrect');
    }