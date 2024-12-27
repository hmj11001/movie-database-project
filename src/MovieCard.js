import React, { useState } from 'react';
import './MovieCard.css';  // Import your CSS for styling

function MovieCard({ movie, addMovieToList }) {
  const [clicked, setClicked] = useState(null);  // Track which button was clicked

  const handleButtonClick = (list) => {
    setClicked(list); // Set clicked list to show color change
    addMovieToList(movie, list); // Add the movie to the respective list
  };

  return (
    <div className="movie-card">
      <img
        src={movie.Poster !== "N/A" ? movie.Poster : "https://via.placeholder.com/400x600?text=No+Image"}
        alt={`${movie.Title} Poster`}
        className="movie-card-img"
      />
      <div className="movie-card-content">
        <h2 className="movie-title">{movie.Title}</h2>
        <p><strong>Year:</strong> {movie.Year}</p>
        <p><strong>Genre:</strong> {movie.Genre}</p>
        <p><strong>Plot:</strong> {movie.Plot}</p>

        <button
          className={clicked === 'Want to Watch' ? 'button-clicked' : ''}
          onClick={() => handleButtonClick('Want to Watch')}
        >
          Want to Watch
        </button>
        <button
          className={clicked === 'Liked' ? 'button-clicked' : ''}
          onClick={() => handleButtonClick('Liked')}
        >
          Liked
        </button>
        <button
          className={clicked === 'Disliked' ? 'button-clicked' : ''}
          onClick={() => handleButtonClick('Disliked')}
        >
          Disliked
        </button>
      </div>
    </div>
  );
}

export default MovieCard;
