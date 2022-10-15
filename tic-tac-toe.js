window.addEventListener('load', () => {
  let squares = documentquerySelector('#board');
  let count = 0;
  let arr = [];

  for (const child of squares.children) {
       child.classList.add('square');
       child.addEventListener('click' , (e) =>{
        if (count%2 == 0){
            e.target.innerHTML ='X';
            child.classList.add('x');
            arr.push('X');
        }  else{
            e.target.innerHTML ='O';
            child.classList.add('O');
            arr.push('O');
        }
        count++;
       })

       startGame()

restartButton.addEventListener('click', startGame)

function startGame() {
	isPlayer_O_Turn = false
	cellElements.forEach(cell => {
		cell.classList.remove(PLAYER_X_CLASS)
		cell.classList.remove(PLAYER_O_CLASS)
		cell.removeEventListener('click', handleCellClick)
		cell.addEventListener('click', handleCellClick, { once: true })
	})
	setBoardHoverClass()
	winningMessageElement.classList.remove('show')
}
function handleCellClick(e) {
	const cell = e.target
	const currentClass = Player_O_Turn ? PLAYER_O_CLASS : PLAYER_X_CLASS
	placeMark(cell, currentClass)
	if (checkWin(currentClass)) {
		endGame(false)
	} else if (isDraw()) {
		endGame(true)
	} else {
		swapTurns()
		setBoardHoverClass()
	}
}
function handleCellClick(e) {
	const cell = e.target
	const currentClass = Player_O_Turn ? PLAYER_O_CLASS : PLAYER_X_CLASS
	placeMark(cell, currentClass)
	if (checkWin(currentClass)) {
		endGame(false)
	} else if (isDraw()) {
		endGame(true)
	} else {
		swapTurns()
		setBoardHoverClass()
	}
}