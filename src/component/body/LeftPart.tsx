import { Rules } from "../leftPart/Rules";
import { TryZone } from "../leftPart/TryZone";

export function LeftPart() {
  return <div className="w-1/2 flex flex-col items-center">
    <Rules />
    <TryZone/>
  </div>
}