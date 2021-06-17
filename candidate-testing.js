const input = require('readline-sync');

// TODO 2: modify your quiz app to ask 5 questions //

// TODO 1.1a: Define candidateName // 
let candidateName = '';
// TODO 1.2a: Define question, correctAnswer, and candidateAnswer //
let question = 'Who was the first American woman in space? ';
let correctAnswer = 'Sally Ride';
let candidateAnswer = [];
let questions = ['Who was the first American woman in space? ', 'True or false: 5 kilometer == 5000 meters? ', '(5 + 3)/2 * 10 = ? ', "Given the array [8, 'Orbit', 'Trajectory', 45], what entry is at index 2? ", 'What is the minimum crew size for the ISS? '];
let correctAnswers =['Sally Ride', 'true', '40', 'Trajectory', '3'];
let candidateAnswers = []

function askForName() {
  // TODO 1.1b: Ask for candidate's name //
  let candidateName = (input.question('What is your first and last name?'))
  console.log(`Hello ${candidateName}!`);
}

function askQuestion() {
  for (let i = 0; i < questions.length; i++) {
    let currentQuestion = `${i + 1}) ${questions[i]}`; // format question
    let answer = input.question(currentQuestion); // ask question
    //console.log(question); 
    //let userAnswer = input.question('What is your answer? ');
    //candidateAnswer.push(userAnswer);
    candidateAnswers.push(answer);

    console.log(`Your Answer: ${candidateAnswers[i]}`);
    console.log(`Correct Answer: ${correctAnswers[i]}`);
    console.log('\n');
  }
}
function gradeQuiz(candidateAnswers) {
  // TODO 1.2c: Let the candidate know if they have answered the question correctly or incorrectly // 
  //let correctResponses = 0
//if (candidateAnswer[0].toLowerCase() === correctAnswer.toLowerCase()) {
  //console.log('That is the correct answer!')  
//} else {console.log('That is not the correct answer!')
//}

  //for (let i = 0; i < candidateAnswers.length; i++) {
    //if (candidateAnswers[i].toLowerCase() === correctAnswers[i].toLowerCase()) {
      //correctResponses++
    //}
  //}

  //let grade = correctResponses/5*100;

  //let statusMessage = '';
  //if (grade >= 80) {
    //statusMessage = 'PASSED';
  //} else {
    //statusMessage = 'FAILED'
  //}

  //console.log(`>>> Overall Grade: ${grade} (${correctResponses} of 5 responses correct) <<<`)
  //console.log(`>>> Status: ${statusMessage} <<<`)

//return grade;
}

function runProgram() {
  askForName();  
  askQuestion();
  gradeQuiz(candidateAnswers);
}

// Don't write any code below this line //
// And don't change these or your program will not run as expected //
module.exports = {
  candidateName: candidateName,
  question: question,
  correctAnswer: correctAnswer,
  candidateAnswer: candidateAnswer,
  questions: questions,
  correctAnswers: correctAnswers,
  candidateAnswers: candidateAnswers,
  gradeQuiz: gradeQuiz,
  runProgram: runProgram
};