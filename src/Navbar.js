import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <a className="navbar-brand" href="#">My Movies</a>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNavDropdown">
        <ul className="navbar-nav">
          <li className="nav-item active">
            <Link className="nav-link" to="/">Search</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/wanttowatch">Want to watch</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/liked">Liked Movies</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/disliked">Disliked Movies</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;

