import * as Tone from "tone"
export default function DuoSynthButton({keybutton}){
let synth = new Tone.DuoSynth().toDestination();

  function handlePlay(){
    if (Tone.context.state !== "running") {
        Tone.start();
      }
      synth.triggerAttackRelease(`${keybutton}`, "8n");
  }
  return (
    <button  onClick={handlePlay}>duosynth {keybutton}</button>
  )
}