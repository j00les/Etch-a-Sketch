
const gridMaker = (size) => {
    const board = document.querySelector('.board');
   
    // Clear out any existing square that are on the board 
    let boardGrids = board.querySelectorAll('div');
    boardGrids.forEach((div) => div.remove());
   
    board.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    board.style.gridTemplateRows = `repeat(${size}, 1fr)`;

    for (let i = 0; i < size * size; i++) {
        let grid = document.createElement('div');
        
        // Grid color
        grid.addEventListener('mouseover', () => {
            grid.style.backgroundColor = 'blue'
        });
        
        grid.style.backgroundColor = 'black';
        board.appendChild(grid);
    }
};



const changeSize = (input) => {
    if (input <= 64 ) {
        gridMaker(input)
    } else {
        console.log('Too many squares')
    }
}

