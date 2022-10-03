function equal_pt(str)
{ 
  return str.replace(/[^p]/g, "").length === str.replace(/[^t]/g, "").length; 
}

console.log(equal_pt("paatpss"));
console.log(equal_pt("paatps"));