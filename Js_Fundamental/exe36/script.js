const over = (...fns) => (...args) =>
 fns.map(fn => fn.apply(null, args));
const minMax = over(Math.min, Math.max);// method is function
console.log(minMax(1, 2, 3, 4, 5)); 
console.log(minMax(1, 2, 5, 4, 3)); 
console.log(minMax(1, 2, 5, -4, 3));