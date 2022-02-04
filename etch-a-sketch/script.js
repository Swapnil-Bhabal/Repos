const container = document.querySelector('.container');
const resetButton = document.querySelector('.reset');

function makeGrid(rows, columns) {
    container.style.gridTemplateColumns = `repeat(${rows}, 1fr)`;
    container.style.gridTemplateRows = `repeat(${columns}, 1fr)`;
    for (let i = 0; i < rows * columns; i++) {
        const boxes = document.createElement('div');
        boxes.classList.add("grid-element");
        boxes.addEventListener('mouseover', (event) => {
                boxes.style.backgroundColor = "black";
            }) 
        container.appendChild(boxes);
    }
}

resetButton.onclick = () => {
    container.innerHTML = "";
}




makeGrid(16, 16)