import './GameBoard.css'
import Square from './Square'

export function GameBoard ({ board, updateBoard, turn, winner }) {
  return (
    <section className='game'>
      {
        board.map((position, index) => {
          return (
            <Square
              key={index}
              index={index}
              updateBoard={updateBoard}
              turn={turn}
              winner={winner}
            >
              {position}
            </Square>
          )
        })
      }
    </section>
  )
}
