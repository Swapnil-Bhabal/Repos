const container = document.querySelector('.container');
const resetButton = document.querySelector('.reset');
const size = document.getElementById('size').value;
const newBox = document.querySelector('input');

function makeGrid(size) {
    container.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    container.style.gridTemplateRows = `repeat(${size}, 1fr)`;
    for (let i = 0; i < size * size; i++) {
        const boxes = document.createElement('div');
        boxes.classList.add("grid-element");
        boxes.addEventListener('mouseover', () => {
                boxes.style.backgroundColor = "black";
            })
        
        container.appendChild(boxes);
    }
}


resetButton.onclick = (e) => {
    container.innerHTML = "";
    let size = prompt("Please enter the size of grid which you desire")
    if (size === "") {
        const size = document.getElementById('size').value;
        makeGrid(size);
    } else {
        makeGrid(size)
    }
    
}


makeGrid(size)
 
newBox.addEventListener('change', () => {
    const size = document.getElementById('size').value;
    makeGrid(size);
    clearGrid();
})




