import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
    name:"movies",
    initialState:{
        nowPlayingMovies:null,
        videoPlaying:null,
    },
    reducers:{
        addNowPlayingMovies : (state,action)=>{
            state.nowPlayingMovies = action.payload;
        },
        addVideoPlaying :(state,action)=>{
            state.videoPlaying=action.payload;
        }
    }
})

export const {addNowPlayingMovies,addVideoPlaying} = moviesSlice.actions

export default moviesSlice.reducer