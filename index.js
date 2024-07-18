// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

// You may assume that each input would have exactly one solution, and you may not use the same element twice.

// You can return the answer in any order.

 /**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
 
function twoSum(nums, target) {
    const seen = {}; // Using an object as a hash map for efficient lookups
  
    for (let i = 0; i < nums.length; i++) {
      const complement = target - nums[i];
      if (complement in seen) {
        return [seen[complement], i];
      }
      seen[nums[i]] = i;
    }
  
    return []; // No solution found
  }
  
  // Example usage:
  const nums = [2, 7, 11, 15];
  const target = 9;
  const result = twoSum(nums, target);
  console.log(result); // Output: [0, 1]
  

  // https://leetcode.com/problems/number-of-good-leaf-nodes-pairs/

  // read this 