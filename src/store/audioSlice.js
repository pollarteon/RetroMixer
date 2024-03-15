import  {createSlice} from '@reduxjs/toolkit'

const audioSlice = createSlice({
  name:'Audio',
  initialState:{
    isPlaying:false,
    currentTime:0,
    duration:0,
    tempo:1
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
    }
  }
})
export const audioActions = audioSlice.actions
export default audioSlice