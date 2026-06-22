class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        let str1={}
        let str2={}

        if(s.length!==t.length){
            return false
        }
        for(let i=0;i<s.length;i++){
            if(!str1.hasOwnProperty(s[i])){
                str1[s[i]]=1
            }else{str1[s[i]]+=1}
            
        }

        for(let i=0;i<t.length;i++){
            if(!str2.hasOwnProperty(t[i])){
                str2[t[i]]=1
            }else{str2[t[i]]+=1}
           

        }

        for(let i in str1){
            if(str1[i]!==str2[i]){
                return false
            }
        }

        return true


    }
}
