import Movie from "./Movie";

export default function MovieList({ movies, onHandleSelectMovie }) {
  return (
    <ul className="list list-movies">
      {movies?.map((movie) => (
        <Movie
          movie={movie}
          key={movie.imdbID}
          onHandleSelectMovie={onHandleSelectMovie}
        />
      ))}
    </ul>
  );
}
