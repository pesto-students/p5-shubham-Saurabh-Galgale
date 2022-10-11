const fib = (n) => ({
    [Symbol.iterator]: () => { // becomes itorable fn.
        let i = 1;
        let old = 0, new1 = 0;
        return { // [symbol.iterator] must return atleast next method.
            next: () => {
                if(i++ <= n) {
                    [old, new1] = [new1, (old + new1) || 1];
                    return {value: old, done: false} // should return in this format.
                }
                else {
                    return {done: true} // true stops the itorator.
                }
            }
        }
    }
});


for (const element of fib(20)) {
    console.log(element);
}


