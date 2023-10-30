import { useEffect, useState } from 'react'

export function App () {
  const FACT_ENDPOINT = 'https://catfact.ninja/fact'
  const IMAGE_ENDPOINT = fact => `https://cataas.com/cat/says/${fact}?fontColor=white`

  const [fact, setFact] = useState('')
  const [image, setImage] = useState({})

  async function getFact (url) {
    try {
      const res = await fetch(url)
      const data = await res.json()
      const fact = await data.fact
      return fact
    } catch (error) {
      throw new Error(error)
    }
  }

  // async function getImage (url) {
  //   const res = await fetch(url)
  //   const data = await res.json()
  //   const image = await data
  //   return (image)
  // }

  function getFisrstWordFromString (string) {
    return string.split(' ')[0]
  }

  useEffect(() => {
    getFact(FACT_ENDPOINT).then(fact => setFact(getFisrstWordFromString(fact)))
  }, [])

  useEffect(() => {
    // getImage(IMAGE_ENDPOINT).then(image => setImage(image))
    setImage(IMAGE_ENDPOINT(fact))
  }, [fact])

  return (
    <>
      {fact && <h1>{fact}</h1>}
      <img src={image} />
    </>
  )
}
