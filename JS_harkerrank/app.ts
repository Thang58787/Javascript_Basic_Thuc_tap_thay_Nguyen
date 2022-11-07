function designerPdfViewer(h: number[], word: string): number {
    // Write your code here
    let max = 1, a:number, b:number;
    for (var i = 0; i < word.length; i++) {
        a = h[word.charCodeAt(i) - 97];
        if (max < a) { max = a }
    }
    return max * word.length
}
console.log(designerPdfViewer([1, 3, 1, 3, 1, 4, 1, 3, 2, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5], 'abc'));