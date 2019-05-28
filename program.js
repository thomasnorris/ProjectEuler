(function() {
    const MAX = Math.pow(10, 6);
    var sum = 0;

    for (var i = 1; i <= MAX; ++i) {
        if (IsPalindromic(i) && IsPalindromic(ConvertToBinaryStr(i)))
            sum += i;
    }

    console.log("The sum of all numbers that are palindromic in base 10 and 2 up to " + MAX + " is: " + sum);

    function IsPalindromic(n) {
        var arr = n.toString().split('');
        var rev = arr.slice().reverse();

        if (arr.length !== rev.length)
                return false;

        for (var i = 0; i < arr.length; ++i)
            if (arr[i] !== rev[i])
                return false;

        return true;
    }

    function ConvertToBinaryStr(n) {
        return (n >>> 0).toString(2);
    }
})();