import { Link, Outlet } from "react-router-dom";

import "./root.css";
import { applicationRoutes } from "./router";

function Root() {
  return (
    <>
      <header>
        <nav>
          <img className="logo" src="/vite.svg" alt="Vite Logo" />
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
    </>
  );
}

export default Root;
