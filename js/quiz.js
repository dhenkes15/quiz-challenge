var questionsAnswers = [
  ['What is the capital of Texas?', 'austin'],
  ['How many continents are in the world?', '7'],
  ['Which team did the Chicago Cubs play in the 1945 World Series?', 'detroit tigers']
]
var question;
var answer;
var response;
var correctAnswer = [ ];
var wrongAnswer = [ ];
function printArray(list) {
  var html = '<ol>';
  for (var i = 0; i < list.length; i += 1) {
    html += '<li>' + list[i] + '</li>';
  }
  html += '</ol>';
  document.write(html);
}

for ( var i = 0; i < questionsAnswers.length; i += 1) {
  question = questionsAnswers[i][0];
  answer = questionsAnswers[i][1];
  response = prompt(question);
  response.toLowerCase();
  if (response === answer) {
    correctAnswer.push(question);
  } else {
    wrongAnswer.push(question);
  }
}
document.write('<h1><strong>You got the following questions right: </strong></h1>');
printArray(correctAnswer);
document.write('<h1><strong>You got the following questions wrong: </strong></h1>');
printArray(wrongAnswer);
