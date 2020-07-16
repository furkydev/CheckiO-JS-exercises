function backwardStringByWord(text) {

    let myArray = text.split(''); //?
        let backward = "";
        let revStr;
    if (text.length > 0) {
        for (let i = 0; i < myArray.length; i++) {
            revStr = myArray.reverse(); //?
            backward = revStr.join(''); //?
        } return revStr = backward.split(' ').reverse().join(' ');//?

    } else return text;
}; // end of code

// backwardStringByWord(''); // == ''
// backwardStringByWord('world'); // == 'dlrow'
// backwardStringByWord('hello world'); // == 'olleh dlrow'
backwardStringByWord('hello   world'); // == 'olleh   dlrow'