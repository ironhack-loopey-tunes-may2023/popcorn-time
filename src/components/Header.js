import axios from "axios";

import "./Header.css";
import { useEffect, useState } from "react";


function Header(props) {

    const [numberOfCharacters, setNumberOfCharacters] = useState(0);

    const baseURL = 'https://ih-crud-api.herokuapp.com';


    useEffect(() => {
        axios
            .get(baseURL + '/characters')
            .then((response) => {
                setNumberOfCharacters(response.data.length); // once we get the response from the API, update state
                console.log(response.data.length);
            })
            .catch((e) => console.log(e));
    }, []); // useEffect with an empty dependency array === run after a component has been mounted (only once)


    
    // Conditional Rendering: option A (Element Variables)
    let message = "";
    if (props.numberOfMovies > 0) {
        message = <h2>Number of movies: {props.numberOfMovies}</h2>;
    } else {
        message = <h2>Sorry, no movies to display</h2>;
    }


    return (
        <div className="Header">
            <h1>Popcorn Time 🍿 </h1>

            {message}

            <h2>Number of characters in our API: {numberOfCharacters}</h2>
            <h4>(of which 180 belong to Emily)</h4>

        </div>
    );
}

export default Header;