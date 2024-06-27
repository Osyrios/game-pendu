import { getRandomWord } from "../RandomWords"


export function RightPart() {
  
  return <div className="w-1/2 flex flex-col justify-start items-center pt-2" onClick={getRandomWord}>
    <div className="bg-white h-5/6 w-4/5 rounded-3xl">
      <p>test:
      </p>
    </div>
  </div>
}