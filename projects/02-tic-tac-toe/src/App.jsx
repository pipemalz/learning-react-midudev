import './App.css'
import { useState } from 'react'
import Square from './Square'

function App() {

  const turns = {X:'X', O:'O'}

  const board = new Array(9).fill(null)

  const [turn, setTurn] = useState(turns.X)

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
                turn={turn}
              />
            )
          })
        }
      </section>
    </main>
  )
}

export default App
