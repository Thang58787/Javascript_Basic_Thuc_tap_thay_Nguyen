function vowelCount(str)
{ 

  return str.replace(/[^aeiou]/g, "").length; 
}

console.log(vowelCount("Python"));
console.log(vowelCount("w3resource.com"));
