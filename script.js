

const gridMaker = (size) => {
    const board = document.querySelector('.board');
    board.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    board.style.gridTemplateRows = `repeat(${size}, 1fr)`;

    for (let i = 0; i < 256; i++) {
        let grid = document.createElement('div')
        grid.style.backgroundColor = 'blue'
        board.appendChild(grid)
    }
}

