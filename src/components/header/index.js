import React from 'react'
import { Link } from 'gatsby'

import Logo from "../../components/logo"


class Header extends React.Component {
  constructor (props) {
    super(props);
    this.state = { isOpen: false };

    if (typeof window !== 'undefined') {
      //let prevScrollpos = window.pageYOffset;
      window.onscroll = function () {
        //const maxScroll = document.body.clientHeight - window.innerHeight;
        let currentScrollPos = window.pageYOffset;
        if (currentScrollPos <= 25) {
          document.getElementById("navbar").classList.remove("active");
          document.getElementById("navbar").classList.add("py-4");
        } else {
          document.getElementById("navbar").classList.add("active");
          document.getElementById("navbar").classList.remove("py-4");
        }
        //prevScrollpos = currentScrollPos;
      }
    }
  }

  toggleMenu() {
    
    console.log( this.state.isOpen );
    if (this.state.isOpen===true) {
      document.getElementById("BtnNavbarNavDropdown").classList.add("collapsed");
      document.getElementById("navbarNavDropdown").classList.remove("show");
    } else {
      document.getElementById("BtnNavbarNavDropdown").classList.remove("collapsed");
      document.getElementById("navbarNavDropdown").classList.add("show");
    }
    this.setState({ isOpen: !this.state.isOpen });
  }

  render() {
    return (
      <header className="header">
        <nav className="navbar fixed-top navbar-expand-lg py-4 navbar-joyjet" id="navbar">
          <div className="container">
            <Logo className="navbar-brand" siteTitle={this.props.siteTitle} />
            <button className="navbar-toggler navbar-toggler-right collapsed"
            onClick={() => this.toggleMenu()}
            type="button" data-toggle="collapse" id="BtnNavbarNavDropdown"
            data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Menu">
              <span className="icon-bar top-bar"></span>
              <span className="icon-bar middle-bar"></span>
              <span className="icon-bar bottom-bar"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavDropdown">
              <ul className="navbar-nav ml-auto">
                <li className="nav-item active">
                  <Link to="/blog" activeClassName="active">Blog</Link>
                </li>
                <li className="nav-item">
                  <Link to="/about" activeClassName="active">Popular</Link>
                </li>
                <li className="nav-item">
                  <Link to="/tags" activeClassName="active">Archive</Link>
                </li>
                <li className="nav-item">
                  <Link to="#about-us" activeClassName="active">About</Link>
                </li>
                <li className="nav-item">
                  <Link to="/projects" activeClassName="active">Projects</Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>
    )
  }
}

export default Header
