// First Word
function snake(a) {
  let end = a.indexOf(' ');  //?
    if (end >= 0) {
      let space = a.slice(0, end); //?
      return space;
      } else return a; //?
};


snake("Hello world"); //, "Hello");
snake("a word"); //, "a");
snake("hi"); //, "hi");



// Multiply digits from array and omit zero

const myArray = [4, 5, 0, 9, 1, 15, 5, 4, 2, 0];
let firstBuffer = [];

function isZero(){
 
  let i = 0;
  while (i <= myArray.length) {
      if (myArray[i] > 0){
      firstBuffer.push(myArray[i])
      i++;
    } else i++;
  } 
};

isZero();

console.log(firstBuffer);

let secondBuffer = firstBuffer[0];

function multiplyNumbers() {
  let n = 1;
  while (n < firstBuffer.length) {
   secondBuffer *= firstBuffer[n];
    n++;
  };
};

multiplyNumbers();

console.log(secondBuffer);


// TASK 'Secret Message'
// You're given a chunk of text. Gather all capital letters into one word in order that they appear
// input: text as a string
// output: single message as a string or an empty string
// 0 < len(text) <= 1000 & all(ch in string.printable for ch in text)

const text = "Home Is where your Toes hit the furniture. LoL";
var sL = text.length;
var i = 0;
for (; i< sL; i++){
  if (text.charAt(i) === text.charAt(i).toUpperCase()) {
    console.log('uppercase: ', text.charAt(i));
  }
};

console.log(text);

// TASK ' Second Index'
// You're given two strings, find an index of the second occurrence of the second string in the first one.
// eg. findOccu("sims", "s") == 3
// output: Int or Undefined


function secondIndex(text, symbol) {
  if (text.indexOf(symbol) >= 0) {
      var startSlice = text.indexOf(symbol);
      let slicedWord = text.slice(startSlice + 1, );
      var finalNumber = slicedWord.indexOf(symbol);
   if (finalNumber >= 0) {
        return finalNumber + startSlice + 1;
   }  return null;
  } return null;
};

secondIndex('sims', 's');

// TASK 'Count Inversion'
// Check out this example sequence: (1, 2, 5, 3, 4, 7, 6) 
// and we can see here three inversions
// 5 and 3;  5 and 4; 7 and 6.
// You are given a sequence of unique numbers and you should count the number of inversions in this sequence.

function countInversion(sequence){

  let counter = 0;
  let i = 0;
    
    while (i < sequence.length) {
      let j = i + 1;
      while (j < sequence.length) {
         
        if (sequence[i] > sequence[j]) { // jeżeli inwersja 
          counter++;
          j++;
        } else j++; 
      } i++;
   } return counter;



}; // koniec funkcji





countInversion([1, 2, 5, 3, 4, 7, 6]);     // 3, "Example"); length = 7
countInversion([0, 1, 2, 3]);              // 0, "Sorted"); length = 4
countInversion([99, -99]);                 // 1, "Two numbers"); length = 2
countInversion([5, 3, 2, 1, 0]);           // 10, "Reversed"); length = 5