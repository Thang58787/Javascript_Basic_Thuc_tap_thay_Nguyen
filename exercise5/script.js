let myLet = setInterval(myFunction, 1000);
let text = 'w3resource';
let newArray = text.split('')

function myFunction(){
    let letter = newArray.pop();
    let newLetter = newArray.unshift(letter);
    let newText = newArray.join('')
    console.log(newText);
}

