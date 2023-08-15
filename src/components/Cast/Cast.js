import { MovieCastApi } from "components/fetch/fetch";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { H3, Img, Li, P, Ul } from "./Cast.styled";

const Cast = () => {
  const [actors, setActors] = useState(null);
  const [error, setError] = useState();

  const { movieId } = useParams();

  useEffect(() => {
    MovieCastApi(movieId)
      .then((response) => {
        setActors(response);
      })
      .catch((error) => {
        setError("Ooops. Something went wrong...");
      });
  }, [movieId]);

  return (
    <div>
      {error && <div>{error}</div>}
      {actors && (
        <Ul>
          {actors.cast.map(({ name, character, profile_path, id }) => (
            <Li key={id}>
              {profile_path ? (
                <Img
                  alt={name}
                  src={`https://image.tmdb.org/t/p/w92${profile_path}`}
                />
              ) : (
                <Img src="https://upload.wikimedia.org/wikipedia/commons/a/ac/No_image_available.svg" />
              )}

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
