import { Li, Ul } from "./MovieList.styled";

const { useLocation } = require("react-router-dom");

function MovieList({ list }) {
  const location = useLocation();
  return (
    <div>
      <Ul>
        {list.map(({ title, id }) => (
          <li key={id}>
            <Li to={`/movies/${id}`} state={{ from: location }}>
              {title}
            </Li>
          </li>
        ))}
      </Ul>
    </div>
  );
}
export default MovieList;
