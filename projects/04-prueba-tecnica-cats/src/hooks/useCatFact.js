import { useState, useEffect } from 'react'
import { getRandomFact } from '../services/getRandomFact'
import { FACT_ENDPOINT } from '../constants'

export function useCatFact () {
  const [fact, setFact] = useState('')

  const updateFact = () => {
    getRandomFact(FACT_ENDPOINT).then(newFact => setFact(newFact))
  }

  useEffect(updateFact, [])

  return { fact, updateFact }
}
