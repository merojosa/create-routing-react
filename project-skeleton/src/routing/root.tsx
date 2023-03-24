import { Link, Outlet } from "react-router-dom";

import "./root.css";
import { applicationRoutes } from "./router";

function Root() {
  return (
    <>
      <header>
        <nav>
          <Link className="logo" to={applicationRoutes.HOME}>
            <img src="/vite.svg" alt="Vite Logo" />
          </Link>
          <ul>
            <li>
              <Link to={applicationRoutes.HOME}>Home</Link>
            </li>
            <li>
              <Link to={applicationRoutes.ABOUT}>About</Link>
            </li>
          </ul>
        </nav>
      </header>
      <main>
        <Outlet />
      </main>
      <footer>Footer Example Text</footer>
    </>
  );
}

export default Root;
