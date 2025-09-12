class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        const freqMap = new Map();
        for (let num of nums) {
            freqMap.set(num, (freqMap.get(num) || 0) + 1);
        }

        // Step 2: Create buckets (index = frequency)
        const n = nums.length;
        const buckets = Array.from({ length: n + 1 }, () => []);

        for (let [num, freq] of freqMap.entries()) {
            buckets[freq].push(num);
        }

        // Step 3: Collect top k frequent elements from buckets
        const result = [];
        for (let i = n; i >= 0 && result.length < k; i--) {
            if (buckets[i].length > 0) {
                result.push(...buckets[i]);
            }
        }

        // Only take first k elements (in case of tie)
        return result.slice(0, k);
    }
}

// Example:
const sol = new Solution();
console.log(sol.topKFrequent([1,1,1,2,2,3], 2)); // Output: [1, 2]

