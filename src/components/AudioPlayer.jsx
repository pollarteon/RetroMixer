import React, { useState, useRef, useEffect } from "react";
import styles from "./AudioPlayer.module.css";
import { BsArrowLeftShort } from "react-icons/bs";
import { BsArrowRightShort } from "react-icons/bs";
import { FaPlay } from "react-icons/fa";
import { FaPause } from "react-icons/fa";
import TempoSlider from "./TempoSlider";
import VolumeSlider from "./VolumeSlider";
import AudioFiles from "./AudioFiles";


export default function AudioPlayer({audioArray}) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [duration, setDuration] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const [tempo, setTempo] = useState(1);
  const [volume, setVolume] = useState(0.5);
  const [src, setSrc] = useState(undefined);
  const audioPlayer = useRef();
  const progressBar = useRef();
  const animationRef = useRef();
  const [displayDropBox,setDisplayDropBox] = useState(false)
  const [file, setFile] = useState(null);

  useEffect(() => {
    if (file) {
      const fileReader = new FileReader();
      fileReader.onload = () => {
        audioPlayer.current.src = fileReader.result;
        setSrc(fileReader.result);
      };
      fileReader.readAsDataURL(file);
    }
  }, [file]);

  useEffect(() => {
    const seconds = Math.floor(audioPlayer.current.duration);
    setDuration(seconds);
    progressBar.current.max = seconds;
  }, [
    audioPlayer?.current?.loadedmetadata,
    audioPlayer?.current?.readyState,
    src,
  ]);

  const calculateTime = (secs) => {
    const minutes = Math.floor(secs / 60);
    const returnedMinutes = minutes < 10 ? `0${minutes}` : `${minutes}`;
    const seconds = Math.floor(secs % 60);
    const returnedSeconds = seconds < 10 ? `0${seconds}` : `${seconds}`;
    return `${returnedMinutes}:${returnedSeconds}`;
  };
  const togglePlayPause = () => {
    const prevValue = isPlaying;
    setIsPlaying(!prevValue);
    if (!prevValue) {
      audioPlayer.current.play();
      animationRef.current = requestAnimationFrame(whilePlaying);
    } else {
      audioPlayer.current.pause();
      cancelAnimationFrame(animationRef.current);
    }
  };

  const whilePlaying = () => {
    progressBar.current.value = audioPlayer.current.currentTime;
    changePlayerCurrentTime();
    animationRef.current = requestAnimationFrame(whilePlaying);
  };

  const changeRange = () => {
    audioPlayer.current.currentTime = progressBar.current.value;
    changePlayerCurrentTime();
  };

  const changePlayerCurrentTime = () => {
    progressBar.current.style.setProperty(
      "--seek-before-width",
      `${(progressBar.current.value / duration) * 100}%`
    );
    setCurrentTime(progressBar.current.value);
  };

  const backThirty = () => {
    progressBar.current.value = Number(progressBar.current.value - 30);
    changeRange();
  };

  const forwardThirty = () => {
    progressBar.current.value = Number(progressBar.current.value + 30);
    changeRange();
  };
  if (audioPlayer.current) {
    audioPlayer.current.playbackRate = tempo;
    audioPlayer.current.volume = volume;
  }
  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };
  const openDropBox = ()=>{
    setDisplayDropBox(true)
  }
  function closeDropBox(){
    setDisplayDropBox(false)
  }
  return (
    <div>
      <div className={styles.audioPlayer}>
        <button onClick={openDropBox}>Add Audio</button>
        <audio ref={audioPlayer} src={src} preload="metadata"></audio>
        <button className={styles.forwardBackward} onClick={backThirty}>
          <BsArrowLeftShort /> 30
        </button>
        <button onClick={togglePlayPause} className={styles.playPause}>
          {isPlaying ? <FaPause /> : <FaPlay className={styles.play} />}
        </button>
        <button className={styles.forwardBackward} onClick={forwardThirty}>
          30 <BsArrowRightShort />
        </button>
        <div className={styles.currentTime}>{calculateTime(currentTime)}</div>
        <div>
          <input
            type="range"
            className={styles.progressBar}
            defaultValue="0"
            ref={progressBar}
            onChange={changeRange}
          />
        </div>
        <div className={styles.duration}>
          {duration && !isNaN(duration) && calculateTime(duration)}
        </div>
      </div>
      <TempoSlider tempo={tempo} setTempo={setTempo} />
      <VolumeSlider volume={volume} setVolume={setVolume} />
      {displayDropBox &&  <AudioFiles audioArray={audioArray} setSrc={setSrc} closeDropBox={closeDropBox}/>}
    </div>
  );
}
