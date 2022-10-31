function getTotalX(a, b) {
    // Write your code here
    var count = 0;
    
    for(let i = Math.max(...a);i<=Math.max(...b);i++){
        if(a.every(v=> i%v===0) && b.every(v=> v%i===0))
            count++;
    }
    return count;
}
console.log(getTotalX([2,4],[16,32,9]))
