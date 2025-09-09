class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {

        const s = new Set()
        for(let n of nums ){
            if(s.has(n)){
                return true
            }
            s.add(n)
        }
        return false
        }   
}
const nitesh = new Solution

nums=[1,2,3,4,5]
console.log(nitesh.hasDuplicate(nums))
