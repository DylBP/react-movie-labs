import React, { useState } from "react";
export const MoviesContext = React.createContext(null);

const MoviesContextProvider = (props) => {
    const [favorites, setFavorites] = useState([])
    const [myReviews, setMyReviews] = useState({})
    const [myWatchlist, setMyWatchlist] = useState([])

    const addToWatchList = (movie) => {
        let newWatchlist = [];
        if (!myWatchlist.includes(movie.id)) {
            newWatchlist = [...myWatchlist, movie.id];
        }
        else {
            newWatchlist = [...myWatchlist];
        }
        setMyWatchlist(newWatchlist)
        console.log(myWatchlist);
    }

    const addToFavorites = (movie) => {
        let newFavorites = [];
        if (!favorites.includes(movie.id)) {
            newFavorites = [...favorites, movie.id];
        }
        else {
            newFavorites = [...favorites];
        }
        setFavorites(newFavorites)
    };

    const addReview = (movie, review) => {
        setMyReviews({ ...myReviews, [movie.id]: review })
    };
    console.log(myReviews);

    // We will use this function in a later section
    const removeFromFavorites = (movie) => {
        setFavorites(favorites.filter(
            (mId) => mId !== movie.id
        ))
    };

    return (
        <MoviesContext.Provider
            value={{
                favorites,
                myWatchlist,
                addToFavorites,
                removeFromFavorites,
                addReview,
                addToWatchList,
            }}
        >
            {props.children}
        </MoviesContext.Provider>
    );
};

export default MoviesContextProvider;