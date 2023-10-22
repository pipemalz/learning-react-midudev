export function saveGameToStorage ({ board, turn }) {
  localStorage.setItem('board', JSON.stringify(board))
  localStorage.setItem('turn', JSON.stringify(turn))
}

export function resetGameToStorage () {
  localStorage.removeItem('board')
  localStorage.removeItem('turn')
}