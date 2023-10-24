import './App.css'

import { useState, useEffect } from 'react'

export function App () {
  // Hooks de estados (useState)
  const [enabled, setEnabled] = useState(false)
  const [position, setPosition] = useState({ x: 0, y: 0 })

  // Hooks de efectos (useEffect)
  useEffect(() => {
    const handlePointerMove = e => {
      const { clientX, clientY } = e
      setPosition({ x: clientX, y: clientY })
    }

    if (enabled) {
      // Suscripción a eventos dentro del useEffect
      window.addEventListener('pointermove', handlePointerMove)
    }

    // Cleanup -> se ejecuta cuando
    // Se desmonta el componente
    // Se detecta cambio en las dependencias
    return () => {
      // Limpiar eventos suscritos
      window.removeEventListener('pointermove', handlePointerMove)
      setPosition({ x: 0, y: 0 })
    }
    // Dependencias como segundo parametro, array [dep1,dep2,...]
  }, [enabled])

  // Handlers de eventos del componente
  const setEnabledOnClick = () => {
    setEnabled(!enabled)
  }

  return (
    <main className='container'>
      <div
        className='circle'
        style={{
          top: '-25px',
          left: '-25px',
          transform: `translate(${position.x}px, ${position.y}px)`
        }}
      />
      <h1>La Cimarrona E.S.P</h1>
      <button className='button' onClick={setEnabledOnClick}>
        {enabled ? 'Desactivar' : 'Activar'}
      </button>
    </main>
  )
}
