function check(str){
    if(str.substring(4,10)==="script"){
      return true;
    }
    else{
      return false;
    }
  }
  console.log(check("Javascript"));
  console.log(check("html"));