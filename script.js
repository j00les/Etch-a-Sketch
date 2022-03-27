
let grid;

function gridMaker(size) {
    // The grid maker
    const board = document.querySelector('.board');
    board.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    board.style.gridTemplateRows = `repeat(${size}, 1fr)`;
    
    // Clear out any existing square that are on the board 
    const clearGrid = board.querySelectorAll('div');
    clearGrid.forEach((div) => div.remove());
    
    // Loops depends on the size input
    for (let i = 0; i < size * size; i++) {
        grid = document.createElement('div')
        grid.addEventListener('mouseover', initialGridColor)
        grid.style.cssText =
        'background-color:white; border: 0.2px solid lightgray';
        board.appendChild(grid);
    }
};


// User input 
function changeSize(input) {
    
    if (input <= 64) {
        gridMaker(input)
    } else {
        console.log('Too many squares')
    }
}


// Function to change the grid color -----------------------------
let color = 'white';

function initialGridColor() {
    if (boardClick) {
        if (color === 'random') {
            this.style.background = `hsl(${Math.random() * 360}, 50%, 80%)`
        } else {
            this.style.backgroundColor = color;
            
        }
    }
    
}

function changeColor(choice) {
    color = choice
}

//  ---------------------------------------------


function resetBoard() {
    const board = document.querySelector('.board');
    const clearGrid = board.querySelectorAll('div')
    clearGrid.forEach((div) => div.style.backgroundColor = 'white');

    
}

// Brush mode active or inactive ----------------

let boardClick = true

document.querySelector(".board").addEventListener('click', (e) => {
    if(e.target.tagName != 'button'){
        boardClick = !boardClick
        if (boardClick == true) {
            document.querySelector('.mode').textContent = 'Active'
        } else {
            document.querySelector('.mode').textContent = 'Deactive'
        }
    }
    
})

// -----------------------------------