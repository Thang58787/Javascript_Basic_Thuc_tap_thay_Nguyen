
function findDigits(n) {

   var myNum = String(n).split("").map((n) => {
      return Number(n)
   })
   var result = 0;
   myNum.forEach(e => (n % e == 0) ? result++ : 1)
   return result
}
console.log(findDigits(1012))