export const getRandomFact = async url => {
  try {
    const response = await fetch(url)
    const data = await response.json()
    const fact = await data.fact

    return fact
  } catch (error) {
    return undefined
  }
}
