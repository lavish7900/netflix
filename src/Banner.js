import React , { useState,useEffect} from 'react'
import "./Banner.css";
import axios from "./axios";
import requests from "./requests";


function Banner() {
    const [movie,setMovie]=useState([]);
useEffect(() => {
    async function fetchData(){
        const request = await axios.get(requests.fetchNetflixOriginals);
        setMovie(request.data.results[
          Math.floor(Math.random() * request.data.results.length-1)

        ])

        

        return request;
    }
   fetchData()
}, [])

function truncate(str,n){
    return (str?.length > n ?  str.substr(0, n - 1) + " ..." :str);
}
    return (
        <div className="banner" 
        style={{backgroundSize: "cover",
            backgroundImage:`url("https://image.tmdb.org/t/p/original/${ movie?.backdrop_path }")`,
            backgroundPosition: "50% 10%"
        }}
         >
         <div className="banner__content"> 
           <h1 className="banner__head">{movie?.name || movie?.original_name}</h1>  
           <button className="banner__button">Play</button>
           <p className="banner__overview">{truncate(movie?.overview,150)}</p>
           </div>
           <div className="banner__lower" />

        </div>
    )
}

export default Banner
