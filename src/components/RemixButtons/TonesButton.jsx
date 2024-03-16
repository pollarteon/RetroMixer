import * as Tone from "tone"
export default function TonesButton({keybutton}){
let synth = new Tone.Synth().toDestination();

  function handlePlay(){
    if (Tone.context.state !== "running") {
        Tone.start();
      }
      synth.triggerAttackRelease(`${keybutton}`, "8n");
  }
  return (
    <button  onClick={handlePlay}>PLAY {keybutton}</button>
  )
}