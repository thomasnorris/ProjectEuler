(function() {
    const MIN_MULTIPLE = 2;
    const MAX_MULTIPLE = 6;

    var _int = 11;
    var _complete;

    Run(() => {
        console.log(_int);
    });

    function Run(callback) {
        while (!_complete) {
            var numFound = 0;
            for (var i = MIN_MULTIPLE; i <= MAX_MULTIPLE; i++) {
                CheckMultiple((found) => {
                    if (found)
                        ++numFound;
                    else
                        i = MAX_MULTIPLE + 1;
                }, _int, i);
            }

            _complete = numFound === MAX_MULTIPLE - 1;

            if (!_complete) {
                numFound = 0;
                ++_int;
            }
        }
        callback();
    }



    function CheckMultiple(callback, num, mul) {
        var mulArr = NumberToArray(num * mul);
        var numArr = NumberToArray(num);

        if (numArr.length !== mulArr.length)
            callback(false);

        var matches = [];
        matches = numArr.filter((el) => {
            return mulArr.indexOf(el) !== -1
        });

        callback(matches.length === mulArr.length);

        function NumberToArray(num) {
            return num.toString().split('').map((el) => {
                return parseInt(el);
            });
        }
    }
})();