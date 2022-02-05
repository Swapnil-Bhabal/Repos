const container = document.querySelector('.container');
const resetButton = document.querySelector('.reset');
const size = document.getElementById('size').value;
const newBox = document.querySelector('input');
const rainbowButton = document.querySelector('.rainbow-button');
const blackButton = document.querySelector('.black-button')
const counter = 0;
if (rainbowButton.onclick === true) {
    counter = counter + 1;
}

function makeGrid(size) {
    container.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    container.style.gridTemplateRows = `repeat(${size}, 1fr)`;
    for (let i = 0; i < size * size; i++) {
        const boxes = document.createElement('div');
        boxes.classList.add("grid-element");
        boxes.addEventListener('mouseover', () => {
            boxes.style.backgroundColor = "black";
        })
        const randomNumber = Math.floor(Math.random() * 100);
        boxes.addEventListener('mouseover', () => {
        boxes.style.backgroundColor = `rgb(${randomNumber-10}% ${randomNumber-10}% ${randomNumber-10}%)`;
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

rainbowButton.onclick = () => {
    container.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    container.style.gridTemplateRows = `repeat(${size}, 1fr)`;
    for (let i = 0; i < size * size; i++) {
        const boxes = document.createElement('div');
        boxes.classList.add("grid-element");
        const randomNumber = Math.floor(Math.random() * 100);
        boxes.addEventListener('mouseover', () => {
            boxes.style.backgroundColor = `rgb(${randomNumber-10}% ${randomNumber-10}% ${randomNumber-10}%)`;
        })
        container.appendChild(boxes);
}
}

makeGrid(size)
 
newBox.addEventListener('change', () => {
    const size = document.getElementById('size').value;
    makeGrid(size);
    clearGrid();
})




