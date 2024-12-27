import React, { useState, useEffect } from 'react';
import { firestore } from './firebase'; // Import Firestore
import { collection, getDocs, doc, getDoc, updateDoc } from 'firebase/firestore'; // Firebase modular SDK
import MovieCard from './MovieCard';  // Import MovieCard component

function MovieListPage({ listName }) {
  const [movies, setMovies] = useState([]);

  // Fetch the movie list data from Firestore when the page loads or when the list name changes
  useEffect(() => {
    const fetchMovies = async () => {
      const listRef = collection(firestore, 'movieLists'); // Reference to the movieLists collection
      const querySnapshot = await getDocs(listRef);
      
      querySnapshot.forEach((doc) => {
        if (doc.id === listName) { // Check for specific list (e.g., 'Liked', 'Want to Watch')
          setMovies(doc.data().movies || []); // Set movies for this list
        }
      });
    };

    fetchMovies();
  }, [listName]);

  // Function to add a movie to a target list (remove from current list, add to new list)
  const addMovieToList = async (movie, targetList) => {
    const listRef = doc(firestore, 'movieLists', listName); // Get reference to the current list (e.g., "Want to Watch")
    const targetListRef = doc(firestore, 'movieLists', targetList); // Get reference to the target list (e.g., "Liked")
    
    // Fetch current list and target list data
    const movieListDoc = await getDoc(listRef);
    const targetListDoc = await getDoc(targetListRef);

    // Remove the movie from the current list
    const updatedMovies = movieListDoc.data().movies.filter((m) => m.imdbID !== movie.imdbID);

    // Add the movie to the target list
    const updatedTargetMovies = [...targetListDoc.data().movies, movie];

    // Update Firestore for both lists
    await updateDoc(listRef, { movies: updatedMovies });
    await updateDoc(targetListRef, { movies: updatedTargetMovies });

    // After updating Firestore, update the local state for both lists
    setMovies(updatedMovies); // Update the current list (e.g., "Want to Watch")

    // To make sure that the target list reflects the changes, you might need to also fetch the target list again or pass the updated list
    // But since you're already passing listName to the component, it'll automatically update for the "Liked" list when it's viewed.
  };

  return (
    <div>
      <h1>{listName} Movies</h1>
      <div className="movie-cards-container">
        {movies.length > 0 ? (
          movies.map((movie) => (
            <MovieCard
              key={movie.imdbID}
              movie={movie}
              addMovieToList={addMovieToList} // Pass addMovieToList function to MovieCard
            />
          ))
        ) : (
          <p>No movies found in this list.</p>
        )}
      </div>
    </div>
  );
}

export default MovieListPage;
