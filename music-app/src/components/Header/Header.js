import { Link } from "react-router-dom";

import { useContext } from "react";
import { authContext } from "../../contexts/AuthContext";

export const Header = () => {
  const { isAutheticated, userEmail } = useContext(authContext);

  return (
    <header>
      <nav>
        <img src="./images/headphones.png" />
        <Link to="/">Home</Link>
        <ul>
          {/* <!--All user--> */}
          <li>
            <Link to="/catalog">Catalog</Link>
          </li>
          <li>
            <Link to="/search">Search</Link>
          </li>
          {!isAutheticated && (
            <div>
              <li>
                <Link to="/login">Login</Link>
              </li>
              <li>
                <Link to="/register">Register</Link>
              </li>
            </div>
          )}

          {isAutheticated && (
            <div>
              <li>
                <Link to="/create">Create Album</Link>
              </li>
              <span>{userEmail}</span>
              <li>
                <Link to="/logout">Logout</Link>
              </li>
            </div>
          )}
        </ul>
      </nav>
    </header>
  );
};
