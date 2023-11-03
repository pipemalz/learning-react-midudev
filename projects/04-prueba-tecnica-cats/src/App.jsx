import './App.css'
import { useEffect, useState } from 'react'

export function App () {
  const FACT_ENDPOINT = 'https://catfact.ninja/fact'
  const IMAGE_ENDPOINT = fact => `https://cataas.com/cat/says/${fact}?fontColor=white`

  const [fact, setFact] = useState({})
  const [imageUrl, setImageUrl] = useState('')

  function getWordsFromString (string, wordQty = 1) {
    return string.split(' ', wordQty)
  }

  useEffect(() => {
    fetch(FACT_ENDPOINT)
      .then(res => res.json())
      .then(data => {
        const { fact } = data
        setFact({
          fact,
          shortenedFact: getWordsFromString(fact)
        })
      })
  }, [])

  return (
    <main>
      <h1>Cats Facts App</h1>
      {fact.fact && <p>{fact.fact}</p>}
      <img
        src={IMAGE_ENDPOINT(fact.shortenedFact)}
        alt={`Image of a cat wit the text ${fact.shortenedFact}`}
      />
    </main>
  )
}
