function convertLetters(str) {
    var newArr=str.split("");
        alpha = newArr.sort();  
    return alpha.join('');
  }
   
console.log(convertLetters('agheb'))