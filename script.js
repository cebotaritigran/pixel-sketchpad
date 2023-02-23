function createGrid() {
    const gridContainer = document.querySelector('#gridContainer');

    for (let i = 1; i < 257; i++) {
        const div = document.createElement('div');
        div.style.cssText = "border: 1px solid black; height: 25px; width: 25px";
        div.classList.add('gridEffect', 'gridBox');
        div.setAttribute("draggable", "false");
        gridContainer.appendChild(div);
    }
}

createGrid();

function paintGrid() {
    const gridBox = document.querySelectorAll('.gridBox');
    function paintGridBox() {
        this.classList.add('painted');
    }

    for (const box of gridBox) {
        box.addEventListener('mouseover', paintGridBox);
    }
}

paintGrid();

