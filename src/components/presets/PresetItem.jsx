import { useRef, useState } from "react"
import classes from "./PresetItem.module.css"
export default function PresetItem({filePath,setPresetSrc,type}){
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
  
  let activeClass = isPlaying?classes.activeButton:classes.drum
  let buttonClass =  classes.beatsButton + ' ' + activeClass


  return (
    <div className={classes.presetItem} >
      <audio src={filePath} ref={audioRef} loop></audio>
      <div className={classes.beats}>
      <button  className={buttonClass}  onClick={togglePlayPause}><span className={classes.beatSpan}>{songName}</span></button>
      </div>
      <input type="range" min={0} max={1} step={0.01} value={volume} name="volume" id="presetVolume" onChange={handleVolumeChange}/>
    </div>
  )
}