import { LeftPart } from "../component/body/LeftPart";
import { RightPart } from "../component/body/RightPart";



export function Body() {
  return <div className="bg-blue-600 flex flex-row h-screen w-full ">
    
    <LeftPart />
    <RightPart/>

    
  </div>
}