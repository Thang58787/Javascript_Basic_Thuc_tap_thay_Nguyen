function utopianTree (n){
    let result =1;
    for(var i = 0;i<n;i++){
        if(i%2==0){
            result *=2;
        } else{
            result +=1
        }
    }
    return result;
}
console.log(utopianTree(3))