const console = require("console");

function squares(a, b) {
    // var list = [];
    // let count = 0;
    // let root =0;

    // for (var i = a; i <= b; i++) {
    //     list.push(i);
    // }
    // for (var i = 0, len = list.length; i < len; i++) {
    //     root = Math.sqrt(list[i]);
    //     if (Number.isInteger(root)) {
    //         count++;
    //     } else {
    //         continue;
    //     }
    // }
    // return count;
    let count = 0;
    
    const min = Math.floor(Math.sqrt(a)), max = Math.sqrt(b);
    for(let i = min; i <= max; i++){
        const calculation = i ** 2;
        if(calculation <= b && calculation >= a) count++;
    }

    return count;
}
console.log(squares(3, 15))