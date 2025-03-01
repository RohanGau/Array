var findUnsortedSubarray = function(nums) {
   let left = 0, right = nums.length - 1;

    // Step 1: Find the first index from the left where sorting is disrupted
    while (left < nums.length - 1 && nums[left] <= nums[left + 1]) {
        left++;
    }
    
    // If the entire array is already sorted, return 0
    if (left === nums.length - 1) return 0;

    // Step 2: Find the first index from the right where sorting is disrupted
    while (right > 0 && nums[right] >= nums[right - 1]) {
        right--;
    }

    // Step 3: Find the min and max values in the unsorted range
    let minInRange = Infinity, maxInRange = -Infinity;
    for (let i = left; i <= right; i++) {
        minInRange = Math.min(minInRange, nums[i]);
        maxInRange = Math.max(maxInRange, nums[i]);
    }

    // Step 4: Expand `left` if elements before it are greater than `minInRange`
    while (left > 0 && nums[left - 1] > minInRange) {
        left--;
    }

    // Step 5: Expand `right` if elements after it are smaller than `maxInRange`
    while (right < nums.length - 1 && nums[right + 1] < maxInRange) {
        right++;
    }

    // Step 6: Return the length of the subarray
    return right - left + 1;
};
