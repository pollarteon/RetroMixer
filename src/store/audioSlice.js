import  {createSlice} from '@reduxjs/toolkit'

const audioSlice = createSlice({
  name:'Audio',
  initialState:{
    isPlaying:false,
    currentTime:0,
    duration:0,
    tempo:1,
    bassLevel:0,
    audioRef:undefined,
    src:undefined,
    volume:0.5
  },
  reducers:{
    toggleIsPlaying(state,action){
      if(action.payload===false){
        state.isPlaying = false
        return;
      }
      state.isPlaying = !state.isPlaying
    },
    setCurrentTime(state,action){
      const newTime = action.payload
      state.currentTime = newTime
    },
    setAudioDuration(state,action){
      const duration = action.payload
      state.duration = duration
    },
    setTempo(state,action){
      const newTempo = action.payload
      state.tempo = newTempo
    },
    setBassLevel(state,action){
      const newBass = action.payload
      state.bassLevel = newBass
    },
    setAudioRef(state,action){
      const audioRef = action.payload
      state.audioRef = audioRef
    },
    setSrc(state,action){
      state.src = action.payload
    },
    setVolume(state,action){
      state.volume = action.payload
    }
  }
})
export const audioActions = audioSlice.actions
export default audioSlice