function string_check(str) {
    if (str === null || str === undefined || str.substring(0, 2) === 'Py') 
    {
      return str;
    }
    return "Py"+str;
  }
  
  console.log(string_check("Python"));
  console.log(string_check("thon"));
  console.log(string_check("chau_a"));