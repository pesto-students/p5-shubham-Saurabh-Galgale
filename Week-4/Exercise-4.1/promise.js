function MyPromise(executor) {
    let onResolve;
    let onReject;
    let isFulfilled = false;
    let isRejected = false;
    let isCalled = false;
    let value;
    let error;

    function resolve(val) {
        isFulfilled = true;
        value = val;
        if (typeof onResolve === 'function' && !isCalled) {
            onResolve(val);
            isCalled = true;
        }
    }

    function reject(err) {
        isRejected = true;
        error = err;
        if (typeof onReject === 'function' && !isCalled) {
            onResolve(err);
            isCalled = true;
        }
    }

    this.then = function(thenHandler) {
        onResolve = thenHandler;
        if (!isCalled && isFulfilled) {
            onResolve(value);
            isCalled = true;
        }
        return this;
    };

    this.catch = function(catchHandler) {
        onReject = catchHandler;
        if (!isCalled && isRejected) {
            onReject(error);
            isCalled = true;
        }
        return this;
    };

    executor(resolve, reject);
}

// MyPromise.resolve = (val) => {
//     return new MyPromise(function executor(resolve, reject) {
//         resolve(val);
//     });
// }

// MyPromise.reject = (reason) => {
//     return new MyPromise(function executor(resolve, reject) {
//         reject(reason);
//     });
// }



const getNumber = () => {
    new MyPromise((res, rej) => {
        const randomNumber = Math.floor(Math.random() * 1000);
        if (randomNumber % 5 !== 0) {
            rej(`Rejected with num:${randomNumber}`);
        }else
        res(`Resolve with num: ${randomNumber}`);
    }).then((x) => console.log(x)).catch((x) => console.log(x));
}    

getNumber();
