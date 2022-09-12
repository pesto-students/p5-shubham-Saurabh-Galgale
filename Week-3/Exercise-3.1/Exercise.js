// memoize function to remember previous calculations


function memoize(fn) {
    const cache = new Map();
    return function (...args) {
        args.sort();
        if (cache.has(JSON.stringify(args))) {
            console.log("in cache");
            return cache.get(JSON.stringify(args));
        }
        const result = fn(...args);
        cache.set(JSON.stringify(args), fn(...args));
        console.log(cache);
        return result;
    }
}

function add() {
    let sum = 0;
    for (let i = 0; i < arguments.length; i++) {
        sum += arguments[i];
    }
    return sum;
}

const fnMem = memoize(add);


console.time();
console.log(fnMem(2, 3, 4, 5, 6));
console.timeEnd();

console.time();
console.log(fnMem(6, 5, 4, 3, 2));
console.timeEnd();

console.time();
console.log(fnMem(2, 6, 3, 5, 4));
console.timeEnd();

console.time();
console.log(fnMem(2, 3));
console.timeEnd();

console.time();
console.log(fnMem(2, 3));
console.timeEnd();