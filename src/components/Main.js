import { useState } from "react";
import movies from "../data/movies.json";

import "./Main.css";

function Main() {


    const [moviesToDisplay, setMoviesToDisplay] = useState(movies);
    
    const deleteMovie = (movieId) => {
        console.log("deleting movie with id....", movieId)

        // moviesToDisplay.push(); // NEVER MODIFY STATE DIRECTLY !

        const newList = moviesToDisplay.filter( (element) => {
            return element.id !== movieId;
        });

        setMoviesToDisplay(newList);

    }

    return (
        <div className="Main">

            <h1>Number of movies: {moviesToDisplay.length}</h1>

            {moviesToDisplay.map((movieObj) => {
                return(
                    <div key={movieObj.id} className="card">
                        <p>{movieObj.title}</p>
                        <button onClick={ () => {deleteMovie(movieObj.id)}}>Delete this movie</button>
                    </div>
                )
            })}
        </div>
    );
}

export default Main;