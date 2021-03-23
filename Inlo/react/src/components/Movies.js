/* eslint-disable prettier/prettier */

import React, { useState } from 'react';
import Movie from './Movie';
import { getMovies } from '../utils/movieService';


const Movies = () => {
    
    const [movies, setMovies] =  useState([]);

    const handleClick = async () => {
        const data = await getMovies();
        setMovies(data);
      };

    return (
      <section>
        <button type="button" onClick={handleClick}>Get content</button>
        {movies?.length > 0 ? movies.map(movie => <Movie title={movie.filmtittel} actor={movie.actor} />) : <p>Ingen filmer</p>}
      </section>  
    );
};
export default Movies;
