function spiralPrint(M) {
    let topRow = 0;
    let leftCol = 0;
    let btmRow = M.length - 1;
    let rightCol = M[0].length - 1;

    while (topRow <= btmRow && leftCol <= rightCol) {
        console.log("i'm here");

        for (let col = leftCol; col <= rightCol; col++) {
            console.log(M[topRow][col]);
        }
        topRow++;

        for (let row = topRow; row <= btmRow; row++) {
            console.log(M[row][rightCol]);
        }
        rightCol--;

        if (topRow <= btmRow) {
            for (let col = rightCol; col >= leftCol; col--) {
                console.log(M[btmRow][col]);
            }
        }
        btmRow--;

        if (leftCol < rightCol) {
            for (let row = btmRow; row >= topRow; row--) {
                console.log(M[row][leftCol]);
            }
        }
        leftCol++;
    }
}

var M = [
    [1, 2, 3, 4, 5],
    [6, 7, 8, 9, 10],
    [11, 12, 13, 14, 15],
    [16, 17, 18, 19, 20]
];

// var M = [
//     [1, 2, 3],
//     [4, 5, 6],
//     [7, 8, 9]
// ];
spiralPrint(M);
