let chessboard = ""
let size = 8

for(let column = 0; column < size; column++){
    
    let rowString = ""

    if (column % 2 !== 0) {

        for (let row = 0; row < size; row++) {

            if (row % 2 !== 0) {
                rowString += " "
            } else {
                rowString += "#"     
            }   

        }

        chessboard += rowString + "\n" 
    } else {

        for (let row = 0; row < size; row++) {

        if (row % 2 !== 0) {
            rowString += "#"
        } else {
            rowString += " "     
        }       
    }
        chessboard += rowString + "\n"
    }   
}

console.log(chessboard);