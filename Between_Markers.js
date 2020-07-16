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