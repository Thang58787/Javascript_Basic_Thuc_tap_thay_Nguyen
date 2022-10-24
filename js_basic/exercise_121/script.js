function checkMatrix(matrix) {
    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[0].length; j++) {
            if (j > i && matrix[i][j] !== 0) {// đảm bảo luôn bằng không và j>i
                return false;
            }
        }
    }
    return true;
}
console.log(checkMatrix([[1, 0, 0], [2, 0, 0], [0, 3, 3]]))
console.log(checkMatrix([[1, 0, 0], [2, 0, 1], [0, 3, 3]]))
