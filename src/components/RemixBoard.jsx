import TonesButton from "./RemixButtons/TonesButton"
import AMSynthButton from "./RemixButtons/AMSynthButton"
import DrumsButton from "./RemixButtons/DrumsButton"
import FMSynthButton from "./RemixButtons/FMSynthButton"
import MetalSynthButton from "./RemixButtons/MetalSynthButton"
import DuoSynthButton from "./RemixButtons/DuoSynthButton"
import Piano from "./Piano"
export default function RemixBoard({audioRef,audioContext}) {

  return (
    <div className="Remixboard-wrapper"> 
        <Piano/>
    </div>
  )
}
