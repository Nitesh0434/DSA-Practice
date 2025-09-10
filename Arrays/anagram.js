/**
 * Problem: Valid Anagram
 * Link: https://neetcode.io/problems/is-anagram?list=neetcode150
 * Difficulty: Easy
 * 
 * Approach:
 * - Use a hash map (object in JS) to count character frequencies in string `s`.
 * - For each character in string `t`, decrease the count.
 * - If all counts reduce to zero by the end → strings are anagrams.
 * - Otherwise, return false.
 * 
 * Time Complexity: O(n+m) where n is the length of the string s and m is the length of the string t.  // Traverse both strings once
 * Space Complexity: O(1)  // At most 26 characters for lowercase English letters
 */
class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        const charcount=Array(26).fill(0)
        for (let i of s){
            charcount[i.charCodeAt(0)-97]+=1
        }
        for(let i of t){
            charcount[i.charCodeAt(0)-97]-=1
        }
        for(let count of charcount){
            if(count!==0){
                return false
            }
        }
        return true
    }
}
const nitesh = new Solution();
console.log(nitesh.isAnagram("anagram", "nagaram")); // true
console.log(nitesh.isAnagram("rat", "car"));        // false

