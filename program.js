(function() {
    // P(s, N) is number of integers n from 1 < n < N where Streak(n) = s;
    // P(3, 14) is number of integers n from 1 < n < 14 where Streak(n) = 3;
    // P(3, 14) = 1. So there is 1 integer from 1 < n < 14 where Streak(n) = 3;

    const RANGE_END = 31;
    const RANGE_START = 1;

    for (var i = RANGE_START; i <= RANGE_END; i++) {
        P(i, Math.pow(4, i), (sum) => {
            console.log(sum);
        });
    }

    function P(s, N, callback) {
        var sum = 0;
        for (var i = 2; i < N; i++) {
            Streak((k) => {
                if (k === s)
                    ++sum;
            }, i);
        };

        callback(sum);

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