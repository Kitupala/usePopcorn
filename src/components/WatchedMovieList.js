import WatchedMovie from "./WatchedMovie";

export default function WatchedMovieList({
  watched,
  onDeleteWatched,
  onHandleSelectMovie,
}) {
  return (
    <ul className="list list-movies">
      {watched.map((movie) => (
        <WatchedMovie
          movie={movie}
          key={movie.imdbID}
          onDeleteWatched={onDeleteWatched}
          onHandleSelectMovie={onHandleSelectMovie}
        />
      ))}
    </ul>
  );
}
