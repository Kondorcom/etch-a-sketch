const container = document.querySelector('#container');
// createGrid();
createGrid();


function createGrid(){
    
    for (let i=0; i<16; i++){
        createRow();
    }

}
function createRow(){
    const gridRow = document.createElement('div');
    gridRow.classList.add('gridRow');
    container.appendChild(gridRow);
    for (let i=0; i<16; i++){
        const gridElement = document.createElement('div');
        gridElement.classList.add('gridElement');
        gridRow.appendChild(gridElement);
    }
}
function mouseOver(){
    gridElement.target.style.color = 'black';
}
// gridElement.addEventListener("mouseover",mouseOver,false);
let allElements = document.querySelectorAll('div[class^=gridEle]');
for (let i = 0; i < allElements.length; i++) {
    allElements[i].addEventListener('mouseover', function() {
    console.clear();
    console.log("You clicked:", this);
    this.style.backgroundColor = 'black';     
         });
     }

// function createDiv(){
//     const gridRow = document.createElement('div');
//     gridRow.classList.add('gridRow');
//     container.appendChild(gridRow);
// }