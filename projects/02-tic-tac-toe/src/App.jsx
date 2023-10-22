import './App.css'

import { useState } from 'react'

import confetti from 'canvas-confetti'

import { EMPTY_BOARD, TURNS } from './constants'

import { checkEndGameFrom, checkWinnerFrom } from './logic/board'

import { saveGameToStorage, resetGameToStorage } from './storage'

import { WinnerModal } from './components/WinnerModal'
import { RestartButton } from './components/RestartButton'
import { TurnIndicator } from './components/TurnIndicator'
import { GameBoard } from './components/GameBoard'

function App() {

  const [board, setBoard] = useState(() => {
    return JSON.parse(localStorage.getItem('board')) ?? EMPTY_BOARD
  })

  const [turn, setTurn] = useState(() => {
    return JSON.parse(localStorage.getItem('turn')) ?? TURNS.X
  })

  const [winner, setWinner] = useState(() => {
    const currentWinner = checkWinnerFrom(board)
    if(currentWinner !== null) {
      return currentWinner
    } else if (checkEndGameFrom(board)){
      return false
    } else {
      return null
    }
  })

  const updateBoard = (index) => {
    
    //Verificar si ya hay un turno en la posicion de la board o si ya existe un ganador, para detener el juego.
    if (board[index] || winner) return 
    
    const newBoard = structuredClone(board)
    newBoard[index] = turn
    setBoard(newBoard)

    const newTurn = turn === TURNS.X ? TURNS.O : TURNS.X
    setTurn(newTurn)

    saveGameToStorage({
      board: newBoard,
      turn: newTurn
    })

    const newWinner = checkWinnerFrom(newBoard)

    if(newWinner) {
      confetti()
      setWinner(newWinner)
    }else if (checkEndGameFrom(newBoard)){
      setWinner(false)
    }
  }

  const resetGame = () => {
    resetGameToStorage()
    setBoard(EMPTY_BOARD)
    setTurn(TURNS.X)
    setWinner(null)
  }

  return (
    <main className='board'>
      <h1>Tic Tac Toe</h1>
      <RestartButton resetGame={resetGame}>Resetear juego</RestartButton>
      <GameBoard board={board} updateBoard={updateBoard} turn={turn} winner={winner} />
      <TurnIndicator turn={turn} />
      <WinnerModal winner={winner} resetGame={resetGame}/>
    </main>
  )
}

export default App
