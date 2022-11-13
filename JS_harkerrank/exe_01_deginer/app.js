function designerPdfViewer (h, word){
    let max= 1;
    let a,b;

    for(var i =0;i<word.length;i++){
        a=h[word.charCodeAt(i)-97];
        if(max <a ){max=a}
    }
    return max*word.length;
}

console.log(designerPdfViewer([1, 3, 1, 3, 1, 4, 1, 3, 2, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5], 'abc'));