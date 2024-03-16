import { useDispatch, useSelector } from "react-redux";
import { audioActions } from "../store/audioSlice";
import classes from "./BassSlider.module.css";

export default function BassSlider({ audioContext, audioRef }) {
  const bassLevel = useSelector((state) => state.audio.bassLevel);
  const dispatch = useDispatch()
  function changeBassLevel(newBass){
    
    dispatch(audioActions.setBassLevel(newBass));
    if (audioContext && audioRef.current) {
      const bassFilter = audioContext.current.createBiquadFilter();
      bassFilter.type = "lowshelf";
      bassFilter.frequency.value = 200; // Adjust frequency as needed
      bassFilter.gain.value = newBass; // Set bass level
      const source = audioContext.current.createMediaElementSource(audioRef.current);
      source.connect(bassFilter);
      bassFilter.connect(audioContext.destination)
  
    }
  }  
  return (
    <div className={classes.inputWrapper}>
      <label htmlFor="bassLevel">Bass:</label>
      <input
        type="range"
        id="bassLevel"
        min="-40"
        max="40"
        step="0.01"
        value={bassLevel}
        onChange={(e) => changeBassLevel(parseFloat(e.target.value))}
      />
      <p>{bassLevel}</p>
    </div>
  );
}
