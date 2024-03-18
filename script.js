const gridBtn = document.querySelector('.gridPrompt');
const SKETCH_GRID = document.querySelector('.sketch-board');

function UserInput() {
  const USERINPUT = prompt('Please Enter the size of grid: ');
  return USERINPUT;
}


                                       
function gridMaker(gridSize){
  let gridDiv = '';
  for(let i = 0; i < gridSize; i++){
    gridDiv += "<div class ='sketch-grid'> </div>";
  }
  SKETCH_GRID.innerHTML = gridDiv;
  SKETCH_GRID.innerTEXT = gridDiv;
}


gridBtn.addEventListener('click', function() {
  let gridSize = UserInput();
  gridMaker(gridSize);
});

