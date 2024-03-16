import { FaVolumeOff } from "react-icons/fa6";
import { FaVolumeLow } from "react-icons/fa6";
import { FaVolumeHigh } from "react-icons/fa6";
import classes from "./VolumeSlider.module.css"
import { motion } from "framer-motion";
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
    <motion.div
    initial={{scale:0}}
    animate={{scale:1}}
    className={classes.inputWrapper}>
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
    <input className={classes.progressBar + ' ' + classes.zindex}
        type="range"
        id="volume"
        min="0"
        max="1"
        step="0.01"
        value={volume}
        onChange={handleVolumeChange}
      />
      <p className={classes.value}>{volume}</p>
    </motion.div>
    
  )
}