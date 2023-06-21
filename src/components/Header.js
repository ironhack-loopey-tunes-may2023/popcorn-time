import "./Header.css";

function Header(props) {

    // Conditional Rendering: option A (Element Variables)
    let message = "";
    if(props.numberOfMovies > 0){
        message = <h2>Number of movies: {props.numberOfMovies}</h2>;
    } else {
        message = <h2>Sorry, no movies to display</h2>;
    }


    return (
        <div className="Header">
            <h1>Popcorn Time 🍿 </h1>
            {message}
        </div>
    );
}

export default Header;