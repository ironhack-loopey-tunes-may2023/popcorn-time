import { useState } from "react";
import movies from "./data/movies.json";

import Header from "./components/Header"
import Main from "./components/Main"
import Footer from "./components/Footer"

import './App.css';


function App() {

  const [moviesToDisplay, setMoviesToDisplay] = useState(movies);

  const [title, setTitle] = useState("");
  const [rating, setRating] = useState("");

  
  const deleteMovie = (movieTitle) => {
    console.log("deleting movie with id....", movieTitle)

    //moviesToDisplay.push(); // NEVER MODIFY STATE DIRECTLY !

    const newList = moviesToDisplay.filter((element) => {
      return element.title !== movieTitle;
    });

    setMoviesToDisplay(newList);

  }


  const handleSubmit = (e) => {
    e.preventDefault(); // avoid page refresh
    
    const newMovie = {
      title: title,
      rating: rating
    }

    const newList = [newMovie, ...moviesToDisplay];

    setMoviesToDisplay(newList);

    // Clear form
    setTitle("");
    setRating("");

  }

  
  return (
    <div className="App">
      <Header numberOfMovies={moviesToDisplay.length} />

      <section>
        <form onSubmit={handleSubmit}>
          
          <label>
            Title:
            <input 
              type="text" 
              name="title" 
              placeholder="enter the title" 
              required={true}
              value={title} 
              onChange={(e) => { setTitle(e.target.value) }}
              />
          </label>

          <label>
            Rating:
            <input 
            type="number" 
            name="rating" 
            required={true} 
            min={1} 
            max={10} 
            value={rating} 
            onChange={(e) => { setRating(e.target.value) }}
            />
          </label>

          <button>Create</button>
        </form>
      </section>

      <Main listOfMovies={moviesToDisplay} callbackToDelete={deleteMovie} />
      <Footer />
    </div>
  );
}

export default App;
