import { useSearchParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { movieApi } from "services/fetch";
import { Button, Form, Input } from "./Movies.styled";
import MovieList from "components/MovieList/MovieList";

function Movies() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [list, setList] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const movieName = searchParams.get("movie") ?? "";
  const [movie, setMovie] = useState("");

  // const location = useLocation();

  useEffect(() => {
    setLoading(true);
    const fetchTrendingMovies = () => {
      movieApi(movieName)
        .then((results) => {
          setList(results);
          setError(null);
        })
        .catch((error) => {
          setError("Ooops. Something went wrong...");
          console.log(error);
        })
        .finally(() => setLoading(false));
    };
    fetchTrendingMovies();
  }, [movieName]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSearchParams({ movie });
  };

  const handleChange = (e) => {
    setMovie(e.target.value.toLowerCase());
  };

  return (
    <div>
      <Form onSubmit={handleSubmit}>
        <Input
          type="text"
          value={movie}
          autoComplete="off"
          autoFocus
          placeholder="Enter movie title"
          name="movie"
          onChange={handleChange}
        />
        <Button type="submit">Search</Button>
      </Form>
      {error && <div>{error}</div>}
      {loading && "Loading ..."}
      {list && <MovieList list={list} />}
    </div>
  );
}

export default Movies;
