import React from 'react'
import { Link } from 'gatsby'
import './_header.scss'
//import styled from 'styled-components'

import Logo from "../../components/logo"


class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      show: true,
      scrollPos: 0
    };
    this.handleScroll = this.handleScroll.bind(this);
  }

  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  }

  handleScroll() {
    const { scrollPos } = this.state;
    this.setState({
      scrollPos: document.body.getBoundingClientRect().top,
      show: document.body.getBoundingClientRect().top > scrollPos
    });
    if(scrollPos <= -175){
    console.log(scrollPos);
    }
  }

  render() {
    //const { children } = this.props
    return (
      <nav className="container-fluid navbar navbar-expand-lg py-4 navbar-joyjet">
        <div className="container">
          <Logo className="navbar-brand" siteTitle={this.props.siteTitle} />
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
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
    )
  }
}

export default Header


/*

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
*/