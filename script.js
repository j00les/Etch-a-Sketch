
const blackBtn = document.querySelector('.blackBtn');
const grayBtn = document.querySelector('.grayBtn');
const randomBtn = document.querySelector('.randomBtn');
const eraseBtn = document.querySelector('.eraseBtn');
const resetBtn = document.querySelector('.resetBtn')


grayBtn.onclick = () => changeColor('gray');
blackBtn.onclick = () => changeColor('black');
randomBtn.onclick = () => changeColor('random');
eraseBtn.onclick = () => changeColor('white');
resetBtn.onclick = () => resetBoard();


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
        let grid;
        grid = document.createElement('div')
        grid.addEventListener('mouseover', initialGridColor)
        grid.style.cssText =
            'background-color:white; border: 0.2px solid lightgray';
        board.appendChild(grid);
    }
};



// User input
function changeSize(value) {
    if (value <= 64) {
        gridMaker(value)
    } else {
        console.log('Too many squares')
    }
}





// Change grid color 

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


// Reset the board 
function resetBoard() {
    const board = document.querySelector('.board');
    const clearGrid = board.querySelectorAll('div')
    clearGrid.forEach((div) => div.style.backgroundColor = 'white');


}





// Brush mode  
let boardClick = true

document.querySelector(".board").addEventListener('click', (e) => {
    if (e.target.tagName != 'button') {
        boardClick = !boardClick
        if (boardClick == true) {
            document.querySelector('.mode').textContent = 'Active'
        } else {
            document.querySelector('.mode').textContent = 'Inactive'
        }
    }

})


// Grid size via slider
const sizeValue = document.querySelector('.sizeValue')
const gridSlider = document.querySelector('.gridSlider')

gridSlider.onmousemove = (e) => updateSizeValue(e.target.value)
gridSlider.onchange = (e) => changeSize(e.target.value)



function updateSizeValue(value) {
    sizeValue.innerHTML = `${value} x ${value}`
}