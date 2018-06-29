(function() {
    const ALPHABET_ARR = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
    const FILE_NAME = "names.txt";

    var nameArr = ReadFile(FILE_NAME);
    console.log('nameArr: ', nameArr);

    function ReadFile(file) {
        var arr = require('fs')
        .readFileSync(file, 'utf8')
        .split('","')
        .map((el) => {
            return el.replace(/"/, "").toLowerCase();
        });
        return arr.sort((a, b) => {
            if (a < b) return -1;
            if (a > b) return 1;
            return 0;
        });
    }
})();