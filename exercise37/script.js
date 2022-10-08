function newstring(n){
    console.log(n)
    if(n.length>3){
      return n.substring(0,3).toUpperCase() + n.substring(3,n.length)
    }else{
      return n.toUpperCase()
    }
  }
  
  console.log(newstring("chau"))