//variables
const table = document.getElementById("pixel_canvas");
const colorPicker = document.getElementById("colorPicker");
var Height, Width;

//grid drawing
const sizePicker = document.querySelector("#sizePicker");
sizePicker.addEventListener("submit", function(e) {
    e.preventDefault();
    makeGrid();
});

function makeGrid() {

  //clear
  table.innerHTML = '';

  //obtain values for height and width
  gridHeight = document.getElementById("input-height").value;
  gridWidth = document.getElementById("input-width").value;
  for (let i = 0; i < Height; i++) {
    let row = table.insertRow(i);
    for (let j = 0; j < Width; j++) {
      let cell = row.insertCell(j);
      cell.addEventListener("click", function(event) {
        cell.style.backgroundColor = colorPicker.value;
      });
      cell.addEventListener("dblclick", function(event){
      	cell.style.backgroundColor = "";
      });
    }
  }
}
