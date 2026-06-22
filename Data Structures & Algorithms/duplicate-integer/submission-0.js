class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        let duplicateHash= {}
        for(let i=0;i<nums.length;i++){
            if(!duplicateHash.hasOwnProperty(nums[i])){
                duplicateHash[nums[i]]+=1
            }
            else
            return true
        }
        return false
    }
}
