(function() {
    const MAX_THREE_DIGID_NUM = 999;

    var multiples = [];
    for (var i = 1; i <= MAX_THREE_DIGID_NUM; i++) {
        for (var j = 1; j <= MAX_THREE_DIGID_NUM; j++) {
            multiples.push(i * j);
        }
    }

    multiples = multiples.filter((el) => {
        el = el.toString();
        return el === el.split('').reverse().join(''); 
    }).sort((a, b) => {
        return a - b;
    });

    console.log('The largest palindromic number made from the product of two 3-digit numbers is: ' + multiples[multiples.length - 1]);
})();