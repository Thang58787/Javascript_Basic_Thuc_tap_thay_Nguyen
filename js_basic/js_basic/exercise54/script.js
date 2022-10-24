const vowels =['a', 'e', 'i', 'o', 'u'];
function checkString (str){
    let result = 0;
    for(let letter of str){
        if(vowels.includes(letter)){
            result++;
        }
    }
    return result;
}
console.log(checkString("Python"));
console.log(checkString("w3resource.com"));