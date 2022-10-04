// function titleCase(str) {

//     var myString = str.toLowerCase().split(' ');
//     for (var i = 0; i < myString.length; i++) {
//         var subString = myString[i].split('');
//         for (var j = 0; j < subString.length; j++) {
//             subString[0] = subString[0].toUpperCase();
//         }
//         myString[i] = subString.join('');
//     }

//     return myString.join(' ');
// }
//console.log(titleCase('quang chung'))
function titleCase(str) {
    // var myString = str.toLowerCase().split('');
    //str = str.split('');
    for(let i =0 ; i<=str.length-1;i++){
        if(str.charCodeAt(i)===32){
           let space = i;
        }
        
        
    }
    return space;
}
console.log(titleCase('quang chung nanana hjsbdsxclksjb'))

var fromCharCode = String.fromCharCode;
var firstLetterOfWordRegExp = /\b[a-z]|['_][a-z]|\B[A-Z]/g;
function toLatin1UpperCase(x){ // avoid frequent anonymous inline functions
    var charCode = x.charCodeAt(0);
    return charCode===39 ? x : fromCharCode(charCode===32);
}
function titleCase(string){
    return string.replace(firstLetterOfWordRegExp, toLatin1UpperCase);
}
console.log(titleCase('quang chung na'))