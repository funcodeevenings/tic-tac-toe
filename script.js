current_player = "X";
p1=[0,1,2,6,8]


// Task -2 clean the board on restart button

function restart_game(){

document.querySelectorAll('.cell').forEach(cell => cell.innerHTML="");

}

// Task-3 on click write the players name

function handle_click(evt) {
	cell = evt.target;
  
  // check if cell is blank or not
  // run further code only if the cell is blank
  if(cell.innerHTML == ""){
  	cell.innerHTML = current_player;
    // Taks -4
		// if current player won: update_winner() -> 
    // else if match is draw: update_mathch_draw() -> check if all cells are already filled
    // else : update_current_player();
  	update_current_player();
  }
  
}

function update_current_player(){
	if(current_player=="X"){
  	current_player="O";
  }else{
  	current_player="X";
  }
	document.getElementById("status").innerHTML = "Current player is: "+current_player;

}

// Task -5
// if game status is win or draw then dont write on click





document.getElementById("status").innerHTML = "Current player is: "+current_player;
document.querySelectorAll('.cell').forEach(cell => cell.addEventListener('click', handle_click));

