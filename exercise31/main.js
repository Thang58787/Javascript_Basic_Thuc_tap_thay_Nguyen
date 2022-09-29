function largestNum(x, y, z) 
 {
  var max = x;
  if(max < y) {
   return  max = y;
}
if(max < z) {
   return max = z; 
}
 }
console.log(largestNum(24,7,2001));
