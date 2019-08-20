(function() {
    const SUM = 1000;

    for (var a = 1; a <= SUM; ++a)
        for (var b = 1; b <= SUM; ++b) {
            var c = FindTriplet(a, b);
            if (c && a + b + c === SUM)
                console.log(a*b*c);
        }

    function FindTriplet(a, b) {
        var c = Math.sqrt(Square(a) + Square(b));
        if (Number.isInteger(c))
            return c;

            return false;

        function Square(x) {
            return Math.pow(x, 2);
        }
    }
})();