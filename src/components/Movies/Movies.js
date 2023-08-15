import { useLocation, useSearchParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { MovieApi } from "components/fetch/fetch";
import { Button, Form, Input, Ul } from "./Movies.styled";
import { LinkStyle } from "components/Home/Home.styled";

function Movies() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [list, setList] = useState([]);
  const [error, setError] = useState();

  const movieName = searchParams.get("movie") ?? "";
  const [movie, setMovie] = useState("");

  const location = useLocation();

  useEffect(() => {
    const fetchTrendingMovies = () => {
      MovieApi(movieName)
        .then((results) => {
          setList(results);
        })
        .catch((error) => {
          setError("Ooops. Something went wrong...");
          console.log(error);
        });
    };
    fetchTrendingMovies();
  }, [movieName]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSearchParams({ movie: movie });
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
      {list && (
        <div>
          <Ul>
            {list.map(({ title, id }) => (
              <li key={id}>
                <LinkStyle to={`/movies/${id}`} state={{ from: location }}>
                  {title}
                </LinkStyle>
              </li>
            ))}
          </Ul>
        </div>
      )}
    </div>
  );
}

export default Movies;
