(function() {
    // P(s, N) is number of integers n from 1 < n < N where Streak(n) = s;
    // P(3, 14) is number of integers n from 1 < n < 14 where Streak(n) = 3;
    // P(3, 14) = 1. So there is 1 integer from 1 < n < 14 where Streak(n) = 3;

    var results = [];
    for (var i = 2; i < 31; i++) {
        results.push(P(i, Math.pow(4, i)));
        console.log(results);
    }

    console.log(sum);

    function P(s, N) {
        var results = [];
        for (var i = 2; i < N; i++) {
            Streak((k) => {
                results.push(k);
            }, i);
        };
        results = results.filter((el) => {
            return el === s;
        });

        return results.length;

        function Streak(callback, n, divisor = 1, count = 0) {
            if (n % divisor !== 0)
                callback(count);
            else {
                ++n;
                ++divisor;
                ++count;
                Streak(callback, n, divisor, count);
            }
        }
    }
})();