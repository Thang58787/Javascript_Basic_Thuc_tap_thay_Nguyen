function createString (str1, str2){
    let newstr = '';
    newstr = str1.slice(1) + str2.slice(1);
    return newstr;
}
console.log(createString("PHP","JS"));
console.log(createString("A","B"));
console.log(createString("AA","BB"));