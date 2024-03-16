import { useRef, useState } from "react";
import PresetItem from "./PresetItem";
export default function PresetList({ presetArray,presetNumber}) {
  const [selectedPreset, setSelectedPreset] = useState(undefined);
  const [presetsrc,setPresetSrc]=useState(undefined)
  const [isPlaying,setIsPlaying]=useState(false)
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
  return (
    <div>
      <audio src={presetsrc} ref={audioRef}></audio>
      <button onClick={togglePlayPause}>{isPlaying?"Pause":"Play"}</button>
      <ul>
      {presetArray.map((filePath, index) => {
        return <li key={filePath} ><PresetItem setPresetSrc={setPresetSrc} filePath={filePath}/></li>
      })}
      </ul>
    </div>
  );
}
