function beautifulDays(i, j, k) {
    let b =0;
    let c=0;
    let result = 0;
    
    for(var a =i; a<=j;a++){
        a = a + "";
	    b = a.split("").reverse().join("");
        parseFloat(b);
        c= (Math.abs(a-b))/k
       if(Number.isInteger(c)){
        result++
       }
    }
    return result;

}
console.log( beautifulDays(20 ,23 ,6))