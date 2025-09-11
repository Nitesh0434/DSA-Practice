/**
 * Problem: Two Sum
 * Link: https://leetcode.com/problems/two-sum/
 * Difficulty: Easy
 * 
 * Approach:
 * - Nested loops to check all pairs.
 * - If nums[i] + nums[j] equals target, return indices [i, j].
 * 
 * Time Complexity: O(n^2)
 * Space Complexity: O(1)
 */

// class Solution {
//     /**
//      * @param {number[]} nums
//      * @param {number} target
//      * @return {number[]}
//      */
//     twoSum(nums, target) {
//         for (let i = 0; i < nums.length; i++) {
//             for (let j = i + 1; j < nums.length; j++) { // avoid using same element twice
//                 if (nums[i] + nums[j] === target) {
//                     return [i, j]; // return as array
//                 }
//             }
//         }
//         return []; // no solution found
//     }
// } the time complexity is o(n^2) 

class Solution{

    twosum(nums,target){
        const nit = new Map();
        for(let i=0;i<nums.length;i++){
            let nitesh = target-nums[i]
            if(nit.has(nitesh)){
                return [nit.get(nitesh),i]
            }
            nit.set(nums[i],i);
        }
        return [];

    }
} 
// Example Test
const kamat = new Solution();

console.log(kamat.twosum([2,7,11,15], 9)); // [0, 1]
   
