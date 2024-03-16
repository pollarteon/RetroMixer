import { useRef, useState } from "react"
import classes from "./PresetItem.module.css"
import { motion } from "framer-motion"

export default function PresetItem({filePath,color}){
  const [isPlaying,setIsPlaying]=useState(false)
  const audioRef = useRef()
  const [volume,setVolume] = useState(0.5)
  const togglePlayPause = () => {
    const prevValue = isPlaying;
    setIsPlaying(!prevValue);
    if (!prevValue) {
      audioRef.current.play();
    } else {
      audioRef.current.pause();
    }
    console.log(isPlaying)
  };
  function handleVolumeChange(e){
    const newVolume = e.target.value
    setVolume(newVolume)
  }
  if(audioRef.current){
    audioRef.current.volume = volume
  }
  const parts = filePath.split(/[\\/]/);
  const fileName = parts[parts.length - 1];
  const songName = fileName.replace(/\.[^/.]+$/, "");
  let colorClass ;
  if(colorClass=='blue'){
    colorClass = classes.blueButton
  }
  let activeClass = isPlaying?classes.activeButton:classes.blueButton
  let buttonClass =  classes.beatsButton + ' ' + activeClass


  return (
    <motion.div
    initial={{scale:0}}
    whileTap={{scale:1.1}}
    animate={{scale:1}}
     className={classes.presetItem} >
      <audio src={filePath} ref={audioRef} loop></audio>
      <div className={classes.beats}>
      <button  className={buttonClass}  onClick={togglePlayPause}><span className={classes.beatSpan}>{songName}</span></button>
      </div>
      <input type="range" min={0} max={1} step={0.01} value={volume} name="volume" id="presetVolume" onChange={handleVolumeChange}/>
    </motion.div>
  )
}