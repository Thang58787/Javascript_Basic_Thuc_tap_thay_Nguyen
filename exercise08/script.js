function ramDOm(n) {
    let number = Math.floor(Math.random() * 10) + 1;
    if (n === number) {
        console.log('Good Work');
    }
    else {
        console.log('Not matched');
    }
}
ramDOm(n);