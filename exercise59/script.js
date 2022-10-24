function extractString (str){
    let newstr = " ";
    let length = str.length
    if(length % 2==0){
        newstr = str.slice(0,(length/2));
    }else{
        return false;
    }
    return newstr;
}
console.log(extractString("Python"));  
console.log(extractString("JavaScript")); 
console.log(extractString("PHP"));