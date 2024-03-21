const gridBtn = document.querySelector('.gridPrompt');
const SKETCH_BOARD = document.querySelector('.sketch-board');


function UserInput() {
  const USERINPUT = prompt('Please Enter the size of grid: ');
  return USERINPUT;
}


                                       
function gridMaker(gridSize){
  let gridDiv = '';
  for(let i = 0; i < (gridSize * gridSize); i++){
    gridDiv += "<div class ='sketch-box'> </div>";
  }
  SKETCH_BOARD.innerHTML = gridDiv;
  let tocolor = document.querySelectorAll('.sketch-box');
  for (let i =0; i < (gridSize * gridSize); i++) {
  tocolor[i].addEventListener('mouseover', function() {
    tocolor[i].style.backgroundColor = "blue";
});
}

}



gridBtn.addEventListener('click', function() {
  let gridSize = UserInput();
  gridSize = Math.floor(gridSize);
  gridMaker(gridSize);
});





