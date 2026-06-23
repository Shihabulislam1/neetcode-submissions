class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        let group={}
        for(let word of strs){
            let key=word.split('').sort().join('')

            if(!group[key]){
                group[key]=[]
            }

            group[key].push(word)
        }
        return Object.values(group)
    }
}
