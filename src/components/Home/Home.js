import { useEffect, useState } from "react";
import { homeApi } from "services/fetch";
import MovieList from "components/MovieList/MovieList";

function Home() {
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setError(true);
    const fetchTrendingMovies = () => {
      homeApi()
        .then((results) => {
          setMovies(results);
          setError(null);
        })
        .catch((error) => {
          setError("Ooops. Something went wrong...");
        })
        .finally(() => setLoading(false));
    };
    fetchTrendingMovies();
  }, []);

  return (
    <div>
      {error && <div>{error}</div>}
      {loading && "Loading ..."}
      {movies && <MovieList list={movies} />}
    </div>
  );
}

export default Home;
