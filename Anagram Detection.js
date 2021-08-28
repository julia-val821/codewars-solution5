https://www.codewars.com/kata/529eef7a9194e0cbc1000255/train/javascript

    function buildCharObject(str){
        const charObj = {};
        str = str.toLowerCase().replace(/[^\w]/g, "");

        for(let char of str){
            charObj[char] = charObj[char] + 1 || 1;
        }
        return charObj;
    }

var isAnagram = function(test, original) {
    const aCharObj = buildCharObject(test);
    const bCharObj = buildCharObject(original);
    if(Object.keys(aCharObj).length !== Object.keys(bCharObj).length){
        return false;
    }
    for(let char in aCharObj){
        if(aCharObj[char] !== bCharObj[char]){
            return false;
        }
    }
    return true;
}