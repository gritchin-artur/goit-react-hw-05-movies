import { useEffect, useState } from "react";
import { movieReviewsApi } from "../../services/fetch";
import { useParams } from "react-router-dom";
import { Ul } from "./Reviews.styled";

const Reviews = () => {
  const [reviews, setRevies] = useState(null);
  const [error, setError] = useState();
  const [loading, setLoading] = useState(false);

  const { movieId } = useParams();

  useEffect(() => {
    setLoading(true);
    movieReviewsApi(movieId)
      .then((response) => {
        setRevies(response);
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
      {reviews && (
        <Ul>
          {reviews.map(({ author, content, id }) => (
            <li key={id}>
              <h2>{author}</h2>

              <p>{content}</p>
            </li>
          ))}
        </Ul>
      )}
    </div>
  );
};

export default Reviews;
