const gridSize = document.querySelector('#gridSize');
const gridSizeShow = document.querySelector('#gridSizeShow');
const gridContainer = document.querySelector('#gridContainer');

let mouseClick = false;

function click() {
    mouseClick = true;
}

function click2() {
    mouseClick = false;
}

function paintGrid(gridSystem) {
    const gridBox = document.querySelectorAll('.gridBox');
    function paintGridBox() {
        if (mouseClick == true) {
            this.classList.add('paintedGrid');
        }
    }
    for (let i = 0; i < gridSystem; i++) {
        gridBox[i].addEventListener('mouseover', paintGridBox);
    }
}

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
    paintGrid(gridSystem);
});

function createGrid() {
    gridContainer.style.cssText = `grid-template-columns: repeat(${gridSize.value}, 1fr [col-start]);`
    gridSizeShow.innerText = `${gridSize.value} x ${gridSize.value}`
    for (let i = 0; i < 256; i++) {
        const div = document.createElement('div');
        div.classList.add('gridBox');
        gridContainer.appendChild(div);
    }
    paintGrid(256);
}

createGrid();

const gridBoxSelect = document.querySelector('.gridContainer');

gridBoxSelect.addEventListener('mousedown', click)
gridBoxSelect.addEventListener('mouseup', click2)

