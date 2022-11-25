const reduce_Which = (arr) =>
  arr.reduce((a, b) => (a-b) >= 0 ? b : a);
console.log(reduce_Which([3, 2,1])); 
console.log(reduce_Which([10, 30, 20]));  
console.log(reduce_Which(
  [{ name: 'Kevin', age: 16 }, { name: 'John', age: 20 }, { name: 'Ani', age: 19 }],
  (a, b) => a.age - b.age)); 