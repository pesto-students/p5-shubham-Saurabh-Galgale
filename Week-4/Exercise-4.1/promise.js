
function MyPromise(executor) {
    let isFulfilled = false;
    let isRejected = false;
    let value;
    let error;

    try{
        executor(resolve, reject);
    }catch(e){
        throw (e);
    }

    function resolve(val) {
        // console.log("under resolver");
        isFulfilled = true;
        value = val;
    }

    function reject(err) {
        // console.log("under reject");
        isRejected = true;
        error = err;
    }

    this.then = function (thenHandler, catchHandler) {
        // console.log("under then");
        if (isFulfilled) {
            thenHandler(value);
        }else if(catchHandler && isRejected) {
            catchHandler(error);
        }
        return this;
    };

    this.catch = function (catchHandler) {
        // console.log("under catch");
        if (isRejected) {
            catchHandler(error);
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

