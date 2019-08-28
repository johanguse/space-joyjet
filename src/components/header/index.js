import { Link } from 'gatsby';
import React from 'react';
import './_header.scss';

import Logo from "../../components/logo"

const Header = ({ siteTitle }) => (
  <nav className="container navbar navbar-expand-lg navbar-light bg-light">
    <Logo className="navbar-brand" siteTitle={siteTitle} />
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNavDropdown">
      <ul className="navbar-nav ml-auto">
        <li className="nav-item active">
          <Link to="/blog">Blog</Link>
        </li>
        <li className="nav-item">
          <Link to="/">Popular</Link>
        </li>
        <li className="nav-item">
          <Link to="/tags">Archive</Link>
        </li>
        <li className="nav-item">
          <Link to="/about">About</Link>
        </li>
        <li className="nav-item">
          <Link to="/projects">Projects</Link>
        </li>
      </ul>
    </div>
  </nav>
);

export default Header;