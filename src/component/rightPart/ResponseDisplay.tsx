import { useEffect, useState } from "react"



export function ResponseDisplay() {

  const [randomWord, setRandomWord] = useState('')
  //const [category, setCategory] = useState('')
  const [responseToDisplay, setResponseToDisplay] = useState([''])

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
    //setCategory(bodyResponse[0].categorie)
      setRandomWord(bodyResponse[0].name)

    } 


    /**
     * fonction qui remplace les lettre en tiret pour cacher la réponse
     * @param {string} word 
     * @returns {string[]}
     */
    function hideResponse(word:string) {
    const wordAsArray = word.split('')
    const wordHidden = wordAsArray.map((l)=>l = '-')
    return wordHidden
    }


newRandomWord
    useEffect(() => {
    newRandomWord()
      setResponseToDisplay(hideResponse(randomWord))
    }, [])






  return <div className="h-1/5 w-full flex items-center justify-center" onLoadStart={newRandomWord}>
    <p className="text-center text-7xl uppercase">{responseToDisplay}</p>
  </div>
}