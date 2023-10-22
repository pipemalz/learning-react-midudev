import './Square.css'
import { useState } from 'react'

function Square ({ children, index, turn, isSelected, updateBoard }) {

  const [currentTurn, setCurrentTurn] = useState(null)

  const squareClassName = isSelected ? 'square square--selected' : 'square'

  const content = currentTurn
    ? <span style={{opacity: ".3"}}>{currentTurn}</span>
    : children

  const updateBoardOnClick = () => {
    updateBoard(index)
    setCurrentTurn(null)
  }

  const showTurnOnMouseOver = () => {
    if (children) return
    setCurrentTurn(turn)
  }

  const hideTurnOnMouseLeave = () => {
    setCurrentTurn(null)
  }

  return (
    <div 
      className={squareClassName}
      onClick={updateBoardOnClick}
      onMouseOver={showTurnOnMouseOver}
      onMouseLeave={hideTurnOnMouseLeave}
    >
      {content}
    </div>
  )
}

export default Square