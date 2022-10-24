// function findNumber_Zero(num) {
//     let result = 0;
//     let newArr = [];
//     let temp = 1;

//     for (let n = 1; n <= num; n++) {
//         newArr.push(n);
//     }
//     for (let i = 0; i < newArr.length; i++) {
//         temp *= newArr[i]
//     }
//     var digits = temp.toString().split('');
//     var realDigits = digits.map(Number);
//     for (let j = realDigits.length - 1; j >= 0; j--) {
//         if (realDigits[j] == 0) {
//             result++
//         }
//     }
//     return result;
// }
// console.log(findNumber_Zero(8))
// console.log(findNumber_Zero(9))
// console.log(findNumber_Zero(10))

function findNumber(num){
    let result =0;
    for(let n = 5;n<=num;n++){
        let temp = n;
        while(temp%5==0){
            temp /= 5;
            result++
        }
    }
    return result++
}
console.log(findNumber(8))
console.log(findNumber(9))
console.log(findNumber(10))
