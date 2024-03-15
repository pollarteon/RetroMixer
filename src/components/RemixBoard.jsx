import { useDispatch, useSelector } from "react-redux";
import TempoSlider from "./TempoSlider";

export default function RemixBoard() {

  const dispatch = useDispatch()
  let actx = new AudioContext();
  let out = actx.destination;
  let osc1 = actx.createOscillator();
  let gain1 = actx.createGain()
  osc1.connect(gain1);
  gain1.connect(out);
  
  return (
    <div className="Remixboard-wrapper">
      <h1>remix board</h1>
      <TempoSlider/>
      <button onClick={()=>osc1.start()}>oscillator 1(start)</button>
      <button onClick={()=>osc1.stop()}>oscillator 1(start)</button>
    </div>
  )
}
