const API_KEY = process.env.REACT_APP_OMDB_API_KEY;

export const fetchMovieByName = async (movieName) => {
  const response = await fetch(`http://www.omdbapi.com/?apikey=${API_KEY}&s=${movieName}`);
  const data = await response.json();
  return data;
};
