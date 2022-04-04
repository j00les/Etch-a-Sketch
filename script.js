
const sizeValue = document.querySelector('.sizeValue')
const gridSlider = document.querySelector('.gridSlider')
const randomBtn = document.querySelector('.randomBtn');
const eraseBtn = document.querySelector('.eraseBtn');
const resetBtn = document.querySelector('.resetBtn');
const colorPicker = document.querySelector('.colorPicker');
const board = document.querySelector(".board");
let boardClick = true;
let color = 'white';


randomBtn.onclick = () => changeColor('random');
eraseBtn.onclick = () => changeColor('white');
resetBtn.onclick = () => resetBoard();
colorPicker.onchange = (e) => changeColor(e.target.value);
gridSlider.onmousemove = (e) => updateSizeValue(e.target.value);
gridSlider.onchange = (e) => changeSize(e.target.value);
board.addEventListener('click', (e) => {
    if (e.target.tagName != 'button') {
        boardClick = !boardClick;
    }
});


// The grid maker
function gridMaker(size) {
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
        grid.addEventListener('mouseover', initialColor)
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
};

// Change grid color 
function initialColor() {
    if (boardClick) {
        if (color === 'random') {
            this.style.background = `hsl(${Math.random() * 360}, 50%, 80%)`
        } else {
            this.style.backgroundColor = color;

        }
    }

};


function changeColor(choice) {
    color = choice
};


// Reset the board 
function resetBoard() {
    const board = document.querySelector('.board');
    const clearGrid = board.querySelectorAll('div')
    clearGrid.forEach(div => div.style.backgroundColor = 'white');
};


function updateSizeValue(value) {
    sizeValue.innerHTML = `${value} x ${value}`
};




