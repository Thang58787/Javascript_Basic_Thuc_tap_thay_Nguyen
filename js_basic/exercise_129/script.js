function intersect_safe(a, b)
{
  var ai=0, bi=0;
  var result = [];
  a.sort();
  b.sort();
  while( ai < a.length && bi < b.length )
  {
     if      (a[ai] < b[bi] ){ ai++; }
     else if (a[ai] > b[bi] ){ bi++; }
     else /* they're equal */
     {
       result.push(a[ai]);
       ai++;
       //console.log(ai)
       bi++;
     }
  }

  return result;
}
console.log(intersect_safe([1,4,5,2,3],[3,2,5,6,7]))