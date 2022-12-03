const filter = (arr) =>{
 if(arr.length===1) {return [1]};
 if(arr.length >=1){
    return arr.slice(1)
 }
}
console.log(filter([1,2,3]))
console.log(filter ([1]))


