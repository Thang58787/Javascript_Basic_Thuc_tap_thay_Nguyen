function reverseNumber(num) {
    let old_Bit = num.toString(2).split('');
    let str_len = old_Bit.length;
    for (let i = 0; i < 8 - str_len; i++) {
        old_Bit.unshift('0');
    }
    let new_Bit = old_Bit.reverse();
    return parseInt (new_Bit.join(''),2)
}
console.log(reverseNumber(13))