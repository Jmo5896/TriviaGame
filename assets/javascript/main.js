// The player will have a limited amount of time to finish the quiz. 


// The game ends when the time runs out. The page will reveal the number of questions
// that players answer correctly and incorrectly.


// Don't let the player pick more than one answer per question.
// Don't forget to include a countdown timer.

var timerID;
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
            'a', 'b', 'c', 'd'
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

function startGame() {
    //TODO: loop thru array of questions 
        for (var i = 0; i < questions.length; i++) {
        //call showQuestion function and pass it the questions and choices from the current 
        //object that is being iterrated
            var currentQuestion = questions[i].question,
            var currentChoices =
            showQuestion(questions[i].question, questions[i].choices )
            console.log(questions[i].question);
            console.log(questions[i].choices);
            
        }
    //TODO: start the timer and assign it to timerID
    timerID = setInterval(startGame, 1000 * 5);
    console.log(timerID);
}
startGame();

function showQuestion(question, choices) {
    //TODO: use jquery to create a question div, a <p> for the question and radio buttons for 
    //the choices
    var newDivForQuestions = $('<div>');
    var choiceButtons = $('<button>');

    //TODO: after above is finished append question div to the html
    $('#showQuestion').text(newDivForQuestions + question);
    $('#showChoices').text(choiceButtons + choices);
}

//TODO: click event handler for submit button
    // loop thru all the questions in the html using jquery
        // loop thru all radio buttons for this question and push the value attribute of the 
        //selected radio button to an array of choices

    //TODO: compare the lenghth of the userChoices array to the length of the questions array
    //loop thru all user choices array compare each value to the questions array
    // var answerIndex = question[0].answerIndex;
    // if (questions[0].choices[answerIndex] === userChoices[0]) {
    //     //TODO: thisIsACorrectAnswer
    // } else {
    //     // this is incorrect answer
    // }