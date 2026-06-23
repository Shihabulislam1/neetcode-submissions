class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
  let hashMap={}
  for (let num of nums ){
    if(!hashMap[num]){
      hashMap[num]=0
    }
    hashMap[num]+=1
  }
  
  return Object.entries(hashMap).sort((a, b) => a[1] - b[1]).slice(-k).map(([num])=>Number(num))
    }
}
