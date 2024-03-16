import classes from "./App.module.css";
import AudioPlayer from "./components/AudioPlayer";
import RemixBoard from "./components/RemixBoard";
import PresetList from "./components/presets/PresetList";
import { motion } from "framer-motion";
function App() {
  const beatsArray = [
    "/audio/Beat 1.mp3",
    "/audio/beat 2.mp3",
    "/audio/Beat 3.mp3",
    "/audio/Beat 4.mp3",
    "/audio/Beat 5.mp3",
    "/audio/Beat 6.mp3",
    "/audio/Beat 7.mp3",
    "/audio/Beat 8.mp3",
  ];
  const songsArray = [
    "/audio/background-music-for-video-blog-cyborg-in-me-30-second-188534.mp3",
    "/audio/trap-action-172005.mp3",
    "/audio/twisted-138700.mp3",
    "/audio/magic-beat-151786.mp3",
  ];
  const preset2Array = [
    "/audio/Mallets.mp3",
    "/audio/Whistling.mp3",
    "/audio/Synth 1.mp3",
    "/audio/Bass 1.mp3",
    "/audio/Bass 2.mp3",
    "/audio/Bass 3.mp3",
    "/audio/Brass 1.mp3",
    "/audio/Brass 2.mp3",
    "/audio/Choir .mp3",
    "/audio/Flute.mp3",
    "/audio/Keys 1.mp3",
    "/audio/keys 2.mp3",
    "/audio/Mbira.mp3",
    "/audio/Pad.mp3",
    "/audio/piano.mp3",
    "/audio/Pluck.mp3",
    "/audio/Strings 1.mp3",
    "/audio/Strings 2.mp3",
    "/audio/Strings 3.mp3",
    "/audio/Synth 2.mp3",
    "/audio/Synth 3.mp3",
  ];

  return (
    <>
      <div className={classes.appContainer}>
        <motion.div className={classes.audioPlayer1}>
          <AudioPlayer audioArray={songsArray} />
          <AudioPlayer audioArray={songsArray} />
        </motion.div>
        <div className={classes.presetRow}>
          <PresetList presetArray={beatsArray} />
        </div>
        <div className={classes.presetRow}>
          <PresetList presetArray={preset2Array} />
        </div>

        <div className={classes.row1}>
          <RemixBoard />
        </div>
      </div>
    </>
  );
}

export default App;
