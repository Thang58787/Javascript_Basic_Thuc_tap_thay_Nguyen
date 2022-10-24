function checkStr(str1, str2) {
    let fisrt = str1.split('');
    let second = str2.split('')
        fisrt.sort();
        second.sort();
    max = Math.max(fisrt.length,second.length);
    for(let i =0;i<max;i++){
        if(fisrt[i]!==second[i]){
            return false
        }
    }
    return true;
    
    

}
console.log(checkStr("xyz", "zyx"))
console.log(checkStr("xyz", "zyp"))