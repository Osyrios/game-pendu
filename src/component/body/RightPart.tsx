import { Countdown } from "../rightPart/Countdown";
import { ResponseDisplay } from "../rightPart/ResponseDisplay";

export function RightPart() {

  return <div className="w-1/2 flex flex-col justify-start items-center pt-2">
    <div className="bg-white h-5/6 w-4/5 rounded-3xl flex flex-col items-center">
      <ResponseDisplay />
      <Countdown/>
    </div>
  </div>
}