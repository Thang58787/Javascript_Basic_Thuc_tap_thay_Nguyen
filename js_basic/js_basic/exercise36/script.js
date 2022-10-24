
function last_digit(x, y, z)
{
  if ((x > 0) && y > 0 && z > 0)
    {
    return (x % 10 == y % 10 && y % 10 == z % 10 && x % 10 == z% 10);
   }
  else
    return false;
}

console.log(last_digit(20, 30, 400));
console.log(last_digit(-20, 30, 400));
console.log(last_digit(20, -30, 400));
console.log(last_digit(22, 32, 2));

// cách 2
// function checkLastdigit(a, b, c) {
//     if((a > 0) && b > 0 && c > 0){

//         const arrayOfDigitA = Array.from(String(a), Number);
//         const arrayOfDigitB = Array.from(String(b), Number);
//         const arrayOfDigitC = Array.from(String(c), Number);
//         let x = arrayOfDigitA.pop();
//         let y = arrayOfDigitB.pop();
//         let z = arrayOfDigitC.pop();
//         if (x == y && x == z && y == z) {
//             return true;
//         }
//         return false;
//     }
//     return false;

// }
// console.log(checkLastdigit(40, 50, 60));
// console.log(checkLastdigit(40, 50, 61));
// console.log(checkLastdigit(400, 50, 60));
// console.log(checkLastdigit(400, 50, 61));

