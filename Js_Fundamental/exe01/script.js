//#Source https://bit.ly/2neWfJ2
const matching = (obj_1, obj_2) =>
  Object.keys(obj_2).every(key => obj_1.hasOwnProperty(key) && obj_1[key] === obj_2[key]);
console.log(matching({ age: 25, hair: 'long', beard: true }, { hair: 'long', beard: true })); 
console.log(matching({ hair: 'long', beard: true }, { age: 25, hair: 'long', beard: true })); 
console.log(matching({ hair: 'long', beard: true }, { age: 26, hair: 'long', beard: true })); 

