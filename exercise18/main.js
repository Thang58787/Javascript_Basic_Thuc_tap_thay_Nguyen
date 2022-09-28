function check50(a, b) 
{
  if ((a == 50 || b == 50)) {
   return true; 
   }
  if (a+b==50) {
    return true
  } 
  else {
    return false  
  }
} 
console.log(check50(10,40));
console.log(check50(50,50));
console.log(check50(12,60));
