import { Link } from 'gatsby';
import React from 'react';

import Logo from "../components/logo"

const Header = ({ siteTitle }) => (
  <header className="container-fluid">
    <div className="container">
      <div className="header_logo">
        <Logo siteTitle={siteTitle} />
      </div>
      <nav>
        <Link to="/blog">Blog</Link>
        <Link to="/about">About</Link>
      </nav>
    </div>
  </header>
);

export default Header;