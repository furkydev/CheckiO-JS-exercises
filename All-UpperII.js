function isAllUpper(text) {
    let newText = text.trim();
    if (isNaN(parseInt(newText)) == false) {
      return false;
    } else 
    if (newText.length > 0) {
        for (let i=0; i < newText.length; i++) {
            
          if (newText[i] == newText[i].toUpperCase()) {
                continue;
            } else return false; //?
        } return true; //?
    } else return false; //?
}; // end of code


isAllUpper('ALL UPPER'); // == true 
isAllUpper('all lower'); // == false
isAllUpper('mixed UPPER and lower'); // == false
isAllUpper(''); // == false
isAllUpper('Hi'); // == false
isAllUpper('     '); // == false
isAllUpper('123'); // false