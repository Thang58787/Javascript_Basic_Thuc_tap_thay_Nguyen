function add_two_int_without_carrying(n1, n2) {
    var result = 0,
        x = 1;
    while (n1 > 0 && n2 > 0) {
        result += x * ((n1 + n2) % 10);
        n1 = Math.floor(n1 / 10);
        n2 = Math.floor(n2 / 10);
         x*= 10;
    }
    return result;
}
console.log(add_two_int_without_carrying(222, 911))
console.log(add_two_int_without_carrying(200, 900))
// function test (n,m){
//     bit_sum = (n%10) + (m%10);
    
//     // Neglect carry
//     bit_sum %= 10;
//     return bit_sum;
// }
// console.log(test(123,321))