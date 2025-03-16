import { useEffect, useState } from "react";
import { fetchMovies } from "../services/movies";

type Movie = {
  id: number;
  title: string;
  director: string;
  release_year: number;
};

const MoviesList = () => {
  const [movies, setMovies] = useState<Movie[]>([]);

  useEffect(() => {
    const getMovies = async () => {
      const moviesData = await fetchMovies();
      setMovies(moviesData);
    };

    getMovies();
  }, []);

  return (
    <div>
      <h2>Movies List</h2>
      {movies.length === 0 ? (
        <p>No movies found.</p>
      ) : (
        <ul>
          {movies.map((movie) => (
            <li key={movie.id}>
              <strong>{movie.title}</strong> - {movie.director} (
              {movie.release_year})
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default MoviesList;
