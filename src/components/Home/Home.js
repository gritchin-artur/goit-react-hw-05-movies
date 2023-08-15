import { Link, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { HomeApi } from "components/fetch/fetch";
import { Li, LinkStyle, Ul } from "./Home.styled";

function Home() {
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(null);

  const location = useLocation();

  useEffect(() => {
    const fetchTrendingMovies = () => {
      HomeApi()
        .then((results) => {
          setMovies(results);
        })
        .catch((error) => {
          setError("Ooops. Something went wrong...");
        });
    };
    fetchTrendingMovies();
  }, []);

  return (
    <div>
      {error && <div>{error}</div>}
      <Ul>
        {movies.map(({ title, id }) => (
          <li key={id}>
            <LinkStyle to={`/movies/${id}`} state={{ from: location }}>
              {title}
            </LinkStyle>
          </li>
        ))}
      </Ul>
    </div>
  );
}

export default Home;
