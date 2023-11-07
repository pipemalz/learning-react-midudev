import { useEffect, useState } from 'react'
import { IMAGE_ENDPOINT } from '../constants'
import { getWordsFromString } from '../utils/getWordsFromString'

export function useCatImage ({ fact }) {
  const [imageUrl, setImageUrl] = useState('')
  const shortenedFact = getWordsFromString(fact)

  useEffect(() => {
    if (!fact) return
    setImageUrl(IMAGE_ENDPOINT(shortenedFact))
  }, [fact])

  return { imageUrl, shortenedFact }
}
