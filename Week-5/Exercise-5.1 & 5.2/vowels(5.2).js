
function isVowel(char) {
    return "aeiou".includes(char);// true if char is vowel
}
function vowelCount(str){
    const vowelMap = new Map();
    for (let char of str) {
        let lowerCaseChar = char.toLowerCase()
        if (isVowel(lowerCaseChar)) {
            // console.log("im in first if");
            if (vowelMap.has(lowerCaseChar)) {
                // console.log("im in if");
                vowelMap.set(lowerCaseChar, vowelMap.get(lowerCaseChar) + 1);
            } else {
                // console.log("im in else");
                vowelMap.set(lowerCaseChar, 1);
            }
        }
    }
    return vowelMap;
}

console.log(vowelCount("My name is Saurabh"));




// END ------------------------------------------------------------------------------------------------------------------------------------------------------------------


























// function vowel_count(str1) {
//     var vowel_list = 'aeiouAEIOU';
//     var vcount = 0;
//     for (let x = 0; x < str1.length; x++) {
//         if (vowel_list.indexOf(str1[x]) !== -1) {
//             console.log(vowel_list.indexOf(str1[x]));
//             vcount += 1;
//         }
        
//     }
//     return vcount;
// }
// vowel_count("aEIOUAEIOUgggg");