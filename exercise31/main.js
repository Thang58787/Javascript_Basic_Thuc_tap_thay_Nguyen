function largestNum(x, y,z) 
 {
  let max = x;
  if(max < y) {
   return  max = y;
}
if(max < z) {
   return max = z; 
}
 else {
    return max = x;
 }
 }
console.log(largestNum(24,7,21));