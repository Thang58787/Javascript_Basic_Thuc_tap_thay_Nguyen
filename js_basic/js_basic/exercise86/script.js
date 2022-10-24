function typeOfangle (num){
    if(num>0 && num<90){
        return 'Acute angle';
    }if(num==90){
        return 'Right angle';
    }if(num>90 && num<180){
        return 'Obtuse angle';
    }if(num == 180){
        return 'Straight angle'
    }
}
console.log(typeOfangle(47))
console.log(typeOfangle(90))
console.log(typeOfangle(145))
console.log(typeOfangle(180))