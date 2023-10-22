import './RestartButton.css'

export function RestartButton ({ resetGame }) {
  return (
    <button 
      className='restartButton'
      onClick={resetGame}
    >
      Resetear juego
    </button>
  )
}