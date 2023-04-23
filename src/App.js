import React from 'react';
import { useState } from 'react';
import MoviesList from './components/MoviesList';
import './App.css';

function App() {
  const [value,setValue]=useState([]);
  function fetchMoviesHandler(){
    fetch('https://swapi.dev/api/films/').then(resolve=>{
        return resolve.json();
    }).then(data=>{
      console.log(data);
      const newVal=  data.results.map(val=>{
            return {
              id:val.episode_id,
              title:val.title,
              openingText:val.opening_crawl,
              releaseDate:val.release_date
            }
        })
        setValue(newVal);
    })

  }

  return (
    <React.Fragment>
      <section>
        <button onClick={fetchMoviesHandler}>Fetch Movies</button>
      </section>
      <section>
        <MoviesList movies={value} />
      </section>
    </React.Fragment>
  );
}

export default App;
