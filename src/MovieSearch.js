import React, { useState } from 'react';
import { fetchMovieByName } from './omdbService';
import MovieCard from './MovieCard';
import './MovieSearch.css'; // Import CSS for grid layout

function MovieSearch() {
  const [query, setQuery] = useState('');
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(null);

  const handleSearch = async () => {
    if (query) {
      try {
        const result = await fetchMovieByName(query);
        if (result.Response === "True") {
          // Fetch full details for each movie
          const moviesWithDetails = await Promise.all(
            result.Search.map(async (movie) => {
              const movieDetails = await fetchMovieDetails(movie.imdbID);
              return { ...movie, ...movieDetails };
            })
          );
          setMovies(moviesWithDetails);
          setError(null);
        } else {
          setMovies([]);
          setError(result.Error);
        }
      } catch (err) {
        setError("Error fetching data. Please try again.");
        console.error(err);
      }
    }
  };

  const fetchMovieDetails = async (imdbID) => {
    const apiKey = process.env.REACT_APP_OMDB_API_KEY;
    const response = await fetch(`https://www.omdbapi.com/?apikey=${apiKey}&i=${imdbID}`);
    const data = await response.json();
    return {
      Genre: data.Genre,
      Plot: data.Plot
    };
  };

  return (
    <div className="movie-search-container">
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Enter movie name"
        className="search-input"
      />
      <button onClick={handleSearch} className="search-button">Search</button>

      {error && <p style={{ color: 'red' }}>{error}</p>}

      <div className="movie-cards-container">
        {movies.length > 0 ? (
          movies.map((movie) => <MovieCard key={movie.imdbID} movie={movie} />)
        ) : (
          <p>No movies found!</p>
        )}
      </div>
    </div>
  );
}

export default MovieSearch;