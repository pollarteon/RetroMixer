import { audioActions } from "../store/audioSlice";
import { useDispatch, useSelector } from "react-redux";
import classes from "./TempoSlider.module.css"
export default function TempoSlider({tempo,setTempo}){
  
  const handeTempoChange = (event) => {
    const newTempo = parseFloat(event.target.value);
    setTempo(newTempo)
  };
  return (
    <div className={classes.inputWrapper}>
    <label htmlFor="tempo">Tempo:</label>
    <input
        type="range"
        id="tempo"
        min="0.5"
        max="2"
        step="0.01"
        value={tempo}
        onChange={handeTempoChange}
      />
      <p>{tempo}</p>
    </div>
    
  )
}