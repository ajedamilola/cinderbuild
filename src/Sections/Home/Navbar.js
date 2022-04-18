import React from "react";
import { Link } from "react-router-dom";
import "../../bootstrap/js/src/collapse";
import Icon from "../../Components/Icons";
import logo from "../../assets/img/logo.svg";
import { useEffect } from "react";
export default function Navbar() {
  useEffect(()=>{
    var nav = document.getElementsByClassName("navbar")[0];
    var target = document.getElementById("title1");
    setInterval(()=>{
      var entredView = target.getBoundingClientRect().y <= window.innerHeight/1.3;
      nav.className = entredView?"navbar navbar-expand-lg navbar-light text-dark bg-light py-3 bordered fixed-top":"navbar navbar-expand-lg navbar-light text-dark bg-light py-3 "
    },200)
  },[])
  return (
    <nav className="navbar navbar-expand-lg navbar-light text-dark bg-light py-3">
      <div className="container mx-auto">
        <Link className="navbar-brand" to="/">
          <img src={logo} alt="cinderbuild logo" />
        </Link>
        <button
          className="navbar-toggler"
          data-bs-toggle="collapse"
          data-bs-target="#top-navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="collapse navbar-collapse justify-content-around"
          id="top-navigation"
        >
          {/* Defaults to non logged in navbar */}
          <ul className="nav navbar-nav justify-content-around align-items-center">
            <li className="nav-item">
              <Link className="nav-link text-black" to="/">
                Products
              </Link>
            </li>
            <li className="nav-item search-container">
              <div className="input-group search flex-row">
                <label
                  htmlFor="nav-search"
                  className="input-group-text form-control bg-transparent border-0 d-inline"
                >
                  <Icon name="search" />
                </label>
                <input
                  type="text"
                  className="search-input border-0 d-inline"
                  id="nav-search"
                  placeholder="search products, Brands and categories"
                />
              </div>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-black" to="/">
                About us
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-black" to="/">
                LogIn
              </Link>
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
