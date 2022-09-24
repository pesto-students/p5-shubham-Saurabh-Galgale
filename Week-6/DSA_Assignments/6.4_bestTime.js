function bestTime(arr) {
    let buy = arr[0];
    let profit = 0;
    let maxProfit = 0;

    for(let i = 1; i < arr.length; i++) {
        if(buy > arr[i]) {
            buy = arr[i];
        }else {
            profit = arr[i] - buy;
            if(profit > maxProfit) {
                maxProfit = profit;
            }
        }
    }
    return maxProfit;
}

console.log(bestTime([20, 1, 3, 10]));

