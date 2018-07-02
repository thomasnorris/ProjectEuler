(function() {
    const ALPHABET_ARR = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
    const FILE_NAME = "names.txt";

    var nameArr = ReadFile(FILE_NAME);
    var _score = 0;

    for (var i = 0; i < nameArr.length; i++) {
        var name = nameArr[i].split('');
        var score = 0;
        name.forEach((letter) => {
            score += ALPHABET_ARR.indexOf(letter) + 1;
        });
        _score += score * (i + 1);
    }

    console.log('The total of all name scores in the file is: ' + _score);

    function ReadFile(file) {
        var arr = require('fs')
        .readFileSync(file, 'utf8')
        .split('","')
        .map((el) => {
            return el.replace(/"/, "").toUpperCase();
        });
        return arr.sort((a, b) => {
            if (a < b) return -1;
            if (a > b) return 1;
            return 0;
        });
    }
})();