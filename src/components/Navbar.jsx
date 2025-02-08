
import { Link } from "react-router-dom";
import { useTheme } from "../context/ThemeContext";
import { Sun, Moon } from "lucide-react";
import photo_me_2 from "../../src/assets/photo_me_2.png";

function Navbar() {
  const { theme, setTheme } = useTheme();

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary fixed-top">
      <div className="container-fluid">
        {/* Branding with Header Content */}
        <Link className="navbar-brand d-flex align-items-center" to="/">
          <img
            src={photo_me_2}
            alt="Pratap Chandra Kuldi"
            className="me-2 rounded-circle"
            style={{ width: '45px', height: '45px', objectFit: 'cover' }}
          />
          <div>
            <h1 className="h5 mb-0">Pratap Chandra Kuldi</h1>
            <p className="small mb-0 d-none d-sm-block">
              MERN Stack | C | C++ | Java | Python | .NET |
              JavaScript | PHP | jQuery | AJAX | MySQL | MongoDB |
            </p>
          </div>
        </Link>

        {/* Mobile Toggle Button */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarContent"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Collapsible Content */}
        <div className="collapse navbar-collapse" id="navbarContent">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about">About</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/projects">Projects</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/certifications">Certifications</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/contact">Contact</Link>
            </li>
          </ul>
          <button
            className="btn btn-outline-light ms-lg-3 mt-2 mt-lg-0"
            onClick={() => setTheme(theme === "light" ? "dark" : "light")}
          >
            {theme === "light" ? <Moon size={20} /> : <Sun size={20} />}
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
