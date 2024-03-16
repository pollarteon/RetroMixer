import { useDispatch, useSelector } from "react-redux";
import { audioActions } from "../../store/audioSlice";
import MusicElement from "../MusicElement";
export default function DropBox({setSrc,display,audioPlayerNumber}){
  const audioArray = useSelector(state=>state.audio.audioArray)
  const dispatch = useDispatch()
  function closeDropBox(){
    dispatch(audioActions.closeDropBox())
  }
  if(!display){
    return (
      <></>
    )
  }
  return (
    <div>
        <div>
          <button onClick={closeDropBox}>Close</button>
          <ul>
            {audioArray.map((filePath) => {
              return (
                <li key={filePath}>
                  <MusicElement filePath={filePath} setSrc={setSrc} audioPlayerNumber={audioPlayerNumber}/>
                </li>
              );
            })}
          </ul>
        </div>
    </div>
  );
}