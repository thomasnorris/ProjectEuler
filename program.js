(function() {
    const NTH_PRIME = 10001;

    var i = 2;
    var curr_prime = NTH_PRIME;
    while (curr_prime) {
        if (isPrime(i))
            --curr_prime;
        ++i;
    }

    console.log("The " + NTH_PRIME + " prime number is: " + --i);

    function isPrime(x) {
        for (var i = 2; i < x; ++i)
            if (x % i === 0)
                return false;

        return x > 1;
    }
})();