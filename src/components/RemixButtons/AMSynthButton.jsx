import * as Tone from "tone"
export default function AMSynthButton({keybutton}){
let synth = new Tone.AMSynth().toDestination();

  function handlePlay(){
    if (Tone.context.state !== "running") {
        Tone.start();
      }
      synth.triggerAttackRelease(`${keybutton}`, "8n");
  }
  return (
    <button  onClick={handlePlay}>AMS {keybutton}</button>
  )
}