function maxSubArray(nums) {
    let maxCurrent = nums[0];
    let maxGlobal = nums[0];
    // let subArray = [];
    for (let i = 1; i < nums.length; i++) {
      maxCurrent = Math.max(nums[i], maxCurrent + nums[i]);
      if (maxCurrent > maxGlobal) {
        maxGlobal = maxCurrent;
        // subArray.push(nums[i]); 
      }
    }
    // console.log(subArray);
    return maxGlobal;
  }


  // console.log(maxSubArray([2, 5, -6, 3, 7, -4, 5]));
console.log(maxSubArray([-3, 5, -6, -2, 7, -4, -7]));