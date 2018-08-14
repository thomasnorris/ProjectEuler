(function() {
    const BASE_COUNTS = {
        3: [1, 2, 6, 10],
        4: [4, 5, 9],
        5: [3, 7, 8, 40, 50, 60],
        6: [11, 12, 20, 30, 80, 90],
        7: [15, 16, 70, 100], // 100 = 'hundred'
        8: [13, 14, 18, 19, 1000], // 1000 = 'thousand'
        9: [17]
    };

    // must be <= 1000 for proper functionality
    const NUM_SUM = 1000;
    var sum = 0;

    BreakIntoPieces(342, (p) => {
        console.log(p);
    });
    // for (var i = 1; i <= NUM_SUM; i++) {
    //     BreakIntoPieces(i, (pieces) => {
    //         console.log(pieces);
    //     });
    // }

    function BreakIntoPieces(num, callback, pieces = []) {
        var modulo;
        var mod10 = 10;
        var mod100 = 100;
        num.toString().length == 2 ? modulo = mod10 : modulo = mod100;

        var round = Math.floor(num / modulo) * modulo;
        var remainder = num - round;

        // if a single digit num OR the remainder is a multiple of the modulo
        if (round != 0 || remainder == 0) {
            if (modulo == mod100) {
                pieces.push(round / modulo);
                pieces.push(modulo);
            } else {
                pieces.push(round);
            }

            // if a hundred and x; eg: one two hundred and one
            if (modulo == mod100 && remainder != 0)
                // 'and' keyword; eg: one hundred and twenty three
                pieces.push('and');
        }

        // if the number isn't found in BASE_COUNTS AND there is a remainder
        // split up the remainder
        if (GetLength(remainder) == '' && remainder != 0) {
            BreakIntoPieces(remainder, callback, pieces)
        } else {
            if (remainder != 0)
                pieces.push(remainder);
            // callback
            callback(pieces);
        }

        function GetLength(num) {
            return Object.keys(BASE_COUNTS).filter((key) => {
                return BASE_COUNTS[key].includes(num);
            }).toString();
        }
    }
})();