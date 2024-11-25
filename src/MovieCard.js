import React from 'react';
import './MovieCard.css';  // Import CSS file for styling

// MovieCard component to display the movie details in a card
function MovieCard({ movie }) {
  return (
    <div className="movie-card">
      <img
        src={movie.Poster !== "N/A" ? movie.Poster : "https://via.placeholder.com/400x600?text=No+Image"} // Placeholder if no image
        alt={`${movie.Title} Poster`}
        className="movie-card-img"
      />
      <div className="movie-card-content">
        <h2 className="movie-title">{movie.Title}</h2>
        <p><strong>Year:</strong> {movie.Year}</p>
        <p><strong>Genre:</strong> {movie.Genre}</p>
        <p><strong>Plot:</strong> {movie.Plot}</p>
      </div>
    </div>
  );
}

export default MovieCard;