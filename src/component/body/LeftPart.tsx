import { FoundedButton } from "../leftPart/FoundedButton";
import { History } from "../leftPart/History";
import { Rules } from "../leftPart/Rules";
import { TryZone } from "../leftPart/TryZone";

export function LeftPart() {
  return <div className="w-1/2 h-5/6 flex flex-col justify-between items-center">
    <Rules />
    <TryZone />
    <FoundedButton />
    <History />
  </div>
}