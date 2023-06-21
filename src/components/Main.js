


import "./Main.css";
import Movie from "./Movie";

function Main(props) {
    return (
        <div className="Main">

            {props.listOfMovies.map((movieObj, index) => {
                return <Movie key={index} movieDetails={movieObj} callbackToDelete={props.callbackToDelete} />
            })}

        </div>
    );
}

export default Main;