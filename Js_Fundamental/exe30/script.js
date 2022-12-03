const filter = (arr,...nth) => arr.filter( v =>!nth.includes(v))

console.log(filter([1,2,3,4],3));