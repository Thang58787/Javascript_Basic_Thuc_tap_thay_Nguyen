function lastDigit(a,b,c){
    a=a%10;
    b=b%10
    c=c%10
    if(a===b && a===c){
      return "same";
    }else{
    
      return "not same"
    }  
    
  }
  console.log(lastDigit(1234,5,65));
  console.log(lastDigit(1234,2,34));