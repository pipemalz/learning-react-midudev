import './GameBoard.css'
import Square from './Square'

export function GameBoard ({ board, updateBoard, turn }) {
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
            >
              {position}
            </Square>
          )
        })
      }
    </section>
  )
}