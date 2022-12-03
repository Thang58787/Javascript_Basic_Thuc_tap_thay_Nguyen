function myFunction(obj)
{
  if (!('a' in obj)) return;
  let bObj = obj['a'];
  if (!( bObj.hasOwnProperty('b'))) return ;
  return bObj['b'];
}

console.log(myFunction({a:{b:{c:3}}}));
