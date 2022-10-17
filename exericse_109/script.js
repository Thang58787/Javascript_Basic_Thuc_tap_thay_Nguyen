// function find_prime_number(num) {
//     let arr = [];
//     let iSprime = true;
//     for (let i = 2; i <= num; i++) {
//        if(i%2 ==1){
//         arr.push(i)
//        }
//     }
//     return arr
// }
// console.log(find_prime_number(13))
function sort_prime(num) {

    var prime_num1 = [],
        prime_num2 = [];
    for (var i = 0; i <= num; i++) {
        prime_num2.push(true);

    }
    for (var i = 2; i <= num; i++) {
        if (prime_num2[i]) {
            prime_num1.push(i);
            for(var j =1;i*j<=num;j++){
                prime_num2[i*j]=false
            }
        }
    }
    return prime_num1
}
console.log(sort_prime(11))