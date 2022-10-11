// this is created by me (Saurabh Galgale) without a single search. 
// (I have not considered time & space cpmplexity).

function nextGreat(array) {
    let output = [];
    let condition = true;
    for (let i = 0; i < array.length; i++) {
        for (let j = i+1; j < array.length; j++) {
            if (array[i] < array[j] && condition) {
                output.push(array[j]);
                condition = false;
            }
            if(j == array.length-1 && condition) {
                console.log(`this is ${i}`);
                output.push(-1);
            }
        }
        condition = true;
        if (i == array.length-1) {
            output.push(-1);
        }
    }
    return output;
}

// console.log(nextGreat([6, 8, 0, 1, 3]));
console.log(nextGreat([1, 3, 2, 4]));

