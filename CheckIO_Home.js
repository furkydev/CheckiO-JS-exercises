//  TASK 'Sum Numbers' NOT SOLVED
/*  In a given text you need to sum the numbers. Only separated numbers should be counted. If a number is part of a word it shouldn't be counted.
    The text consists from numbers, spaces and english letters
    Input: A string.
    Output: An int.
*/
function sumNumbers(test) {
    if (test.length > 0) {
        let array = test.split(' ');
        let i = 0;
        let counter = 0;
        
        while (i < array.length) {
          let jajebie = array[i]
          console.log(i + ' ' + jajebie)
            if (isNaN(jajebie)) {
                i++;
            } else if (jajebie.length !== 0 ) {
                counter += parseInt(jajebie);
                i++;
            } else return counter;
        }
        return counter; //?



    } else return 0; //?
}; // end of code


sumNumbers('hi'); // == 0
sumNumbers('who is 1st here'); // == 0
sumNumbers('my numbers is 2'); // == 2
sumNumbers('This picture is an oil on canvas ' + 'painting by Danish artist Anna ' + 'Petersen between 1845 and 1910 year'); // == 3755
sumNumbers('5 plus 6 is'); // == 11
sumNumbers(''); // == 0
sumNumbers("It is the natural number following 4 and preceding 6  and is a prime number"); // 10



// TASK 'Count Digits'

function countDigits(text) {
    let counter = 0;
    if (text.length > 0) {
        let i = 0;
        while (i < text.length) {
            let buffer = parseInt(text[i]);
            if (isNaN(buffer)) { // JEZELI NIE JEST NUMEREM
                i++;
            } else i++, counter++;

        }
        return counter; 


    } else return counter; 

}; // end of code



countDigits('hi'); // == 0
countDigits('who is 1st here'); // == 1
countDigits('my numbers is 2'); // == 1
countDigits('This picture is an oil on canvas ' + 'painting by Danish artist Anna ' + 'Petersen between 1845 and 1910 year'); // == 8
countDigits('5 plus 6 is'); // == 2
countDigits(''); // == 0


// TASK 'Three words'

function threeWords(text) {


    let isWhitespace = text.indexOf(' '); //?

    if (isWhitespace != -1) {
        let buffer = text.split(' '); //?
        let i = 0;
        let counter = 0;

        while (i <= buffer.length - 1) {
            let newBuffer = parseInt(buffer[i]); //?
            isNaN(newBuffer); //?
            if (counter >= 3) {
              break;
            } else if (isNaN(newBuffer)) {
                i++;
                counter++; //?
            } else {
                counter = 0;
                i++;
              
            } console.log(counter);
        }

        if (counter >= 3) {
            return true; //?
        } else return false; //?

    } else return false; //?


}; // end of code



threeWords("Hello World hello"); // == True
threeWords("He is 123 man"); // == False
threeWords("1 2 3 4"); // == False
threeWords("bla bla bla bla"); // == True
threeWords("Hi"); // == False


// TASK 'Bigger Price'
function biggerPrice(limit, data) {
    // create array with prices
    let i = 0;
    let newArray = [];

    while (i < data.length) {
        let value = data[i].price;

        newArray.push(value);
        i++
    };
    newArray
    // find max values in array

    let n = 0;
    let maxValue = Math.max.apply(null, newArray); // This Finds biggest value in array
    let maxArray = [];

    for (let n = 0; n < limit; n++) {
        let maxIndex = newArray.indexOf(maxValue);
        maxArray.push(maxValue);
        if (newArray[maxIndex] === 5) {
            newArray.splice(i, 1);
        }
    }
    // while (n < limit) {
    //     maxArray.push(maxValue);

    //     let maxIndex = newArray.indexOf(maxValue);
    //     newArray = newArray.splice(maxIndex); //?
    //     n++;

    // }
    return maxArray; //? 

}; // end of code




biggerPrice(2, [{
        "name": "bread",
        "price": 100
    },
    {
        "name": "wine",
        "price": 138
    },
    {
        "name": "meat",
        "price": 15
    },
    {
        "name": "water",
        "price": 1
    }
]); // == [
//{"name": "wine", "price": 138},
//{"name": "bread", "price": 100}
//]

// biggerPrice(1, [
//     {"name": "pen", "price": 5},
//     {"name": "whiteboard", "price": 170}
// ]); // == [{"name": "whiteboard", "price": 170}]


// TASK 'Split Array'

function splitList(values) {
    let newArray = [];
    let secondHalf = [];
    let final = [newArray, secondHalf];
    if (values.length > 0) {

        // if even length
        if (values.length % 2 == 0) {
            let separator = values.length / 2;
            final[0] = (values.slice(0, separator)); //?
            for (let i = separator; i < values.length; i++) {
                secondHalf.push(values[i]);
            }
            return final; //?
        } else if (values.length % 2 == 1) {
            let separator = Math.ceil(values.length / 2);
            final[0] = (values.slice(0, separator)); //?
            for (let i = separator; i < values.length; i++) {
                secondHalf.push(values[i]);
            }
             return final; //?

        };


    } else return final; //?
}; // end of code



splitList([1, 2, 3, 4, 5, 6]); //, [[1, 2, 3], [4, 5, 6]]);
splitList([1, 2, 3]); //, [[1, 2], [3]]);
splitList([1, 2, 3, 4, 5]); //, [[1, 2, 3], [4, 5]]);
splitList([1]); //, [[1], []]);
splitList([]); //, [[], []]);

// TASK 'All the same'
function allTheSame(elements){

    for (let i = 0; i < elements.length - 1; i++) {
        if (elements[i] == elements[i+1]) {
            i++;
        } else return false; //?
    } return true; //?

}




allTheSame([1, 1, 1]); //, true)
allTheSame([1, 2, 1]); //, false)
allTheSame(['a', 'a', 'a']); //, true)
allTheSame([]); //, true)
allTheSame([1]); //, true)

// Task 'Ascending List'

function isAscending(values) {

    if (values.length > 1) {
        for (let i = 0; i < values.length - 1; i++) {

            if (values[i] < values[i + 1]) {
                
            } else return false; //?

        } return true; //?
    } else return true; //?
};


isAscending([-5, 10, 99, 123456]); //, true);
isAscending([99]); //, true);
isAscending([4, 5, 6, 7, 3, 7, 9]); //, false);
isAscending([]); //, true);
isAscending([1, 1, 1, 1]); //, false);
isAscending([1, 2, 3]); // true;