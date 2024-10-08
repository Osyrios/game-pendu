import { useEffect, useState } from "react"



export function ResponseDisplay() {

    const [randomWord, setRandomWord] = useState('')
    const [category, setCategory] = useState('')

    const [responseToFind, setResponseToFind] = useState(randomWord.toString().toUpperCase().split(''))
    const [responseToDisplay, setResponseToDisplay] = useState(responseToFind.map((letter)=>letter='-'))

    /**
     * fonction qui génère un mot aléatoire et l'applique a randomWord et category
     */
    async function newRandomWord() {
      const response = await fetch("https://trouve-mot.fr/api/random", {
        method: 'GET',
        headers: {
          accept:'application-json'
        }
      })
      const bodyResponse = await response.json()
      setCategory(bodyResponse[0].categorie)
      setRandomWord(bodyResponse[0].name)
    } 
  
  useEffect(() => {
      newRandomWord()
  }, [])
  

  return <div className="h-1/5 w-full flex items-center justify-center" onLoadStart={newRandomWord}>
    <p className="text-center text-7xl uppercase">{responseToDisplay}</p>
  </div>
}