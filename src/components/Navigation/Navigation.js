import React from 'react';
import {NavLink} from "react-router-dom";

const Navigation = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-dark">
        <button type="button" className="btn btn-outline-light mr-4 mb-2">
          <NavLink to="/" className="navLink">My blog</NavLink>
        </button>
        <div>
          <ul className="nav">
            <li className="nav-item">
              <button type="button" className="btn btn-outline-light mr-3 mb-2">
                <NavLink to="/" className="navLink">Home</NavLink>
              </button>
            </li>
            <li className="nav-item">
              <button type="button" className="btn btn-outline-light mr-3 mb-2">
                <NavLink to="/posts/add" className="navLink">Add</NavLink>
              </button>
            </li>
            <li className="nav-item">
              <button type="button" className="btn btn-outline-light mr-3 mb-2">
                <NavLink to="/about" className="navLink">About</NavLink>
              </button>
            </li>
            <li className="nav-item">
              <button type="button" className="btn btn-outline-light mr-3 mb-2">
                <NavLink to="/contacts" className="navLink">Contacts</NavLink>
              </button>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navigation;