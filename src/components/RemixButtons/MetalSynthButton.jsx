import * as Tone from "tone"
export default function MetalSynthButton({keybutton}){
let synth = new Tone.MetalSynth().toDestination();

  function handlePlay(){
    if (Tone.context.state !== "running") {
        Tone.start();
      }
      synth.triggerAttackRelease(`${keybutton}`, "8n");
  }
  return (
    <button  onClick={handlePlay}>metalsynth {keybutton}</button>
  )
}