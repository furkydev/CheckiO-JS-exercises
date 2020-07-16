function boolean(x, y, action) {

    if (action === 'conjunction') {
        if (x === y && x === 1 && y === 1) {
            return 1;
        } else return 0;
    } else if (action === 'disjunction') {
        if (x === y && x === 0 && y === 0) {
          return 0;
        } else return 1;

    } else if (action === 'implication') {
        if (x === 1 && y === 0) {
          return 0;
        } else return 1;

    } else if (action === 'exclusive') {
        if (x === y) {
          return 0;
        } else return 1;

    } else if (action === 'equivalence') {
        if (x === y) {
          return 1;
        } else return 0;
    };

}

boolean(0, 0, 'conjunction'); //, 0);
boolean(0, 1, 'conjunction'); //, 0);
boolean(1, 0, 'conjunction'); //, 0);
boolean(1, 1, 'conjunction'); //, 1);
boolean(0, 0, 'disjunction'); //, 0);
boolean(0, 1, 'disjunction'); //, 1);
boolean(1, 0, 'disjunction'); //, 1);
boolean(1, 1, 'disjunction'); //, 1);
boolean(1, 0, "conjunction"); // == 0
boolean(0, 1, "exclusive"); // == 1