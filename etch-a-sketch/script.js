const DEFAULT_SIZE = 16;
const DEFAULT_COLOR = "black";

let currentColor = DEFAULT_COLOR;
let currentSize = DEFAULT_SIZE;

const container = document.querySelector('.container');
const resetButton = document.querySelector('.reset');
const size = document.getElementById('size');
const newBox = document.querySelector('input');
const rainbowButton = document.querySelector('.rainbow-button');
const blackButton = document.querySelector('.black-button');

rainbowButton.onclick = () => setColor('rainbow');
blackButton.onclick = () => setColor('black');
size.onchange = (e) => setSize(e.target.value);
resetButton.onclick = () => reloadGrid();


function setColor(newColor) {
    currentColor = newColor;
    reloadGrid();
}

function setSize(newSize) {
    currentSize = newSize;
    reloadGrid();
}




function makeGrid(size) {
    container.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    container.style.gridTemplateRows = `repeat(${size}, 1fr)`;
    for (let i = 0; i < size * size; i++) {
        const boxes = document.createElement('div');
        boxes.classList.add("grid-element");
        boxes.addEventListener('mouseover', setFinalColor)
        container.appendChild(boxes);
    }    
} 


function setFinalColor() {
    if (currentColor === 'rainbow') {
        const rRandomNum = Math.floor(Math.random() * 100);
        const gRandomNum = Math.floor(Math.random() * 100);
        const bRandomNum = Math.floor(Math.random() * 100);
        this.style.backgroundColor = `rgb(${rRandomNum-10}% ${gRandomNum-10}% ${bRandomNum-10}%)`;
    } else {
        this.style.backgroundColor = currentColor;
    }
}

function clearGrid() {
    container.innerHTML = "";
}

function reloadGrid() {
    clearGrid();
    makeGrid(currentSize);
}

    





makeGrid(currentSize);




