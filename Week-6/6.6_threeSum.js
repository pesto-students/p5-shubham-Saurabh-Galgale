function threeSum(arr, target) {
    arr.sort((a, b) => a - b);
    let res = arr[0] + arr[1] + arr[2];
    
    for (let i = 0; i < arr.length - 2; i += 1) {
        let start = i + 1;
        let end = arr.length - 1;
        while (start < end) {
            const sum = arr[i] + arr[start] + arr[end];
            // console.log(arr[i], arr[start], arr[end]);
            if (sum == target) {
                res = sum;
                return res;
            } else if (sum > target) {
                end -= 1;
            } else {
                start += 1;
            }
            if (Math.abs(target - sum) < Math.abs(target - res)) {
                res = sum;
            }
        }
    }
    return res;
}

console.log(threeSum([10, 20, 30, 40, 50], 82));


