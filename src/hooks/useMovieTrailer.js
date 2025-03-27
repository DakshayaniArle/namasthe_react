import { useDispatch } from "react-redux";
import { addVideoPlaying } from "../utils/movieSlice";
import { useEffect } from "react";
import {API_OPTIONS} from "../utils/constants.js"

const useMovieTrailer = (movieId)=>{
    //fetch data from tmdb for tariler in background
    const dispatch = useDispatch();
    const getMovies = async ()=>{
        const data = await fetch('https://api.themoviedb.org/3/movie/'+movieId+'/videos?language=en-US', API_OPTIONS);
        const json = await data.json();
        // console.log(json.results);
    
      const filterData = json.results.filter((video)=>video.type==="Trailer");
      const trailer = filterData.length? filterData[0] :json.results[0];
      // setTrailerId(trailer.key);
    //   console.log(trailer);
      dispatch(addVideoPlaying(trailer));
    
      }
    
      
      useEffect(()=>{
        getMovies();
      },[])
}

export default useMovieTrailer