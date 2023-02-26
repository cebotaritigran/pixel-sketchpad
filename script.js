const gridSize = document.querySelector('#gridSize');
const gridSizeShow = document.querySelector('#gridSizeShow');
const gridContainer = document.querySelector('#gridContainer');
const colorPicker = document.querySelector('#colorPicker');

// Checking if the mouse button is down
let mouseClick = false;
let shadeColor = 10;
function mouseDown() {
    mouseClick = true;
}

function mouseUp() {
    mouseClick = false;
    shadeColor = 10;
}

const gridBoxSelect = document.querySelector('.gridContainer');
gridBoxSelect.addEventListener('mousedown', mouseDown)
gridBoxSelect.addEventListener('mouseup', mouseUp)


// pick color
function pickColor() {
    colorPicker.setAttribute('value', this.value);
    let gridSystem = gridSize.value * gridSize.value
    shadeColor = 0;
    manipulateGrid(gridSystem, this.value)

}
colorPicker.addEventListener('change', pickColor);

// brush
let brushOn = false;

function brushGrid() {
    if (brushOn) {
        brushOn = false;
        brush.classList.remove('buttonClicked')
    } else {
        brushOn = true;
        eraserOn = false;
        eraser.classList.remove('buttonClicked')
        rainbowOn = false;
        rainbow.classList.remove('buttonClicked')
        shadeOn = false;
        shade.classList.remove('buttonClicked')
        brush.classList.add('buttonClicked')
    }
}

const brush = document.querySelector('#brush');
brush.addEventListener('click', brushGrid)

// eraser
let eraserOn = false;

function eraseGrid() {
    if (eraserOn) {
        eraserOn = false;
        eraser.classList.remove('buttonClicked')
    } else {
        eraserOn = true;
        brushOn = false;
        brush.classList.remove('buttonClicked')
        rainbowOn = false;
        rainbow.classList.remove('buttonClicked')
        shadeOn = false;
        shade.classList.remove('buttonClicked')
        eraser.classList.add('buttonClicked')
    }
}

const eraser = document.querySelector('#eraser');
eraser.addEventListener('click', eraseGrid)

// rainbow
let rainbowOn = false;
function rainbowGrid() {
    if (rainbowOn) {
        rainbowOn = false;
        rainbow.classList.remove('buttonClicked')
    } else {
        rainbowOn = true;
        eraserOn = false;
        eraser.classList.remove('buttonClicked')
        brushOn = false;
        brush.classList.remove('buttonClicked')
        shadeOn = false;
        shade.classList.remove('buttonClicked')
        rainbow.classList.add('buttonClicked')
    }
}

const rainbow = document.querySelector('#rainbow');
rainbow.addEventListener('click', rainbowGrid)

// shade brush
let shadeOn = false;
function shadeGrid() {
    if (shadeOn) {
        shadeOn = false;
        shade.classList.remove('buttonClicked')
    } else {
        shadeOn = true;
        eraserOn = false;
        eraser.classList.remove('buttonClicked')
        rainbowOn = false;
        rainbow.classList.remove('buttonClicked')
        brushOn = false;
        brush.classList.remove('buttonClicked')
        shade.classList.add('buttonClicked')
    }
}

const shade = document.querySelector('#shade');
shade.addEventListener('click', shadeGrid)

// Reset button
const reset = document.querySelector('#reset');
reset.addEventListener('click', () => {
    const allGridBoxes = document.querySelectorAll('.gridBox');
    allGridBoxes.forEach(gridBox => {
        gridBox.setAttribute('style', '');
        shadeColor = 0;
    });
})

// Adds a class to each and every div we created only if mouse button is down and if mouse is over that div
// which we check with event listener on that div
// and paint the that div to black or erase if eraser button is on



function manipulateGrid(gridSystem, color) {

    const gridBox = document.querySelectorAll('.gridBox');
    function manipulateGridBox(e) {
        if (mouseClick == true && brushOn == true && eraserOn == false) {
            this.style.cssText = `background-color: ${color};`
        }

        if (mouseClick == true && shadeOn == true) {
            e.target.style.cssText = `background-color: ${color};filter: opacity(${shadeColor += 0.1}%)`
        }

        if (mouseClick == true && eraserOn == true && brushOn == false) {
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

