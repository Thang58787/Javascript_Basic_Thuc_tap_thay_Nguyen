function maxInRange(x, y){	
    if( (x >= 40) && (x <= 60) && (y >= 40 && y <= 60) ){
    if(x === y){
    return "The same";
    }else if (x > y){
    return x;
    }else{
    return y;
    }
    }else{
    return "NOT in range";
    }
    }
    
    console.log(maxInRange(45, 60));
    console.log(maxInRange(55, 55));
    console.log(maxInRange(45, 80));
    