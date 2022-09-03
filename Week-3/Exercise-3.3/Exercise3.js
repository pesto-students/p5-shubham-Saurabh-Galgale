// function createIncrement() {
//     let count = 0;
//     function increment() {
//         count++;
//     }



    // message is created once and has nothing to do with increment
    // thats why showing count is 0 all the Time.

    // message should be inside the increment() so it will change the count




//     let message = `count is ${count}`;
//     function log() {
//         console.log(message);
//     }
//     return [increment, log];
// }

// const [increment, log] = createIncrement();



// we are incrementing 3 times but not returning it any way.
// increment();
// increment();
// increment();


// logging the message here.
// log();


// solution to get Count is 3------------------------------------------------------------------------------------------------------------------------------------------------------------------


function createIncrement() {
    let count = 0;
    let message;
    function increment() {
        count++;
        message = `count is ${count}`;
    }

    function log() {
        console.log(message);
    }
    return [increment, log];
}

const [increment, log] = createIncrement();

increment();
increment();
increment();

log();

