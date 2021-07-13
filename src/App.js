import React from "react";
import './App.css';
import requests from "./requests";
import Navbar from "./Navbar";
import Banner from "./Banner";
import Row from "./Row";
function App() {
  return (
    <div className="App">
    
    {/* navbar */}
    <Navbar />
    {/* banner */}
    <Banner />
    {/* rows */}
    <div class="rows">
    
    <Row title={' Netflix Originals'} isLarge fetchUrl={requests.fetchNetflixOriginals} />
    <Row title={'Trending'} fetchUrl={requests.fetchTrending} />
    <Row title={'Top Rated'} fetchUrl={requests.fetchTopRated} />
    <Row title={'Action'} fetchUrl={requests.fetchActionMovies} />
    <Row title={'Comedy'} fetchUrl={requests.fetchComedyMovies} />
    <Row title={'Horror'} fetchUrl={requests.fetchHorrorMovies} />
    <Row title={'Romance'} fetchUrl={requests.fetchRomanceMovies} />
    <Row title={'Documentaries'} fetchUrl={requests.fetchDocumentaries} />
    
    </div>
    </div>

  
  );
}

export default App;
// apikey - 68fe0f69e4cdb258c183f37ee96ee129 ;
// example API request  https://api.themoviedb.org/3/movie/550?api_key=68fe0f69e4cdb258c183f37ee96ee129 ;