function Square ({ children, index, isSelected, updateBoard }) {

  const squareClassName = isSelected ? 'square square--selected' : 'square'

  const updateBoardOnClick = () => {
    updateBoard(index)
  }

  return (
    <div 
      className={squareClassName}
      onClick={updateBoardOnClick}
    >
      {children}
    </div>
  )
}

export default Square