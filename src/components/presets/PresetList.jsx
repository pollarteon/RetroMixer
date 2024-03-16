import { useRef, useState } from "react";
import PresetItem from "./PresetItem";
import classes from "./PresetList.module.css"
export default function PresetList({ presetArray,presetNumber}) {
 
  const [presetsrc,setPresetSrc]=useState(undefined)
  const [isPlaying,setIsPlaying]=useState(false)
  const [volume,setVolume] = useState(0.5)
  const audioRef = useRef()
  
  return (
    <div className={classes.presetContainer}>
      <ul className={classes.ulStyle}>
      {presetArray.map((filePath, index) => {
        return <li className={classes.liStyle} key={filePath} ><PresetItem setPresetSrc={setPresetSrc} filePath={filePath}/></li>
      })}
      </ul>
    </div>
  );
}
