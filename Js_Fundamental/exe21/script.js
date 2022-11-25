const getEveryNth = (arrs, nth) => {
    return arrs.filter((e, i) => i % nth === nth - 1)
}
  

    
console.log(getEveryNth([1, 2, 3, 4, 5, 6], 1));
console.log(getEveryNth([1, 2, 3, 4, 5, 6], 2));