const new_digit_color_code = (digitCode) =>{
    let demo =digitCode.split("").map(i => (i == "#") ? i : i + i).join("");
    if(demo[0] != "#"){
        demo = "#" + demo;
    } 
    return demo
}
console.log(new_digit_color_code('#03f'));
console.log(new_digit_color_code('05a'));
