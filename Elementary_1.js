// TASK 'Even the last'
// You are given an array of integers.
// Find the sum of the integers with even indexes (0, 2, 4...).
// Then multiply this sum and the final element of the array.
// Empty array always has result of 0.

var input = [10, 5, 6, 14, 3, 2, 1, 9, 22];

let firstBuffer = [];

function findEven() {
    let i = 0;
    while (i < input.length) {
        if (i % 2 == 0) {
            firstBuffer.push(input[i]);
            i++;
        } else i++;
    }
};

function sumArray() {
  let n = 0;
  let secondBuffer = 0;
    while (n < firstBuffer.length) {
      secondBuffer += firstBuffer[n];
      console.log(secondBuffer);
      n++;
    } secondBuffer *= firstBuffer[firstBuffer.length - 1];
      console.log('finished ' + secondBuffer);
};

findEven();

sumArray();

console.log('finish');

// OR

var data = [0, 1, 2, 3, 4, 5];

let firstBuffer = [];

function findEven() {
    let i = 0;
    while (i < data.length) {
        if (i % 2 == 0) {
            firstBuffer.push(data[i]);
            i++;
        } else i++;
    }
};

function sumArray() {
  let n = 0;
  let secondBuffer = 0;
  if (data.length > 0) {
    while (n < firstBuffer.length) {
      secondBuffer += firstBuffer[n];
      console.log(secondBuffer);
      n++;
    } secondBuffer *= data[data.length - 1];
      console.log('finished ' + secondBuffer);
  } else secondBuffer = [];
};

findEven();

sumArray();
console.log(firstBuffer.length);
console.log('finish');


// TASK 'Between Markers'

function betweenMarkers(line, left, right) {
        
  let leftBreak = line.indexOf(left); 
  let rightBreak = line.indexOf(right); 

  return line.slice(leftBreak + 1, rightBreak); 

return ;

}; // end of code


betweenMarkers('What is [apple]', '[', ']');     //  'apple'
betweenMarkers('What is >apple<', '>', '<');     //  'apple'
betweenMarkers('What is ><', '>', '<');          //  ''
betweenMarkers('[an apple]', '[', ']');          //  'an apple'


// TASK 'Correct sentence'

function correctSentence(text) {
    
  let firstLetter = text[0];
  let lastLetter = text[text.length - 1];
  let finished = '';

  if (firstLetter === firstLetter.toUpperCase()) {
      finished = text; 
  } else finished = text[0].toUpperCase() + text.slice(1, ); 
  
  let finalString = '';

  if (lastLetter === '.') {
      finalString = finished;
  } else finalString = finished + '.';
  return finalString; //?
}; // end of code

correctSentence('greetings, friends');          //   , 'Greetings, friends.'
correctSentence('Greetings, friends');          //   , 'Greetings, friends.'
correctSentence('Greetings, friends.');          //  , 'Greetings, friends.'
