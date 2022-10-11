function checkString (arr){
    let lgth = 0;
    let longest;
    for(let i =0;i<arr.length;i++){
        if(arr[i].length>lgth){
            let lgth = arr[i].length;
            longest = arr[i];
        }
    }
    return [longest];
}
console.log(checkString(['a' ,'aa' ,'aaa']))