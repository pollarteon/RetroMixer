
import Piano from "./Piano"
import classes from "./RemixBoard.module.css"
export default function RemixBoard({audioRef,audioContext}) {

  return (
    <div className={classes.wrapper}> 
        <Piano/>
    </div>
  )
}
