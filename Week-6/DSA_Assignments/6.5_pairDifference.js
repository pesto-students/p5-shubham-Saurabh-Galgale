function pairDiff(array, n) {
    let Arr = new Set(array);
    for(let i = 0; i < array.length; i++) {
        if(Arr.has(n + array[i])) {
            console.log(`${n+array[i]}`);
            return 1;
        }
    }
    return 0;
}
console.log(pairDiff([30, 10, 45, 15], 20));
