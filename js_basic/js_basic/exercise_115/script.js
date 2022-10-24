function checkMatrix(user_matrix) {
    for (var i = 0; i < user_matrix.length; i++) {
        for (var j = 0; j < user_matrix.length; j++) {
            if (i !== j && user_matrix[i][j] !== 0) 
              return false;
        }
    }
    return true;
}


console.log(checkMatrix([[1, 0, 0], [0, 2, 0], [0, 0, 3] ]));
console.log(checkMatrix([[1, 0, 0], [0, 2, 3], [0, 0, 3] ]));
