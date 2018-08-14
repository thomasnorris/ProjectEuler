(function() {
    const BASE_COUNTS = {
        3: [1, 2, 6, 10],
        4: [4, 5, 9],
        5: [3, 7, 8, 40, 50, 60],
        6: [11, 12, 20, 30, 80, 90],
        7: [15, 16, 70],
        8: [13, 14, 18, 19],
        9: [17],
        10: [100],
        11: [1000]
    }

    const NUM_SUM = 100;
    var sum = 0;

    for (var i = 1; i <= NUM_SUM; i++) {
        if (GetLength(i) != '')
            console.log(i);
        else
            Split(i, (pieces) => {
                console.log(pieces);
            });
    }

    function Split(num, callback, pieces = []) {
        var modulo;
        num.toString().length == 2 ? modulo = 10 : modulo = 100;

        var round = Math.floor(num / modulo) * modulo;
        var remainder = num - round;
        if (round != 0)
            pieces.push(round);
        if (GetLength(remainder) == '')
            Split(remainder, callback, pieces)
        else {
            pieces.push(remainder);
            callback(pieces);
        }
    }

    function GetLength(num) {
        return Object.keys(BASE_COUNTS).filter((key) => {
            return BASE_COUNTS[key].includes(num);
        }).toString();
    }

})();