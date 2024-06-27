
export async function getRandomWord() {
  const call = await fetch("https://trouve-mot.fr/api/random")
  const word = await call.json()
  return console.log(word[0].name)
}