function checkString (arr){
    let lgth = arr[0].length;
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
// dạng bài toán tìm số lớn nhât của một mảng