function specifiedPosition(str, num) {
    let newarr = str.split('');
    newarr.splice(num, 1);
    return newarr.join('');
}
console.log(specifiedPosition('quangchung', 4));
