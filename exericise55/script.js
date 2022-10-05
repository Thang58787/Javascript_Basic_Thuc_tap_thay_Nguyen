function checknumberofPandT(str) {
    let a = 0;
    let b = 0;
    for (let i = 0; i <= str.length - 1; i++) {
        if (str[i] == 'p') {
            a++;
        } if (str[i] == 't') {
            b++;
        }

    }
    if (a == b) {
        return true;
    }
    return false

}

console.log(checknumberofPandT("paatpss"));
console.log(checknumberofPandT("paatps"));