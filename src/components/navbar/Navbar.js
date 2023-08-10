import React from 'react';
import "./navbar.css";
import { Link } from 'react-router-dom';
export default function Navbar() {
  return (
    <>
    <nav class="navbar navbar-expand-lg navbar-color1">
  <div class="container-fluid">
    <Link to="/" class="navbar-brand ms-5 text-white heading-name" href="#">Naveen Kumar A</Link>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon bg-white"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav ms-auto text-white  mb-2 mb-lg-0 me-5">
        <li class="nav-item">
          <Link to="/home" class="nav-link active nav-heading-name text-white" aria-current="page" href="#">Home</Link>
        </li>
        <li class="nav-item">
          <Link to="/about" class="nav-link nav-heading-name text-white" href="#">About</Link>
        </li>
        <li class="nav-item">
          <Link to="/portfolio" class="nav-link nav-heading-name text-white" href="#">Portfolio</Link>
        </li>
        <li class="nav-item">
          <Link to='/contact' class="nav-link nav-heading-name text-white" href="#">Contact</Link>
        </li>
      </ul>
    </div>
  </div>
</nav>
    </>
  )
}
