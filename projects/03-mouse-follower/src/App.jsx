import './App.css'

import { useState, useEffect } from 'react'

export function App () {
  // Hooks de estados (useState)
  const [enabled, setEnabled] = useState(false)
  const [position, setPosition] = useState({ x: 0, y: 0 })

  // Hooks de efectos (useEffect)

  // Efecto para suscripción de evento al mover el mouse y modificar estado position
  useEffect(() => {
    const handlePointerMove = e => {
      const { clientX, clientY } = e
      setPosition({ x: clientX, y: clientY })
    }

    if (enabled) {
      // Suscripción a eventos dentro del useEffect
      window.addEventListener('pointermove', handlePointerMove)
    } else {
      setPosition({ x: 0, y: 0 })
    }

    // Cleanup -> se ejecuta cuando
    // Se desmonta el componente
    // Se detecta cambio en las dependencias
    return () => {
      // Limpiar eventos suscritos
      window.removeEventListener('pointermove', handlePointerMove)
    }
    // Dependencias como segundo parametro, array [dep1,dep2,...]
  }, [enabled])

  // Handlers de eventos del componente
  const toggleEnabled = () => {
    setEnabled(!enabled)
  }

  const cursorStyle = cursorType => ({ cursor: enabled ? 'none' : cursorType })

  return (
    <main className='container' style={cursorStyle('auto')}>
      <div
        className='circle'
        style={{
          top: '-25px',
          left: '-25px',
          // Posicion del circulo "mouse follower" a partir del estado position
          transform: `translate(${position.x}px, ${position.y}px)`
        }}
      />
      <button className='button' onClick={toggleEnabled} style={cursorStyle('pointer')}>
        {enabled ? 'Desactivar' : 'Activar'}
      </button>
    </main>
  )
}
