(function() {
    var multiples = [];
    for (var i = 1; i <= 99; i++) {
        for (var j = 1; j <= 99; j++) {
            multiples.push(i * j);
        }
    }

    multiples = multiples.filter((el) => {
        el = el.toString();
        return el === el.split('').reverse().join(''); 
    });

    console.log(multiples[multiples.length - 1]);
})();