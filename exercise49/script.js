function replaceCharacter1(str) {
    let newstr = '';
    for (let i = 0; i <= str.length - 1; i++) {
            if(str.charCodeAt(i)==122){
                newstr+='a';
            } else if(str.charCodeAt(i)==90){
                newstr+='A'
            }
            else if ((65 <= str.charCodeAt(i) && str.charCodeAt(i) <= 89) || (96 < str.charCodeAt(i) && str.charCodeAt(i) < 122)) {
                let letter = str.charCodeAt(i) + 1;
                newstr += String.fromCharCode(letter);
            } else {
                newstr += str.charAt(i);
            }
        }
        return newstr;
    }

    console.log(replaceCharacter1("PYTHON"));
    console.log(replaceCharacter1("W3RZ"));
    console.log(replaceCharacter1("abcdxyz"));


