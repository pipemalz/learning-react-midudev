import './App.css'
import { useCatImage } from './hooks/useCatImage'
import { useCatFact } from './hooks/useCatFact'

export function App () {
  const { fact, updateFact } = useCatFact()
  const { imageUrl, shortenedFact } = useCatImage({ fact })

  return (
    <main>
      <h1>Cats Facts App</h1>
      <button
        onClick={updateFact}
      >
        ↻
      </button>
      {fact && <p>{fact}</p>}
      <img
        src={imageUrl}
        alt={`Image of a cat wit the text ${shortenedFact}`}
      />
    </main>
  )
}
