/**
 * Problem: Contains Duplicate
 * Link: https://neetcode.io/problems/duplicate-integer?list=neetcode150
 * Difficulty: Easy
 * 
 * Approach:
 * - Use a HashSet (Set in JS) to keep track of seen numbers.
 * - Traverse the array:
 *    - If the number already exists in the set → return true (duplicate found).
 *    - Else, add it to the set.
 * - If no duplicates are found after traversal → return false.
 * 
 * Time Complexity: O(n)  // We scan each element once.
 * Space Complexity: O(n) // In worst case, store all elements in the Set.
 *//**
 * Problem: Contains Duplicate
 * Link: https://leetcode.com/problems/contains-duplicate/
 * Difficulty: Easy
 * 
 * Approach:
 * - Use a HashSet (Set in JS) to keep track of seen numbers.
 * - Traverse the array:
 *    - If the number already exists in the set → return true (duplicate found).
 *    - Else, add it to the set.
 * - If no duplicates are found after traversal → return false.
 * 
 * Time Complexity: O(n)  // We scan each element once.
 * Space Complexity: O(n) // In worst case, store all elements in the Set.
 */

class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {

        const s = new Set()
        //iterate over each number of array
        for(let n of nums ){
            if(s.has(n)){
                return true // Number found
            }
            s.add(n) //add element
        }
        return false // No duplicate found 
        }   
}
const nitesh = new Solution

nums=[1,2,3,4,5]
console.log(nitesh.hasDuplicate(nums)) //False 
