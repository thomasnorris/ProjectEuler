(function() {
    var MAX = 10000000;
    var _counter = 0;

    for (var i = 1; i < MAX; i++) {
        Calc(i);
    }

    console.log(_counter);

    function Calc(num) {
        if (num === 1 || num === 89) {
            if (num === 89)
                ++_counter;
            return;
        }

        num = num.toString().split('');
        var sum = 0;
        for (var i = 0; i < num.length; i++) {
            sum += Math.pow(parseInt(num[i]), 2);
        }

        Calc(sum);
    }
})();