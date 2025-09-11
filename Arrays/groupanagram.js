class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        // Step 1: Create a Map to act as a dictionary
        let map = new Map();

        // Step 2: Iterate through each word in the input array
        for (let word of strs) {
            // Step 2a: Initialize a count array of size 26 (for 'a' to 'z'), all zeros
            let count = new Array(26).fill(0);

            // Step 2b: Count the frequency of each character in the word
            for (let ch of word) {
                let index = ch.charCodeAt(0) - 97; // 'a' -> 0, 'b' -> 1, ..., 'z' -> 25
                count[index] += 1;
            }

            // Step 2c: Convert count array to string to use as a key
            let key = count.join(",");

            // Step 2d: If this key is not in the map, initialize an empty array
            if (!map.has(key)) {
                map.set(key, []);
            }

            // Step 2e: Push the current word into the corresponding group
            map.get(key).push(word);
        }

        // Step 3: Return all grouped anagrams as an array of arrays
        return Array.from(map.values());
    }
}

// Example usage:
const solution = new Solution();
console.log(solution.groupAnagrams(["eat","tea","tan","ate","nat","bat"]));

