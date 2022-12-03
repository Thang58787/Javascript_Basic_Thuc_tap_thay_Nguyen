function appendAndDelete(s, t, k) {
    let i = 0
    var j = 0;
    while (s[i] === t[i]) {
        if(!s[i]) break
            j += s[i].length;
            i++;
       
    }
    let a = s.length - j;// 1-1 =0
    let b = t.length - j;//2-1 =1
    if (((a + b) <= k) && (s.length-b!==1) && (t.length-s.length !==1)){
    return "Yes"
    }
    return "No"

}
console.log(appendAndDelete("y", "yu", 2))