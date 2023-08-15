import { MovieDetailsApi } from "components/fetch/fetch";
import { Suspense, useEffect, useState } from "react";
import { Outlet, useLocation, useNavigate, useParams } from "react-router-dom";
import { Button, Img, P, H3, Ul, Navigation, Div } from "./MovieDetails.styled";

function MovieDetails() {
  const [movie, setMovie] = useState(null);
  const [error, setError] = useState(null);

  const { movieId } = useParams();
  const location = useLocation();
  const navigate = useNavigate();

  const handleClick = () => navigate(location?.state?.from ?? "/");

  useEffect(() => {
    MovieDetailsApi(movieId)
      .then((response) => {
        setMovie(response);
      })
      .catch((error) => {
        setError("Ooops. Something went wrong...");
      });
  }, [movieId]);

  return (
    <>
      <Div>
        <Button onClick={handleClick}>Go back</Button>
        {error && <div>{error}</div>}
        {movie && (
          <div>
            {movie.poster_path ? (
              <Img
                src={`https://image.tmdb.org/t/p/w200/${movie.poster_path}`}
                alt={movie.title}
                width="200"
                height="300"
              />
            ) : (
              <Img src="https://upload.wikimedia.org/wikipedia/commons/a/ac/No_image_available.svg" />
            )}
            <H3>{movie.title}</H3>
            <P>User Score: {Math.round(movie.popularity)}</P>
            <div className="movie_overview">
              <H3>Overview</H3>
              <P>{movie.overview}</P>
            </div>
          </div>
        )}
        <div>
          <Ul>
            <li>
              <Navigation
                to={`/movies/${movieId}/cast`}
                state={{ from: location }}
              >
                Cast
              </Navigation>
            </li>
            <li>
              <Navigation
                to={`/movies/${movieId}/reviews`}
                state={location.state}
              >
                Reviews
              </Navigation>
            </li>
          </Ul>
          <Suspense fallback={<div>Loading...</div>}>
            <Outlet />
          </Suspense>
        </div>
      </Div>
    </>
  );
}

export default MovieDetails;
