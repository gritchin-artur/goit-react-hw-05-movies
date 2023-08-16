import { movieDetailsApi } from "services/fetch";
import { Suspense, useEffect, useState } from "react";
import { Outlet, useLocation, useParams } from "react-router-dom";
import {
  Img,
  P,
  H3,
  Ul,
  Navigation,
  Div,
  LinkStyle,
  H2,
  DivGenres,
} from "./MovieDetails.styled";

function MovieDetails() {
  const [movie, setMovie] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const { movieId } = useParams();
  const location = useLocation();

  const backLink = location?.state?.from ?? "/";

  useEffect(() => {
    setLoading(true);
    movieDetailsApi(movieId)
      .then((response) => {
        setMovie(response);
        setError(null);
      })
      .catch((error) => {
        setError("Ooops. Something went wrong...");
      })
      .finally(() => setLoading(false));
  }, [movieId]);

  return (
    <>
      <Div>
        <LinkStyle to={backLink}>Go back</LinkStyle>
        {error && <div>{error}</div>}
        {loading && "Loading ..."}
        {movie && (
          <div>
            <Img
              src={
                movie.poster_path
                  ? `https://image.tmdb.org/t/p/w200/${movie.poster_path}`
                  : "https://upload.wikimedia.org/wikipedia/commons/a/ac/No_image_available.svg"
              }
              alt={movie.title}
              width="200"
              height="300"
            />

            <H2>{movie.title}</H2>
            <P>User Score: {Math.round(movie.vote_average * 10)} %</P>
            <div>
              <H3>Overview</H3>
              <P>{movie.overview}</P>
            </div>
            <div>
              <H3>Genres</H3>
              <DivGenres>
                {movie.genres.map(({ name, id }) => {
                  return <p key={id}>{name}</p>;
                })}
              </DivGenres>
            </div>
          </div>
        )}
        <div>
          <Ul>
            <li>
              <Navigation to={`cast`} state={{ from: backLink }}>
                Cast
              </Navigation>
            </li>
            <li>
              <Navigation to={`reviews`} state={{ from: backLink }}>
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
