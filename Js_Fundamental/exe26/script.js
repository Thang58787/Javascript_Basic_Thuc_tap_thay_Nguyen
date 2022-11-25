const yes_No = (val, def = false) =>
  /^(y|yes)$/i.test(val) ? true : /^(n|no)$/i.test(val) ? false : def;
console.log(yes_No('Y')); 
console.log(yes_No('yes'));  
console.log(yes_No('No')); 
console.log(yes_No('Foo', true));  
