const gridContainer = document.querySelector('#gridContainer');
let gridSystem = 16*16;
function createGrid() {
    const gridContainer = document.querySelector('#gridContainer');
    for (let i = 0; i < gridSystem; i++) {
        const div = document.createElement('div');
        div.style.cssText = "border: 0px solid black; height: 25px; width: 25px";
        div.classList.add('gridEffect', 'gridBox');
        div.setAttribute("id", i);
        gridContainer.appendChild(div);
    }
}

createGrid();
let x = false;
    function click() {
        if(x == true) {
            x = false;
        } else {
            x = true;
        }
    }
function paintGrid() {
    const body = document.querySelector('body');
    const gridBox = document.querySelectorAll('.gridBox');
    
    
    function paintGridBox() {
        if(x == true){
            this.classList.add('painted');
        }
        
    }
    for(let i = 0; i < gridSystem; i++){
        gridBox[i].addEventListener('mouseover', paintGridBox);
    }
    

    /*
    for (const box of gridBox) {
        box.addEventListener('mouseover', paintGridBox);
    }
    */

}


paintGrid();
window.addEventListener('click', click)

