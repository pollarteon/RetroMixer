import MusicElement from "./MusicElement"
export default function AudioFiles({audioArray,setSrc}){
  return (
     <div>
      <ul>
      {audioArray.map((filePath)=>{
          return <li><MusicElement filePath={filePath} setSrc={setSrc}/></li>
        })}
      </ul>
     </div>
  )
}