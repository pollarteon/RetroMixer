import * as Tone from "tone"
export default function DrumsButton({keybutton}){
let synth = new Tone.MembraneSynth().toDestination();

  function handlePlay(){
    if (Tone.context.state !== "running") {
        Tone.start();
      }
      synth.triggerAttackRelease(`${keybutton}`, "8n");
  }
  return (
    <button  onClick={handlePlay}>BEAT {keybutton}</button>
  )
}