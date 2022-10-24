function same_last_digit(x, y, z)
{
  if ((x > 0) && y > 0 && z > 0){
      if(x % 10 == y % 10 && y % 10 == z % 10 && x % 10 == z% 10){
        return true;
      }
      if (x % 10 == y % 10 || y % 10 == z % 10 || x % 10 == z% 10){
        return true;
      }
      return false;
    }
      
    
  else
    return false;
}
console.log(same_last_digit(22,32,42));
console.log(same_last_digit(101,302,3));
console.log(same_last_digit(20,22,45));
