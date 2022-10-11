var sorting = function (arr) {

    let one = 0,
        zero = 0,
        two = 0;

    for (let num of arr) {
        if (num == 0) {
            zero++;
        } else if (num == 1) {
            one++;
        } else {
            two++;
        }
    }
    arr.length = 0;

    for (let i = 0; i < zero; i++) {
        arr.push(0);
    }
    for (let i = 0; i < one; i++) {
        arr.push(1);
    }
    for (let i = 0; i < two; i++) {
        arr.push(2);
    }

    return arr;
};

console.log(sorting([2, 2, 1, 1, 1, 0]));
