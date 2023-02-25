const gridSize = document.querySelector('#gridSize');
const gridSizeShow = document.querySelector('#gridSizeShow');
const gridContainer = document.querySelector('#gridContainer');

// Checking if the mouse button is down
let mouseClick = false;

function mouseDown() {
    mouseClick = true;
}

function mouseUp() {
    mouseClick = false;
}

const gridBoxSelect = document.querySelector('.gridContainer');
gridBoxSelect.addEventListener('mousedown', mouseDown)
gridBoxSelect.addEventListener('mouseup', mouseUp)

// Adds a class to each and every div we created only if mouse button is down and if mouse is over that div
// which we check with event listener on that div
// and paint the that div to black or erase if eraser button is on
function manipulateGrid(gridSystem) {
    const gridBox = document.querySelectorAll('.gridBox');
    function manipulateGridBox() {
        if (mouseClick == true) {
            this.classList.add('paintedGrid');
        }
        if(mouseClick == true && eraserOn == true){
            this.classList.remove('paintedGrid');
        }
    }
    for (let i = 0; i < gridSystem; i++) {
        gridBox[i].addEventListener('mouseover', manipulateGridBox);
    }
}

let eraserOn = false;

function eraseGrid() {
    if (eraserOn) {
        eraserOn = false;
    } else {
        eraserOn= true;
    }
}

const eraser = document.querySelector('#eraser');
eraser.addEventListener('click', eraseGrid)


// we add an event listener to our input range html element and whenever there is an input we go ahead and clear
// all the divs that were created when page is load in default and the we create all divs again with given size
gridSize.addEventListener('input', function (e) {
    gridContainer.replaceChildren();
    let gridSystem = gridSize.value * gridSize.value
    gridContainer.style.cssText = `grid-template-columns: repeat(${gridSize.value}, 1fr [col-start]);`
    gridSizeShow.innerText = `${gridSize.value} x ${gridSize.value}`
    for (let i = 0; i < gridSystem; i++) {
        const div = document.createElement('div');
        div.classList.add('gridBox');
        gridContainer.appendChild(div);
    }
    manipulateGrid(gridSystem);
});

function createGrid() {
    gridContainer.style.cssText = `grid-template-columns: repeat(${gridSize.value}, 1fr [col-start]);`
    gridSizeShow.innerText = `${gridSize.value} x ${gridSize.value}`
    for (let i = 0; i < 256; i++) {
        const div = document.createElement('div');
        div.classList.add('gridBox');
        gridContainer.appendChild(div);
    }
    manipulateGrid(256);
}

createGrid();

