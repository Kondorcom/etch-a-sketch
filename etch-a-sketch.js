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
    this.style.backgroundColor = 'black';     
         });
     }
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