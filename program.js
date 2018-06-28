(function() {
    // P(s, N) is number of integers n from 1 < n < N where Streak(n) = s;
    // P(3, 14) is number of integers n from 1 < n < 14 where Streak(n) = 3;
    // P(3, 14) = 1. So there is 1 integer from 1 < n < 14 where Streak(n) = 3;

    var sum = 0;
    for (var n = 1; n <= 31; n++) {
        sum += P(n, Math.pow(4, n));
    }
    console.log('The total sum is: ' + sum);

    function P(s, N) {
        var results = 0;
        for (var n = 2; n < N; n++) {
            Streak((k) => {
                if (k === s)
                    ++results;
            }, n);
        };

        return results;

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