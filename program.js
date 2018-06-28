(function() {
    // P(s, N) is number of integers n from 1 < n < N where Streak(n) = s;
    // P(3, 14) is number of integers n from 1 < n < 14 where Streak(n) = 3;
    // P(3, 14) = 1. So there is 1 integer from 1 < n < 14 where Streak(n) = 3;

    var sum = 0;
    for (var i = 1; i <= 31; i++) {
        sum += P(i, Math.pow(4, i));
        console.log('Sum after s = ' + i + ': ' + sum);
    }

    function P(s, N) {
        var results = 0;
        for (var i = 2; i < N; i++) {
            Streak((k) => {
                if (k === s)
                    ++results;
            }, i);
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