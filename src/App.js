import React from 'react';
import { useState } from 'react';
import MoviesList from './components/MoviesList';
import './App.css';
import { useEffect,useCallback } from 'react';
function App() {
  const [value, setValue] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  // const [reload,setReload]=useState(false)
 const fetchMoviesHandler=useCallback(async ()=> {
    setIsLoading(true);
    try {
      const resolve = await fetch('https://swapi.dev/api/films/')
      if (!resolve.ok) {
        throw new Error('something went wrong ...retrying')
      }
      const data = await resolve.json();
      const newVal = data.results.map(val => {
        return {
          id: val.episode_id,
          title: val.title,
          openingText: val.opening_crawl,
          releaseDate: val.release_date
        }
      })
      setValue(newVal)
    } catch (error) {
      setError(error.message);
    }
    setIsLoading(false);
  },[])
  //  fetchMoviesHandler;
  useEffect(()=>{
     fetchMoviesHandler()
 },[fetchMoviesHandler])
// if(error!==null){
//    var t= setInterval(fetchMoviesHandler, 5000);
// }
  function btnHandler() {
    setError(null);
    // clearInterval(t);  
    // setIsLoading(true)
  }
    return (
      <React.Fragment>
        <section>
          <button onClick={fetchMoviesHandler}>Fetch Movies</button>
        </section>
        <section>
          {! isLoading && value.length>0 && <MoviesList movies={value} />}
          {isLoading && <p>Loading.....</p>}
          {!isLoading && error && <>{error} <button onClick={btnHandler}>Stop retrying</button></>}
        </section>
      </React.Fragment>
    );
  }
 

  export default App;
