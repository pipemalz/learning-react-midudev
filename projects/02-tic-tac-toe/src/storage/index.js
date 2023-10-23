export function saveGameToStorage ({ board, turn }) {
  window.localStorage.setItem('board', JSON.stringify(board))
  window.localStorage.setItem('turn', JSON.stringify(turn))
}

export function resetGameToStorage () {
  window.localStorage.removeItem('board')
  window.localStorage.removeItem('turn')
}
