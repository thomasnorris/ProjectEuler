(function() {

    console.log(Rad(504));

    function Rad(n) {
        var rad = 1;
        FindDistinctPrimes(n).forEach((prime) => {
            rad *= prime;
        });

        return rad;
    }

    function FindDistinctPrimes(n) {
        var factors = [];
        while (n % 2 === 0)
            CheckAndPush(2);

        for (var i = 3; i <= Math.sqrt(n); ++i) {
            while (n % i === 0)
                CheckAndPush(i);
        }

        if (n > 2)
            factors.push(n);

        return factors;

        function CheckAndPush(a) {
            if (factors.indexOf(a) === -1)
                factors.push(a);
            n /= a;
        }
    }
})();