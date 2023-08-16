import { movieCastApi } from "services/fetch";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { H3, Img, Li, P, Ul } from "./Cast.styled";

const Cast = () => {
  const [actors, setActors] = useState(null);
  const [error, setError] = useState();
  const [loading, setLoading] = useState(false);

  const { movieId } = useParams();

  useEffect(() => {
    setLoading(true);
    movieCastApi(movieId)
      .then((response) => {
        setActors(response);
        setError(null);
      })
      .catch((error) => {
        setError("Ooops. Something went wrong...");
      })
      .finally(() => setLoading(false));
  }, [movieId]);

  return (
    <div>
      {error && <div>{error}</div>}
      {loading && "Loading ..."}
      {actors && (
        <Ul>
          {actors.cast.map(({ name, character, profile_path, id }) => (
            <Li key={id}>
              <Img
                alt={name}
                src={
                  profile_path
                    ? `https://image.tmdb.org/t/p/w92${profile_path}`
                    : "https://upload.wikimedia.org/wikipedia/commons/a/ac/No_image_available.svg"
                }
              />

              <H3>{name}</H3>
              <P>{character}</P>
            </Li>
          ))}
        </Ul>
      )}
    </div>
  );
};

export default Cast;
