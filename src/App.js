import { useState } from "react";
import movies from "./data/movies.json";

import Header from "./components/Header"
import Main from "./components/Main"
import Footer from "./components/Footer"

import './App.css';
import AddMovie from "./components/AddMovie";


function App() {

  const [moviesToDisplay, setMoviesToDisplay] = useState(movies);


  const createMovie = (newMovie) => {
    // new list = an array with the new movie + all the movies we had before
    const newList = [newMovie, ...moviesToDisplay];

    // update state
    setMoviesToDisplay(newList);
  }

  const deleteMovie = (movieTitle) => {
    console.log("deleting movie with id....", movieTitle)

    //moviesToDisplay.push(); // NEVER MODIFY STATE DIRECTLY !

    const newList = moviesToDisplay.filter((element) => {
      return element.title !== movieTitle;
    });

    setMoviesToDisplay(newList);

  }


  return (
    <div className="App">
      <Header numberOfMovies={moviesToDisplay.length} />
      <AddMovie callbackToCreate={createMovie} />
      <Main listOfMovies={moviesToDisplay} callbackToDelete={deleteMovie} />
      <Footer />
    </div>
  );
}

export default App;
