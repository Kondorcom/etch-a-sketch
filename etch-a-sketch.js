const container = document.querySelector('#container');
// createGrid();
createGrid(16);
hoverDivs();

function createGrid(size){
        for (let i=0; i<size; i++){
        createRow(size);
    }
}
function createRow(rowSize){
    const gridRow = document.createElement('div');
    gridRow.classList.add('gridRow');
    container.appendChild(gridRow);
    for (let i=0; i<rowSize; i++){
        const gridElement = document.createElement('div');
        gridElement.classList.add('gridElement');
        gridRow.appendChild(gridElement);
    }
}
function hoverDivs(){


let allElements = document.querySelectorAll('div[class^=gridEle]');
for (let i = 0; i < allElements.length; i++) {
    allElements[i].addEventListener('mouseover', function() {
    console.clear();
    console.log("You clicked:", this);
    let randomClr = randomColor();

    console.log("color:", randomClr);
    this.style.backgroundColor = randomClr;  
    // this.style.backgroundColor = 'black';  
    // this.style.backgroundColor = 'rgb('+66+','+107+','+87+')';
       
         });
     }
    }
function randomColor(){
    const randomBetween = (min, max) => min + Math.floor(Math.random() * (max - min + 1));
const r = randomBetween(0, 255);
const g = randomBetween(0, 255);
const b = randomBetween(0, 255);
const rgb2 = "rgb("+[r,g,b].join() + ")";
const rgb = `rgb('+${r}+','+${g}+','+${b}+')`; 
    return rgb2;
}

function gridSize(){
   let grid = prompt('Please enter grid size', 20);
   if (grid < 2 || grid > 100){
    grid = 20;
   }
   
   while (container.firstChild){
    container.removeChild(container.lastChild);
    console.log('removing child');
   }
   createGrid(grid);
   hoverDivs();
}