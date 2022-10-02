function pairDifference(array, x) {
    let hash = {};
    for (let i = 0; i < array.length; i++) {
        hash[array[i]] = array[i];
    }

    for (let i = 0; i < array.length; i++) {
        if (hash[x + array[i]]) {
            return true;
        }
    }
    return false;
}
    console.log(pairDifference([10, 20, 0, 50], 20));



// code from sunday instructor session-----------------------------------------------------------------------------

// function pairDiff(array, n) {
//     let Arr = new Set(array);
//     for(let i = 0; i < array.length; i++) {
//         if(Arr.has(n + array[i])) {
//             console.log(`${n+array[i]}`);
//             return 1;
//         }
//     }
//     return 0;
// }
// console.log(pairDiff([30, 10, 45, 15], 20));
