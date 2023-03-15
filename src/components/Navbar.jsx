import React from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <>
      <div className="navbar d-flex align-items-center px-5 py-1">
        <h1 className="logo m-0">Zara</h1>
        <nav>
          <ul className="navbar-navi d-flex align-items-center m-0">
            <li>
              <NavLink to={"/"}>
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to={"/products"}>
                Products
              </NavLink>
            </li>
            <li>
              <NavLink to={"/about"}>
                About Us
              </NavLink>
            </li>
            <li>
              <NavLink to={"/contact"}>
                Contact
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
};

export default Navbar;
