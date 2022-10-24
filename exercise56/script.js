function returnString (a,b){
    let number=Math.round(a/b).toString();
    number=number.split('');
   return number;
}
console.log(returnString(80,6));