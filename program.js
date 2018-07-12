(function() {

    var nums = [1, 10, 100, 1000, 10000, 100000, 1000000];
    var ans = 1;

    nums.forEach((n) => {
        GenerateNum(n, (num) => {
            ans *= num;
        });
    });

    console.log(ans);

    function GenerateNum(endNum, callback) {
        var num = '0';
        for (var i = 1; i <= endNum; i++) {
            num += i.toString();
        }
        callback(num[endNum]);
    }
})();