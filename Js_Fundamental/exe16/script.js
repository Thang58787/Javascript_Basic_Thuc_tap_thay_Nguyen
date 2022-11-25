const checkNumber = (nums, fn=Boolean) => nums.every(fn);

console.log(checkNumber([2,2,3,4], x => x > 1));
console.log(checkNumber([4, 2, 3], x => x < 1));