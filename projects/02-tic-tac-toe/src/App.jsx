import './App.css'
import { useState } from 'react'
import Square from './Square'

function App() {

  const winningTable = [
    [1,2,3],
    [4,5,6],
    [7,8,9],
    [1,4,7],
    [2,5,8],
    [3,6,9],
    [1,5,9],
    [3,5,7]
  ]

  const TURNS = {X:'X', O:'O'}

  const [board, setBoard] = useState(new Array(9).fill(null))

  const [turn, setTurn] = useState(TURNS.X)

  const updateBoard = (index) => {
    if (board[index]) return
    const newBoard = structuredClone(board)
    newBoard[index] = turn
    setBoard(newBoard)

    const newTurn = turn === TURNS.X ? TURNS.O : TURNS.X
    setTurn(newTurn)
  }

  return (
    <main className='board'>
      <h1>Tic Tac Toe</h1>
      <section className='game'>
        {
          board.map((position, index) => {
            return (
              <Square 
                key={index} 
                index={index}
                updateBoard={updateBoard}
              >
                {position}
              </Square>
            )
          })
        }
      </section>

      <section className='turn'>
        <Square isSelected={turn === TURNS.X} >
          {TURNS.X}
        </Square> 
        <Square isSelected={turn === TURNS.O} >
          {TURNS.O}
        </Square> 
      </section>
    </main>
  )
}

export default App
