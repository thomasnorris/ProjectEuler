(function() {
    const UP_TO = 20;
    var _num = 2520;

    var found = false;
    while (!found) {
        for (var j = 1; j <= UP_TO; ++j) {
            if (_num % j !== 0) {
                ++_num;
                break;
            }
            if (j === UP_TO)
                found = true;
        }
    }

    console.log("The smallest number that can evenly divide all numbers between 1 and " + UP_TO + " is: " + _num);
})();