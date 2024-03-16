import MusicElement from "./MusicElement"
export default function AudioFiles({audioArray,setSrc,closeDropBox}){
  
  return (
     <div>
      <button onClick={closeDropBox}>Close</button>
      <ul>
      {audioArray.map((filePath)=>{
          return <li><MusicElement filePath={filePath} setSrc={setSrc}/></li>
        })}
      </ul>
     </div>
  )
}