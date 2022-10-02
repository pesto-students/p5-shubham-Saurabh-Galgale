function sorting(array) {
    let obj = {};
    let sortedArr = [];
    for(let i = 0; i < array.length; i++) {
        if(!obj[array[i]]) {
            obj[array[i]] = 1;
        }else {
            obj[array[i]]++;
        }
    }

    for(let key in obj) {
        sortedArr.push(parseInt(key));
    }
    return sortedArr;
}

console.log(sorting([2, 2, 1, 1, 0]));


