import * as Tone from "tone"
import classes from "./TonesButton.module.css"
export default function TonesButton({keybutton,color}){
let synth = new Tone.Synth().toDestination();

  function handlePlay(){
    if (Tone.context.state !== "running") {
        Tone.start();
      }
      synth.triggerAttackRelease(`${keybutton}`, "8n");
  }
  return (
    <button className={classes[`${color}`]+' '+classes['piano-key']}  onClick={handlePlay}><span className={classes.pianoSpan}>{keybutton}</span></button>
  )
}