import { Outlet } from "react-router-dom";
import { Navigation, Ul } from "./Layout.styled";
import { Suspense } from "react";

export const Layout = () => {
  return (
    <div>
      <Ul>
        <li>
          <Navigation to="/">Home</Navigation>
        </li>
        <li>
          <Navigation to="/movies">Movies</Navigation>
        </li>
      </Ul>
      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
    </div>
  );
};
