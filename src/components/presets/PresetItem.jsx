import { useRef, useState } from "react"

export default function PresetItem({filePath,setPresetSrc}){
  const parts = filePath.split(/[\\/]/);
  const fileName = parts[parts.length - 1];
  const songName = fileName.replace(/\.[^/.]+$/, "");
  function handlePresetSrc(){
    setPresetSrc(filePath)
  }
  return (
    <div>
      <h3>title: {songName}</h3>
      <button onClick={handlePresetSrc}>Add To preset</button>
    </div>
  )
}