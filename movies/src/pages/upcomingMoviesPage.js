import React, { useState, useEffect } from "react";
import PageTemplate from '../components/templateMovieListPage'
import { getUpcomingMovies } from "../api/tmdb-api";

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
        />
    );
}

export default UpcomingMoviePage;