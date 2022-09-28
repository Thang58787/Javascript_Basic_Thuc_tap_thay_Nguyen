function check3nums(x, y, z) 
{
  return (x >= 50 && x <= 99) || (y >= 50 && y <= 99) || (z >= 50 && z <= 99);
}

console.log(check3nums(50, 88, 99));
console.log(check3nums(1, 9, 190));