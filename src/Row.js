import React, { useState,useEffect} from 'react';
import axios from "./axios";
import YouTube from 'react-youtube';
import movieTrailer from 'movie-trailer';
import "./Row.css";
function Row({title,fetchUrl,isLarge}) {
    
const base_url = "https://image.tmdb.org/t/p/original";
 const [movies,setMovies]=useState([]);
const [trailerUrl, setTrailerUrl]=useState("");

 useEffect(() => {
    async function fetchData(){
        const request = await axios.get(fetchUrl);
        setMovies(request.data.results);
      
        return request;
    }
    fetchData();    
     
 }, [fetchUrl]);

 const opts = {
    height: "390",
    width: "99%",
    playerVars: {
      autoplay: 0,
    }
  }

  const handleClick = (movie) => {
    // console.table(movie?.title)
    // if trailer is their (2nd click ) then set it to null
    if (trailerUrl) {
      setTrailerUrl('')
      // if trailer url is not their then fetch it by the fooloowing method
    } else {
      movieTrailer(movie?.original_title || movie?.name || movie?.title)
        .then(url => {
          const urlParams = new URLSearchParams(new URL(url).search);
          setTrailerUrl(urlParams.get('v'));
         console.log(trailerUrl);
        }).catch((error) => console.log(error));
    }
  }

    return (
        <div className="row">
        <h2>{title}</h2>
        <div className="row__inner">
        {movies.map(movie=>{
            return <img className={isLarge?"row__large":"row__image"}
             src={`${base_url}${isLarge ?  movie?.poster_path : movie?.backdrop_path }`}
             alt={movie.name} 
                 onClick={()=>handleClick(movie)}
             />
       
      
        })}
        </div>
        
        {trailerUrl && <YouTube style={{padding:"40px"}} videoId={trailerUrl} opts={opts} />}
      
         

        </div>
    )
}

export default Row
