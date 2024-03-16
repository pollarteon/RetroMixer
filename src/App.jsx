import classes from "./App.module.css";
import AudioPlayer from "./components/AudioPlayer";
import RemixBoard from "./components/RemixBoard";
import PresetList from "./components/presets/PresetList";
function App() {
  const beatsArray = [
    "/audio/background-music-for-video-blog-cyborg-in-me-30-second-188534.mp3",
    "/audio/beatbox-163406.mp3",
    "/audio/intro-future-chill-logo-143866.mp3",
    "/audio/magic-beat-151786.mp3",
  ];
  return (
    <div className={classes.appContainer}>
      <div className={classes.audioPlayer1}>
        <AudioPlayer audioArray={beatsArray} />
      </div>
      <div className={classes.audioPlayer2}>
        <AudioPlayer audioArray={beatsArray} />
      </div>
      <PresetList presetArray={beatsArray} />
      <PresetList presetArray={beatsArray} />
      <PresetList presetArray={beatsArray} />
      <PresetList presetArray={beatsArray} />
      <div className={classes.row1}>
        <RemixBoard />
      </div>
    </div>
  );
}

export default App;
