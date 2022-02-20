const root = document.querySelector('#root');
// console.log(root)

const matrix = [['', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', ''],
                [8, 'A8', 'B8', 'C8', 'D8', 'E8', 'F8', 'G8', 'H8', 8],
                [7, 'A7', 'B7', 'C7', 'D7', 'E7', 'F7', 'G7', 'H7', 7],
                [6, 'A6', 'B6', 'C6', 'D6', 'E6', 'F6', 'G6', 'H6', 6],
                [5, 'A5', 'B5', 'C5', 'D5', 'E5', 'F5', 'G5', 'H5', 5],
                [4, 'A4', 'B4', 'C4', 'D4', 'E4', 'F4', 'G4', 'H4', 4],
                [3, 'A3', 'B3', 'C3', 'D3', 'E3', 'F3', 'G3', 'H3', 3],
                [2, 'A2', 'B2', 'C2', 'D2', 'E2', 'F2', 'G2', 'H2', 2],
                [1, 'A1', 'B1', 'C1', 'D1', 'E1', 'F1', 'G1', 'H1', 1],
                ['', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', '']];
root.addEventListener('click', (event) => {
    if(event.target && event.target.tagName == "DIV"){
       alert(event.target.innerHTML);
    }
})

// const test = {
//     'display': 'flex',
//     'justify-content': 'center',
//     'align-items': 'center',
//     'width': '50px',
//     'height': '50px'
// }

const testStyle = (block) => {
    block.style.display = 'flex';
    block.style.justifyContent = 'center';
    block.style.alignItems = 'center';
    block.style.width = '50px';
    block.style.height = '50px';
    return block;
}

    for(let i = 0; i < matrix.length; i++){
        for(let j = 0, a = -1; j < matrix[i].length; j++, a++){
            let box = document.createElement('div');
            let newText = document.createTextNode(`${matrix[i][j]}`);
            box = testStyle(box);
            root.appendChild(box);
            box.appendChild(newText);
            let a = j % 2;
            let b = i % 2;
            if((i == 0) || (i == matrix[i].length-1)){

                continue;
            }
            else if((j == 0) || (j == matrix[j].length-1)){
                box.appendChild(newText);
                continue;
            }
            else if(a == b){
                box.style.background = 'black';
                box.style.color = 'black';
            } else {
                box.style.background = 'white';
                box.style.color = 'white';
            }

        }
    }








