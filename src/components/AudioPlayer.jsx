import { useDispatch, useSelector } from "react-redux";
import { audioActions } from "../store/audioSlice";
import { useEffect, useRef ,useState} from "react";
import classes from "./AudioPlayer.module.css";

export default function AudioPlayer({ src }) {
  const isPlaying = useSelector((state) => state.audio.isPlaying);
  const currentTime = useSelector((state) => state.audio.currentTime);
  const duration = useSelector((state)=>state.audio.duration)
  const audioRef = useRef();
  const dispatch = useDispatch();
  const [file, setFile] = useState(null);

  useEffect(()=>{
    if (file) {
      const fileReader = new FileReader();
      fileReader.onload = () => {
        audioRef.current.src = fileReader.result;
        dispatch(audioActions.setSrc(fileReader.result));
      };
      fileReader.readAsDataURL(file);
    }
  }, [file])

  useEffect(() => {
    const intervalId = setInterval(() => {
      if (audioRef.current && audioRef.current.currentTime !== undefined) {
        if (audioRef.current.currentTime === audioRef.current.duration) {
          dispatch(audioActions.setCurrentTime(0)); // Reset currentTime
          dispatch(audioActions.toggleIsPlaying(false)); // Set isPlaying to false
        } else {
          dispatch(audioActions.setCurrentTime(audioRef.current.currentTime));
        }
      }
    }, 1000);
    return () => clearInterval(intervalId);
  }, [currentTime]);
  function togglePlayHandler() {
    dispatch(audioActions.toggleIsPlaying());
    if (!isPlaying) {
      audioRef.current.play();
      dispatch(audioActions.setAudioDuration(audioRef.current.duration))
    } else {
      audioRef.current.pause();
    }
  }
  const handleProgressChange = (e) => {
    const newTime = e.target.value;
    audioRef.current.currentTime = newTime;
    dispatch(audioActions.setCurrentTime(newTime));
  };

  const handleVolumeChange = (e) => {
    const newVolume = e.target.value;
    audioRef.current.volume = newVolume;
  };
  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  return (
    <>
     <input type="file" accept="audio/*" onChange={handleFileChange} />
    <div className={classes["audio-player"]}>
      
      <audio ref={audioRef}>
        <source src={src} type="audio/mpeg" />
        Your browser does not support the audio element.
      </audio>
      <input
        type="range"
        name="progress"
        id="progress"
        min={0}
        max={audioRef.current && audioRef.current.duration}
        step={0.00001}
        value={currentTime}
        onChange={handleProgressChange}
        className={classes["progress-bar"]}
      />
      <button className={classes["play-button"]} onClick={togglePlayHandler}>
        {isPlaying ? "Pause" : "Play"}
      </button>
      <input
        type="range"
        min={0}
        max={1}
        step={0.01}
        defaultValue={1}
        onChange={handleVolumeChange}
        className={classes["volume-bar"]}
      />  
    </div>
    </>
  );
}
