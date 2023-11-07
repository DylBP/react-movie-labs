import React, { useState, useEffect } from "react";
import PageTemplate from '../components/templateMovieListPage'
import { getUpcomingMovies } from "../api/tmdb-api";
import AddToWatchlistIcon from "../components/cardIcons/addToWatch";

const UpcomingMoviePage = (props) => {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        getUpcomingMovies().then(movies => {
            setMovies(movies);
        });
    }, []);

    return (
        <PageTemplate
            title='Upcoming Movies'
            movies={movies}
            action={(movie) => {
                return <AddToWatchlistIcon movie={movie}/>;
              }}
        />
    );
}

export default UpcomingMoviePage;