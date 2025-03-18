import { useQuery } from "@tanstack/react-query";
import { fetchMovies } from "../services/movies";
import { singleMovie } from "../types/movie";

const MoviesList = () => {
  const {
    data: movies = [],
    isLoading,
    isError,
    error,
  } = useQuery<singleMovie[]>({
    queryKey: ["movies"],
    queryFn: fetchMovies,
  });

  if (isLoading) return <p>Loading movies...</p>;
  if (isError) return <p>Error fetching movies: {error.message}</p>;

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
              {movie.releaseYear})
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default MoviesList;
