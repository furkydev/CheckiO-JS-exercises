// TASK 'Easy unpack'
// You get an array
// return an array with 1st, 3rd and 2nd to last element

function easyUnpack(values) {
    let  arrayLength = values.length;
    let newArray = [];
    newArray.push(values[0]);
    newArray.push(values[2]);
    newArray.push(values[arrayLength - 2]);
return newArray;
};


easyUnpack([1, 2, 3, 4, 5, 6, 7, 9]);     // [1, 3, 7]
easyUnpack([1, 1, 1, 1]);                 // [1, 1, 1]
easyUnpack([6, 3, 7]);                    // [6, 7, 3]

function firstWord(a) {
       
    let firstWord = a.split(' ');
    return firstWord[0];
};

firstWord("Hello");

// TASK 'Password Length 6'

function isAcceptablePassword(password) {
  
    if (password.length <= 6) {
        return false;
    } else return true;

};


isAcceptablePassword('short'); 
isAcceptablePassword('muchlonger');
isAcceptablePassword('ashort');


// Task "how many digits" in a number

function numberLength(value) {
    let stringValue = value.toString();
      return stringValue.length;
};


numberLength(10); //, 2);
numberLength(0); //, 1);
numberLength(4); //, 1);
numberLength(44); //, 2);

// Task 'count zeros at the end of number'

function endZeros(value) {
    let counter = 0;
    let stringValue = value.toString();
    let i = 1;
  
    while (stringValue[stringValue.length - i] == 0) {
     // console.log('loop start ' + i);
        counter++;
        i++;
    } return counter;
   };

endZeros(0); //, 1);
endZeros(1); //, 0);
endZeros(10); //, 1);
endZeros(101); //, 0);
endZeros(245); //, 0);
endZeros(100100); //, 2);


// Task 'Reverse the string'

function backwardString(value) {

    let i = 1;
    let myString = [];
    while (i <= value.length) {
          let lastIndex = value[value.length - i];
            myString.push(lastIndex);
            i++;
        } return myString.join('');
  };
    
  backwardString([0,1,2,3,4,5]);
  backwardString('val');              // 'lav'
  backwardString('');                 // ''
  backwardString('ohho');             // 'ohho'
  backwardString('123456789');        // '987654321'

  // Task "Remove all before"
  // remove all the items from the array before the given number

  function removeAllBefore(values, b) {
        let finalArr = [];
        let slicing = values.indexOf(b);
      
        if (slicing < 0) {
          return values;
        } else if (values.length == 0) {
            return [];
        } else if (slicing == 0) {
          return values;
        } else if (slicing > 0) {
          finalArr = values.slice(slicing, );
        // console.log('here');
        } return finalArr;
     
   return finalArr;
      
 }; // end of code
    
    
    
    removeAllBefore([1, 2, 3, 4, 5], 3);                   // [3, 4, 5]
    removeAllBefore([1, 1, 2, 2, 3, 3], 2);                // [2, 2, 3, 3]
    removeAllBefore([1, 1, 2, 4, 2, 3, 4], 2);             // [2, 4, 2, 3, 4]
    removeAllBefore([1, 1, 5, 6, 7], 2);                   // [1, 1, 5, 6, 7]
    removeAllBefore([], 0);                                // []
    removeAllBefore([7, 7, 7, 7, 7, 7, 7, 7, 7], 7);       // [7, 7, 7, 7, 7, 7, 7, 7, 7]


// TASK 'Check if upperCase'

function isAllUpper(text) {
  if (text == text.toUpperCase()) {
    return true;
  } 
      return false;
}; // end of code


isAllUpper('ALL UPPER');                 // true
isAllUpper('all lower');                 // false
isAllUpper('mixed UPPER and lower');     // false
isAllUpper('');                          // true

// TASK 'Replace First

function replaceFirst(values) {
  // your code here
  return undefined;



}; // end of code

replaceFirst([1, 2, 3, 4]);   // [2, 3, 4, 1]
replaceFirst([1]);            // [1]
replaceFirst([]);             // []

// Task 'Max digit' from a number

function maxDigit(value) {
  let valueStr = value.toString();
  console.log(valueStr);
  let maxNumb = valueStr[0];

  if (valueStr.length == 1) {
    return parseInt(maxNumb);
  } else 
    for (let i=1; i < valueStr.length; i++) {
    if (valueStr[i] >= maxNumb) {
      maxNumb = valueStr[i];
      // console.log('here' + maxNumb);
      } else i++;
  } return parseInt(maxNumb);  

}; // end of code


maxDigit(0); //, 0);
maxDigit(52); //, 5);
maxDigit(634); //, 6);
maxDigit(1); //, 1);
maxDigit(10000); //, 1);

// TASK 'Group in pairs'

function splitPairs(text) {
  let myArr = [];
  if (text.length % 2 == 0) {      // even length
    for ( let i = 0; i < text.length; i + 2) {
      let pair = text[i] + text[i+1];
      myArr.push(pair);
      i += 2;
    } return myArr;
  } else {                        // odd length
  for ( let i = 0; i < text.length - 1; i + 2) {
      let pair = text[i] + text[i+1];
      myArr.push(pair);
      i += 2;
    } myArr.push(text[text.length-1] + '_');
    return myArr;
  };

return;


}; // end of code


splitPairs('abcd');         // ['ab', 'cd']
splitPairs('abc');          // ['ab', 'c_']
splitPairs('abcdf');        // ['ab', 'cd', 'f_']
splitPairs('a');            // ['a_']
splitPairs('');             // []

// Task'Zero Digits'
//Find how many zeroes at the beggining of a string

function beginningZeros(text) {
  let counter = 0;
  let i = 0;
while (i < text.length) {
let textIndex = parseInt(text[i]);

if (textIndex == 0) {
counter++;
i++;
} else return counter;
} return counter;


}; // end of code


beginningZeros('100');           // 0
beginningZeros('001');           // 2
beginningZeros('100100');        // 0
beginningZeros('001001');        // 2
beginningZeros('012345679');     // 1
beginningZeros('0000');          // 4





// TASK 'Find the nearest'




function nearestValue(values, search) {
  
  //console.log(values.indexOf(search));  // -1 if doesn't exist
  let numArray = values;
  // let index = numArray.indexOf(search);  // index if exists
  //console.log('START')
  
  if (values.indexOf(search) < 0) {    // if -1
    numArray.push(search);
    numArray = values.sort((a, b) => a - b); // SORTING lol

    let index = numArray.indexOf(search);
    
    let diffLeft = numArray[index] - numArray[index-1]; // dist to left
    //console.log(diffLeft + ' diffLeft');
    
    let diffRight = numArray[index+1] - numArray[index]; // dist to right
    // console.log(diffRight + ' diffRight');

   if (diffLeft <= diffRight) {
        return numArray[index-1];
      }   else if ( index == numArray.length - 1) {
        return numArray[index-1];
                   } return numArray[index+1];
  
   } return search;          
  
}; // end of code

nearestValue([4, 7, 10, 11, 12, 17], 9);   // 10
nearestValue([4, 7, 10, 11, 12, 17], 8);   // 7
nearestValue([4, 8, 10, 11, 12, 17], 9);   // 8
nearestValue([4, 9, 10, 11, 12, 17], 9);   // 9
nearestValue([4, 7, 10, 11, 12, 17], 0);   // 4
nearestValue([4, 7, 10, 11, 12, 17], 100); // 17
nearestValue([5, 10, 8, 12, 89, 100], 7);  // 8
nearestValue([-1, 2, 3], 0);               // -1




