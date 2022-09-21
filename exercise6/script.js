function leapYear (year){
    if(year % 100 ==0){
        if(year % 400==0){
            console.log('Năm nhuận');
        }else{
            console.log('Không phải năm nhuận');
        }
        
    }
    else if (year % 4==0){
        console.log('Năm nhuận');
    }
    else {
        console.log('Không phải năm nhuận');
    }
}
console.log(leapYear(2016));
console.log(leapYear(2022));

