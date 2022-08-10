const sum(a, b, c, d, e, f) => {
    if (sum(a, b)) {
        return a + b;
        console.log(sum(a, b));
    } else if (sum(a, b, c)) {
        return a + b + c;
        console.log(a + b + c);
    } else if (sum(a, b, c, d)) {
        return a + b + c + d;
        console.log(sum(a + b + c + d));
    } else if (sum(a, b, c, d, e)) {
        return a + b + c + d + e;
        console.log(a + b + c + d + e);
    } else {
        console.log('maaf error')
    }


};
console.log(sum);
sum(1, 2, 7);
sum(1, 4);
sum(11);
sum(10, 3, 6, 7, 9);
sum(4, 5, 6, 7, 8, 8, 3, 3, 4)