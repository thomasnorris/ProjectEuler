(function() {
    const N = 600851475143;

    var factors = PrimeFactorize(N);
    console.log("The largest prime factor of \"" + N + "\" is: " + factors[factors.length - 1]);


    function PrimeFactorize(n) {
        var factors = [];
        while (n % 2 === 0) {
            factors.push(2);
            n /= 2;
        }

        for (var i = 3; i <= Math.sqrt(n); i += 2) {
            while (n % i === 0) {
                factors.push(i);
                n /= i;
            }
        }

        if (n > 2)
            factors.push(n);

        // Remove duplicates from factors
        return factors.filter((v, i, a) => {
            return a.indexOf(v) === i;
        });
    }
})();