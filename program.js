(function() {

    var smooths = [];
    var upTo = 10000000000;

    for (var i = 1; i <= upTo; ++i) {
        IsSmooth(i, (yes) => {
            if (yes)
                smooths.push(i);
        })
    }

    console.log(smooths.length);

    function IsSmooth(n, callback) {
        PrimeFactorize(n, (factors) => {
            var lessThan = factors.filter((el) => {
                return el < Math.sqrt(n);
            });

            callback(ArrEqual(factors, lessThan));
        });
    }

    function ArrEqual(arr1, arr2) {
        if (arr1.length !== arr2.length)
            return false;
        for (var i = 0; i < arr1.length; ++i) {
            if (arr1[i] !== arr2[i])
                return false;
        }

        return true;
    }

    function PrimeFactorize(n, callback) {
        var arr = [];

        while (n % 2 == 0) {
            arr.push(2);
            n /= 2;
        }

        for (var i = 3; i <= Math.sqrt(n); i += 2) {
            while (n % i == 0) {
                arr.push(i);
                n /= i;
            }
        }

        if (n > 2)
            arr.push(n);

        arr = Array.from(new Set(arr));

        callback(arr);
    }
})();