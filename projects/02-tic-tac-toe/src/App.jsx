import './App.css'

import { useState } from 'react'

import confetti from 'canvas-confetti'

import { TURNS } from './constants'

import { checkEndGameFrom, checkWinnerFrom } from './logic/board'
import { WinnerModal } from './components/WinnerModal'
import { RestartButton } from './components/RestartButton'
import { TurnIndicator } from './components/TurnIndicator'
import { GameBoard } from './components/GameBoard'

function App() {

  const [board, setBoard] = useState(new Array(9).fill(null))

  const [turn, setTurn] = useState(TURNS.X)

  const [winner, setWinner] = useState(null)

  const updateBoard = (index) => {
    if (board[index] || winner) return
    const newBoard = structuredClone(board)
    newBoard[index] = turn
    setBoard(newBoard)

    const newTurn = turn === TURNS.X ? TURNS.O : TURNS.X
    setTurn(newTurn)

    const newWinner = checkWinnerFrom(newBoard)

    if(newWinner) {
      confetti()
      setWinner(newWinner)
    }else if (checkEndGameFrom(newBoard)){
      setWinner(false)
    }
  }

  const resetGame = () => {
    setBoard(new Array(9).fill(null))
    setTurn(TURNS.X)
    setWinner(null)
  }

  return (
    <main className='board'>
      <h1>Tic Tac Toe</h1>
      <RestartButton resetGame={resetGame}/>
      <GameBoard board={board} updateBoard={updateBoard} turn={turn} />
      <TurnIndicator turn={turn} />
      <WinnerModal winner={winner} resetGame={resetGame}/>
    </main>
  )
}

export default App
