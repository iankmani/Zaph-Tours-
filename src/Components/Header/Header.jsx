import "./Header.css";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <div className="header">
      <h1 className="heading">Zaph tours</h1>
      <div className="links">
        <ol className="list">
          <li>
            <Link to="/" className="list-item">
              Home
            </Link>
          </li>
          <li>
            {" "}
            <Link to="/Destinations" className="list-item">
              Destinations
            </Link>
          </li>
          <li>
            {" "}
            <Link to="/Trip Types" className="list-item">
              Trip Types
            </Link>
          </li>
          <li>
            {" "}
            <Link to="/Contact Us" className="list-item">
              Contact Us
            </Link>
          </li>
        </ol>
      </div>
    </div>
  );
};
export default Header;
