import './Square.css'
import { useState } from 'react'

function Square ({ children, index, turn, winner, isSelected, updateBoard }) {
  const [currentTurn, setCurrentTurn] = useState(null)

  const squareClassName = isSelected ? 'square square--selected' : 'square'

  const content = currentTurn
    ? <span style={{ opacity: '.3s' }}>{currentTurn}</span>
    : children

  const updateBoardOnClick = () => {
    updateBoard(index)
    setCurrentTurn(null)
  }

  const showTurnOnMouseOver = () => {
    if (children || winner) return
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
