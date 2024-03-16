;
import classes from "./TempoSlider.module.css"
export default function VolumeSlider({volume,setVolume}){
  
  const handleVolumeChange = (event) => {
    const newVolume = parseFloat(event.target.value);
    setVolume(newVolume)
  };
  return (
    <div className={classes.inputWrapper}>
    <label htmlFor="volume">Volume:</label>
    <input
        type="range"
        id="volume"
        min="0"
        max="1"
        step="0.01"
        value={volume}
        onChange={handleVolumeChange}
      />
      <p>{volume}</p>
    </div>
    
  )
}