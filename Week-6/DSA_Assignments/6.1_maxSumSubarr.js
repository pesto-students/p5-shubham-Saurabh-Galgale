function subArray(arr) {
  let sum = 0;
  let maxSum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum = arr[i] + sum;
    if (arr[i] > sum) {
      sum = arr[i];
    }
    if (sum > maxSum) {
      maxSum = sum;
    }
  }
  return maxSum;
}

console.log(subArray([-10, 2, 3, 4, 5]));
// console.log(subArray([-10, 2, -10, 3, -20]));
// console.log(subArray([1, 2, -10, 3, -10]));
// console.log(subArray([1, -2, 10, -3, 4]));








