import { useState } from "react";

function AddMovie(props) {

    const [title, setTitle] = useState("");
    const [rating, setRating] = useState("");


    const handleSubmit = (e) => {
        e.preventDefault(); // avoid page refresh

        const newMovieDetails = {
            title: title,
            rating: rating
        }

        props.callbackToCreate(newMovieDetails);

        // Clear form
        setTitle("");
        setRating("");

    }

    return (
        <section className="AddMovie">
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
    );
}


export default AddMovie;