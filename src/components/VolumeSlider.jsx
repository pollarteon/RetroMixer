import { FaVolumeOff } from "react-icons/fa6";
import { FaVolumeLow } from "react-icons/fa6";
import { FaVolumeHigh } from "react-icons/fa6";
import classes from "./TempoSlider.module.css"
export default function VolumeSlider({volume,setVolume}){
  
  const handleVolumeChange = (event) => {
    const newVolume = parseFloat(event.target.value);
    setVolume(newVolume)
  };
  let iconType;
  if(volume>=0.10 && volume<=0.50){
    iconType=1
  }
  else if(volume<=0.10){
    iconType=0
  }
  else{
    iconType=3
  }
  return (
    <div className={classes.inputWrapper}>
    <label htmlFor="volume">
      {
        iconType==3 && <FaVolumeHigh/> 
      }
      {
        iconType==0 && <FaVolumeOff/> 
      }
      {
        iconType==1 && <FaVolumeLow/> 
      }
    </label>
    <input className={classes.progressBar}
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