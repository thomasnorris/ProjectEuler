(function() {
    // P(s, N) is number of integers n from 1 < n < N where Streak(n) = s;
    // P(3, 14) is number of integers n from 1 < n < 14 where Streak(n) = 3;
    // P(3, 14) = 1. So there is 1 integer from 1 < n < 14 where Streak(n) = 3;

    function P(s, N) {
        for (var i = 2; i < N; i++) {
            Streak((k) => {

            }, i);
        }
    }

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
})();