import React from "react";
import "../../bootstrap/js/src/collapse";
import Icon from "./Icons";
export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light text-dark bg-light">
      <div className="container mx-auto">
        <a className="navbar-brand" href="/">
          CINDERBUILD
        </a>
        <button className="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#top-navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse justify-content-around" id="top-navigation">
          {/* Defaults to non logged in navbar */}
          <ul className="nav navbar-nav justify-content-around px-3 align-items-center">
            <li className="nav-item">
              <a className="nav-link text-black" href="/">
                Products
              </a>
            </li>
            <li className="nav-item search-container">
              <div className="input-group search flex-row">
                <label htmlFor="nav-search" className="input-group-text form-control bg-transparent border-0 d-inline">
                  <Icon name="search" />
                </label>
                <input type="text" className="search-input border-0 d-inline" id="nav-search" placeholder="search products, Brands and categories" />
              </div>
            </li>
            <li className="nav-item">
              <a className="nav-link text-black" href="/">
                About us
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-black" href="/">
                Log In
              </a>
            </li>
            <li className="nav-item">
              <button className="btn btn-primary">Create Account</button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
