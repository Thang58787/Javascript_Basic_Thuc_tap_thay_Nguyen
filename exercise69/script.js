function firstHalf(str) {
    if(str.length % 2 != 0)
        return str;
    return str.substring(0, str.length/2);
}

console.log(firstHalf("Python"));  
console.log(firstHalf("JavaScript")); 
console.log(firstHalf("PHP"));