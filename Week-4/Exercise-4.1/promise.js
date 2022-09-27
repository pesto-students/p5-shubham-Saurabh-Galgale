
function MyPromise(executor) {
    let isPending = true;
    let isFulfilled = false;
    let isRejected = false;
    let value;
    let error;

    try {
        executor(resolve, reject);
    } catch (e) {
        throw (e);
    }

    function resolve(val) {
        isFulfilled = true;
        value = val;
    }

    function reject(err) {
        isRejected = true;
        error = err;
    }

    this.then = function (thenHandler, catchHandler) {
        if (isFulfilled && isPending) {
            thenHandler(value);
            isPending = false;
        } else if (isPending && isRejected) {
            if (catchHandler) {
                catchHandler(error);
                isPending = false;
            }
        }
        return this;
    };

    this.catch = function (catchHandler) {
        if (isRejected && isPending) {
            catchHandler(error);
            isPending = false;
        }
        return this;
    };

}



const getNumber = () => {
    new MyPromise((res, rej) => {
        const randomNumber = Math.floor(Math.random() * 1000);
        if (randomNumber % 5 !== 0) {
            rej(`Rejected with num:${randomNumber}`);
        } else
            res(`Resolve with num: ${randomNumber}`);
    }).then((x) => console.log(x)).catch((x) => console.log(x));
}

getNumber();
