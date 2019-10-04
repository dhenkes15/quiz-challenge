var questionsAnswers = [
  ['What is the capital of texas?', 'austin'],
  ['How many continents are in the world?', '7'],
  ['Which team did the Chicago Cubs play in the 1945 World Series?', 'detroit tigers']
]
var answer=' ';
var correct=' ';
var incorrect=' ';
function print(message) {
  
  document.write(message);
}

for ( i = 0; i < questionsAnswers.length; i += 1) {
  answer = prompt(questionsAnswers[i][0]);
  answer.toLowerCase();
  if (answer === questionsAnswers[i][1]) {
    correct += questionsAnswers[i][0];
  } else {
    incorrect += questionsAnswers[i][0];
  }
}
document.write('<h1><strong>You got the following questions right: </strong></h1>');
print(correct);
document.write('<h1><strong>You got the following questions wrong: </strong></h1>');
print(incorrect);
