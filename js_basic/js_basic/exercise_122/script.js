const is_monotonous = (arr) => {
    let temp = 0;
    for(let i = 0; i < arr.length - 1; i++){
       if(arr[i] >= arr[i+1]){
          temp++;
          if(temp >= 1){
             return false;
          };
       };
    };
    return true;
 };
 console.log(is_monotonous([1, 2, 3]));
 console.log(is_monotonous([1, 2, 2]))
 console.log(is_monotonous([-3, -2, -1]))