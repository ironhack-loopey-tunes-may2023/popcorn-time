function Movie(props) {


    return (
        <div className="card">
            <p>{props.movieDetails.title}</p>
            <p>Rating: {props.movieDetails.rating}</p>


            {props.movieDetails.imgURL
                ? <img src={props.movieDetails.imgURL} />
                : <img src="https://dummyimage.com/182x268/ffffff/000000" />
            }


            {props.movieDetails.rating > 8 && <p>RECOMMENDED</p>}

            <p>
                {/* <button onClick={() => { deleteMovie(props.movieDetails.id) }}>Delete this movie</button> */}

                <button onClick={() => {props.callbackToDelete(props.movieDetails.title)}}>Delete this movie</button>

            </p>
        </div>
    );
}

export default Movie;