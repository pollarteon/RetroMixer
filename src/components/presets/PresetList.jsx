import { useRef, useState } from "react";
import PresetItem from "./PresetItem";
export default function PresetList({ presetArray,presetNumber}) {
 
  const [presetsrc,setPresetSrc]=useState(undefined)
  const [isPlaying,setIsPlaying]=useState(false)
  const [volume,setVolume] = useState(0.5)
  const audioRef = useRef()
  const togglePlayPause = () => {
    const prevValue = isPlaying;
    setIsPlaying(!prevValue);
    if (!prevValue) {
      audioRef.current.play();
    } else {
      audioRef.current.pause();
      cancelAnimationFrame(animationRef.current);
    }
  };
  function handleVolumeChange(e){
    const newVolume = e.target.value
    setVolume(newVolume)
  }
  if(audioRef.current){
    audioRef.current.volume = volume
  }
  return (
    <div>
      <audio src={presetsrc} ref={audioRef} loop></audio>
      <button onClick={togglePlayPause}>{isPlaying?"Pause":"Play"}</button>
      <input type="range" min={0} max={1} step={0.01} value={volume} name="volume" id="presetVolume" onChange={handleVolumeChange}/>
      <ul>
      {presetArray.map((filePath, index) => {
        return <li key={filePath} ><PresetItem setPresetSrc={setPresetSrc} filePath={filePath}/></li>
      })}
      </ul>
    </div>
  );
}
