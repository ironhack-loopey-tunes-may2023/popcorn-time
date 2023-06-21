import { useState } from "react";
import movies from "./data/movies.json";

import Header from "./components/Header"
import Main from "./components/Main"
import Footer from "./components/Footer"

import './App.css';


function App() {

  const [moviesToDisplay, setMoviesToDisplay] = useState(movies);

  
  const deleteMovie = (movieId) => {
    console.log("deleting movie with id....", movieId)

    //moviesToDisplay.push(); // NEVER MODIFY STATE DIRECTLY !

    const newList = moviesToDisplay.filter((element) => {
      return element.id !== movieId;
    });

    setMoviesToDisplay(newList);

  }



  
  return (
    <div className="App">
      <Header numberOfMovies={moviesToDisplay.length} />
      <Main listOfMovies={moviesToDisplay} callbackToDelete={deleteMovie} />
      <Footer />
    </div>
  );
}

export default App;
