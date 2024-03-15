import  {createSlice} from '@reduxjs/toolkit'

const audioSlice = createSlice({
  name:'Audio',
  initialState:{
    isPlaying:false,
    currentTime:0,
    duration:0
  },
  reducers:{
    toggleIsPlaying(state){
      state.isPlaying = !state.isPlaying
    },
    setCurrentTime(state,action){
      const newTime = action.payload
      state.currentTime = newTime
    },
    setAudioDuration(state,action){
      const duration = action.payload
      state.duration = duration
    }
  }
})
export const audioActions = audioSlice.actions
export default audioSlice