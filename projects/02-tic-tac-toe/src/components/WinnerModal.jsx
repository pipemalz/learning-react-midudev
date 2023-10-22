import './WinnerModal.css'
import { RestartButton } from './RestartButton'

export function WinnerModal ({ winner, resetGame }) {

  if (winner === null) return null

  const content = winner
    ? (<p className='winnerText'>El ganador es <span>{winner}</span></p>)
    : (<p className='winnerText'>Empate</p>)
  
  return (
    <section className='winner'>
      {content}
      <RestartButton resetGame={resetGame}>Empezar de nuevo</RestartButton>
    </section>
  )
}