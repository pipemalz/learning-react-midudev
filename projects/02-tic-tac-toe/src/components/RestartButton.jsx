import './RestartButton.css'

export function RestartButton ({ children, resetGame }) {
  return (
    <button 
      className='restartButton'
      onClick={resetGame}
    >
      {children}
    </button>
  )
}