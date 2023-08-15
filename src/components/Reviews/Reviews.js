import { useEffect, useState } from "react";
import { MovieReviewsApi } from "../fetch/fetch";
import { useParams } from "react-router-dom";
import { Ul } from "./Reviews.styled";

const Reviews = () => {
  const [reviews, setRevies] = useState(null);
  const [error, setError] = useState();

  const { movieId } = useParams();

  useEffect(() => {
    MovieReviewsApi(movieId)
      .then((response) => {
        setRevies(response);
      })
      .catch((error) => {
        setError("Ooops. Something went wrong...");
      });
  }, [movieId]);
  return (
    <div>
      {error && <div>{error}</div>}
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
