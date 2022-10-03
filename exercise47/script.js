function checkNumber (a,b,n){
   if(n<40 || n>10000){
    return false;
   } else if (n>=a && n<=b){
    return true;
   }
   return false

}
console.log(checkNumber(40, 4000, 45));  
console.log(checkNumber(80, 320, 79));  
console.log(checkNumber(89, 4000, 30));


