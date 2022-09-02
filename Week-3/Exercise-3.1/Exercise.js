// memoize function to remember previous calculations


function memoize(fn) {
    const cache = new Map();
    return function (...args) {
        if (cache.has(args)) {
            return cache.get(args);
        }
        cache.set(args, fn(...args));
        return cache.get(args);
    }
}

const add = (a, b) => a + b;

const fnMem = memoize(add);


console.time();
console.log(fnMem(2, 3));
console.timeEnd();

console.time();
console.log(fnMem(3, 100));
console.timeEnd();

console.time();
console.log(fnMem(3, 3));
console.timeEnd();

console.time();
console.log(fnMem(2, 3));
console.timeEnd();

console.time();
console.log(fnMem(2, 3));
console.timeEnd();