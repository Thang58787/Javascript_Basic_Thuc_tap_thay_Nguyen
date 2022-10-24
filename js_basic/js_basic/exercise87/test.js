function checkarr(a, b) {
    for (let i = 0; i < a.length; i++) {
      for (let j = i; j < a.length; j++) {
        var result = true
        temp = a[i];
        a[i] = a[j];
        a[j] = temp;
        for (let k = 0; k < a.length; k++) {
          if (a[k] !== b[k]) {
            result = false;
            break
          }
        }
        if (result) {
          return true;
        }
        a[j] = a[i];
        a[i] = temp;
      }
    }
    return false
  }
  console.log(checkarr([10, 20, 30], [10, 20, 30]))
  console.log(checkarr([10, 20, 30], [30, 10, 20]))
  console.log(checkarr([10, 20, 30, 40], [10, 30, 20, 40]))