(function() {
    const BELOW = Math.pow(10, 6) * 2;

    var primes = getPrimes(BELOW);
    var sum = sumPrimes(primes);

    console.log("The sum of all primes from 2 to " + BELOW + " is: " + sum);

    function getPrimes(max) {
        var sieve = [], i, j, primes = [];
        for (i = 2; i <= max; ++i) {
            if (!sieve[i]) {
                // i has not been marked -- it is prime
                primes.push(i);
                for (j = i << 1; j <= max; j += i) {
                    sieve[j] = true;
                }
            }
        }
        return primes;
    }

    function sumPrimes(primes) {
        var sum = 0;
        for (var i = 0; i < primes.length; ++i)
            sum += primes[i];

        return sum;
    }
})();