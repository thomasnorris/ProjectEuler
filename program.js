(function() {
    const MAX = 100;
    var sumOfSquares = 0;
    var squareOfSums = 0;

    for (var i = 1; i <= MAX; ++i) {
        sumOfSquares += Math.pow(i, 2);
        squareOfSums += i;
    }

    console.log(Math.pow(squareOfSums, 2) - sumOfSquares);
})();