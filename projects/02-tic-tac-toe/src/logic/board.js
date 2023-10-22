import { COMBOS } from '../constants'

export const checkWinnerFrom = (boardToCheck) => {
  for(const combo of COMBOS){
    const [a, b, c] = combo
    if ( 
        boardToCheck[a]
        && boardToCheck[a] == boardToCheck[b] 
        && boardToCheck[b] == boardToCheck[c] 
      ){
      return boardToCheck[a]
    }
  }
  return null
}

export const checkEndGameFrom = boardToCheck => {
  return boardToCheck.every(pos=>pos!==null)
}