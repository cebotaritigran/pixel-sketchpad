const gridSize = document.querySelector('#gridSize');
const gridSizeShow = document.querySelector('#gridSizeShow');
const gridContainer = document.querySelector('#gridContainer');
const colorPicker = document.querySelector('#colorPicker');

// Checking if the mouse button is down
let mouseClick = false;

let shadeColor = 0;
function mouseDown() {
    mouseClick = true;
    shadeColor += 5;
}

function mouseUp() {
    mouseClick = false;
}

const gridBoxSelect = document.querySelector('.gridContainer');
gridBoxSelect.addEventListener('mousedown', mouseDown)
gridBoxSelect.addEventListener('mouseup', mouseUp)


// pick color
function pickColor() {

    colorPicker.setAttribute('value', this.value);
    let gridSystem = gridSize.value * gridSize.value
    manipulateGrid(gridSystem, this.value)

}
colorPicker.addEventListener('change', pickColor);

// brush
let brushOn = false;

function brushGrid() {
    if (brushOn) {
        brushOn = false;
        brush.style.cssText = 'background-color: white;'
    } else {
        brushOn = true;
        brush.style.cssText = 'background-color: grey;'
    }
}

const brush = document.querySelector('#brush');
brush.addEventListener('click', brushGrid)

// eraser
let eraserOn = false;

function eraseGrid() {
    if (eraserOn) {
        eraserOn = false;
        eraser.style.cssText = 'background-color: white;'
    } else {
        eraserOn = true;
        eraser.style.cssText = 'background-color: grey;'
    }
}

const eraser = document.querySelector('#eraser');
eraser.addEventListener('click', eraseGrid)

// rainbow
let rainbowOn = false;
function rainbowGrid() {
    if (rainbowOn) {
        rainbowOn = false;
        rainbow.style.cssText = 'background-color: white;'
    } else {
        rainbowOn = true;
        rainbow.style.cssText = 'background-color: grey;'
    }
}

const rainbow = document.querySelector('#rainbow');
rainbow.addEventListener('click', rainbowGrid)

// shade brush
let shadeOn = false;
function shadeGrid() {
    if (shadeOn) {
        shadeOn = false;
        shade.style.cssText = 'background-color: white;'
    } else {
        shadeOn = true;
        shade.style.cssText = 'background-color: grey;'
    }
}

const shade = document.querySelector('#shade');
shade.addEventListener('click', shadeGrid)

// Adds a class to each and every div we created only if mouse button is down and if mouse is over that div
// which we check with event listener on that div
// and paint the that div to black or erase if eraser button is on

function manipulateGrid(gridSystem, color) {
    const gridBox = document.querySelectorAll('.gridBox');
    function manipulateGridBox() {
        if (mouseClick == true && brushOn == true && eraserOn == false) {
            this.style.cssText = `background-color: ${color};`
        }
        if (mouseClick == true && shadeOn == true) {
            this.style.cssText = `background-color: ${color};filter: opacity(${shadeColor}%)`
        }
        if (mouseClick == true && eraserOn == true && brushOn == false) {
            this.classList.remove('paintedGrid');
            this.style.cssText = `background-color: aliceblue;`
        }
        if (mouseClick == true && rainbowOn == true && brushOn == false && eraserOn == false) {
            const color = ['#9400D3', '#4B0082', '#0000FF', '#00FF00', '#FFFF00', '#FF7F00', '#FF0000'];
            let randomColor = color[Math.floor(Math.random() * color.length)];
            this.style.cssText = `background-color: ${randomColor}`
        }
    }
    for (let i = 0; i < gridSystem; i++) {
        gridBox[i].addEventListener('mouseover', manipulateGridBox);
    }
}

// we add an event listener to our input range html element and whenever there is an input we go ahead and clear
// all the divs that were created when page is load in default and the we create all divs again with given size
gridSize.addEventListener('input', function (e) {
    gridContainer.replaceChildren();
    color = colorPicker.value;
    let gridSystem = gridSize.value * gridSize.value
    gridContainer.style.cssText = `grid-template-columns: repeat(${gridSize.value}, 1fr [col-start]);`
    gridSizeShow.innerText = `${gridSize.value} x ${gridSize.value}`
    for (let i = 0; i < gridSystem; i++) {
        const div = document.createElement('div');
        div.classList.add('gridBox');
        gridContainer.appendChild(div);
    }
    manipulateGrid(gridSystem, color);
});

function createGrid() {
    gridContainer.style.cssText = `grid-template-columns: repeat(${gridSize.value}, 1fr [col-start]);`
    color = colorPicker.value;
    gridSizeShow.innerText = `${gridSize.value} x ${gridSize.value}`
    for (let i = 0; i < 256; i++) {
        const div = document.createElement('div');
        div.classList.add('gridBox');
        gridContainer.appendChild(div);
    }
    manipulateGrid(256, color);
}

createGrid();

