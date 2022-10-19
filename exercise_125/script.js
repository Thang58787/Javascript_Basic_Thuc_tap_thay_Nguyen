function makePalindrome (arr){
    let temp = 0;
    let longest = 0
    for(let i =0;i<arr.length;i++){
        if(arr[i].length>temp){
            temp = arr[i].length;
            longest = arr[i]
        }
    }
    return longest;
}
console.log(makePalindrome(['avb','a','abcd']))