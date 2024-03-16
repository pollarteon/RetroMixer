
import { useRef } from 'react'
import './App.css'
import AudioPlayer from './components/AudioPlayer'
import RemixBoard from './components/RemixBoard'
import PresetList from './components/presets/PresetList'
function App() {
  const beatsArray =[
    "/audio/background-music-for-video-blog-cyborg-in-me-30-second-188534.mp3",
    "/audio/beatbox-163406.mp3",
    "/audio/intro-future-chill-logo-143866.mp3",
    "/audio/magic-beat-151786.mp3",
  ]
  return (
    <div>
      <RemixBoard  />
      <AudioPlayer audioArray={beatsArray}  />
      <AudioPlayer audioArray={beatsArray}  />
      <PresetList presetArray={beatsArray}/>
    </div>
  )
}

export default App
