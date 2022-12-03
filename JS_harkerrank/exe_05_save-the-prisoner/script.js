function saveThePrisoner(n, m, s) {
    let result = (m + s - 1) % n;
    if ( result == 0 ) {
        result = n;
    }
    return(result);
}
console.log(saveThePrisoner(35793055 ,838776925 ,7630760))
