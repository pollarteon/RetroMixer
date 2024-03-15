import { audioActions } from "../store/audioSlice";
import { useDispatch, useSelector } from "react-redux";

export default function TempoSlider(){
  const tempo = useSelector(state=>state.audio.tempo)
  console.log(tempo)
  const dispatch = useDispatch
  const handeTempoChange = (event) => {
    const newTempo = parseFloat(event.target.value);
    dispatch(audioActions.setTempo(newTempo));
  };
  return (
    <input
        type="range"
        id="tempo"
        min="0.5"
        max="4"
        step="0.01"
        value={tempo}
        onChange={handeTempoChange}
      />
  )
}