(function() {

    const N = Math.pow(10, 5);
    const K = Math.pow(10, 4);

    var _arr = [];

    for (var i = 1; i <= N; ++i)
        _arr.push([i, Rad(i)]);

    _arr.sort((a, b) => {
        if (a[1] === b[1])
            return a[0] - b[0]
        return a[1] - b[1];
    });

    console.log(E(K));

    function E(k) {
        return _arr[--k][0];
    }

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