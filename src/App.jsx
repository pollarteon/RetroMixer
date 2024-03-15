
import './App.css'
import AudioPlayer from './components/AudioPlayer'
import RemixBoard from './components/RemixBoard'
function App() {
  
  return (
    <div>
      <RemixBoard/>
      <AudioPlayer src = "/audio/twisted-138700.mp3"/>
    </div>
  )
}

export default App
