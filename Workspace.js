function verifyAnagrams(line1, line2) {

    line1 = line1.replace(/\s+/g, ''); //?
    line2 = line2.replace(/\s+/g, ''); //?
    line1 = line1.toUpperCase(); //?
    line2 = line2.toUpperCase(); //?

    if (line1.length == line2.length) {

        let i = 0;
        while (i < line1.length) {
            let letterCompare = line1[i];
            //?

            let indexRemove = line2.indexOf(letterCompare);
            line2 = line2.replace(letterCompare, '');
            line1 = line1.replace(letterCompare, '');

            if (indexRemove >= 0) {
                continue;
            } else return false; //?

        }
        return true; //?
    } else return false;
}; // end of code

verifyAnagrams('Programming', 'Gram Ring Mop'); //, true);
verifyAnagrams('Hello', 'Ole Oh'); //, false);
verifyAnagrams('Kyoto', 'Tokyo'); //, true);