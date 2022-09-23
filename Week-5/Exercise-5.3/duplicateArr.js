// duplicate fn ------------------------------------------------------------------------------------------------------------



function hasDuplicate(arr) {

    const set = [...new Set(arr)];

    console.log(arr.length > set.length);
}

hasDuplicate([1, 2, 3, 3]);


// End------------------------------------------------------------------------------------------------------------------



// function hasDuplicate(arr) {
//     let dupChars = arr.filter((a, index) => {
//         return arr.indexOf(a) !== index;
//     });

//     console.log(dupChars.length == 0);

// }

// hasDuplicate([1, 2, 3]);



// let arr = [1, 2, 3, 3, 3];

// // arr.forEach((a, index) => {
// //     console.log(`${a} - ${index} - ${arr.indexOf(a)}`);
// // });

// console.log(arr.filter((a, index, arr) => console.log(`${a} - ${index} - ${arr.indexOf(a)}`)));





// // Array, Swich case, structures, Object  
