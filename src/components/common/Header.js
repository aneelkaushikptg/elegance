import React from "react";
import { Link } from "react-router-dom";
import { NavLink } from 'react-router-dom';

const Header = props => {
  return (
    <React.Fragment>
      <div className="menubar">
        <div className="container py-3 width100">
          <div className="row flex-nowrap justify-content-between align-items-center">
            <div className="col-4 pt-1 d-none d-sm-block"></div>
            <div className="col-4 text-center">
              <Link to={"/home"} className="navbar-brand logo">
                <img src="../src/images/logo.png" className="img-fluid" alt="logo" />
              </Link>
            </div>
            <div className="col-4 d-flex justify-content-end align-items-center">
              <a className="btn btn-sm btn-outline-secondary m-2" href="#">Sign In</a>
              <a className="btn btn-sm btn-outline-secondary" href="#">Register</a>
            </div>
          </div>
        </div>
        <nav className="container-fluid navbar navbar-expand-lg navbar-light bg-light">
          <div className="container">
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav mr-auto">
                <li className="nav-item">
                  <NavLink to="/home">Home</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink to="/collections">Collections</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink to="/wishlist">Wishlist</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink to="/about">About</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink to="/contact">Contact</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink to="/dashboard">Admin</NavLink>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </React.Fragment>
  );
};

export default Header;