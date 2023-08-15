import { lazy } from "react";
import { Route, Routes } from "react-router-dom";
import { Layout } from "./Layout/Layout";

const Home = lazy(() => import("./Home/Home"));
const Movies = lazy(() => import("./Movies/Movies"));
const MovieDetails = lazy(() =>
  import("../components/MovieDetails/MovieDetails")
);
const Cast = lazy(() => import("../components/Cast/Cast"));
const Reviews = lazy(() => import("../components/Reviews/Reviews"));

export const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="movies" element={<Movies />} />
          <Route path="movies/:movieId" element={<MovieDetails />}>
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
        </Route>
        <Route
          path="*"
          element={
            <div style={{ color: "red", textAlign: "center" }}>
              Not Found, pleas enter the right route!!!{" "}
            </div>
          }
        />
      </Routes>
    </div>
  );
};
