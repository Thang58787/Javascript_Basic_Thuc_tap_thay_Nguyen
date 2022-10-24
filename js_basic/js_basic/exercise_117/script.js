function checkMatrix(user_matrix) {
    for (let i = 0; i < user_matrix.length; i++) {
        rows = user_matrix.length;
        cols = user_matrix[i].length;
        if (rows != cols) {
            console.log("Matrix should be a square matrix");
            return false;
        }
    }
    for (var i = 0; i < user_matrix.length; i++) {
        for (var j = 0; j < user_matrix.length; j++) {
            if (i !== j && user_matrix[i][j] !== 0 || user_matrix[0][0] !== 1 || user_matrix[1][1] !== 1 || user_matrix[2][2] !== 1)
                return false;
        }
    }
    return true;
}


console.log(checkMatrix([[1, 0, 0, 2], [0, 1, 0], [0, 0, 1]]))
console.log(checkMatrix([[1, 0, 0], [0, 1, 0], [0, 0, 1]]))
console.log(checkMatrix([[1, 0, 1], [0, 1, 0], [0, 0, 1]])) 