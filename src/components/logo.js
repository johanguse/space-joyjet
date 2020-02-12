import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';
import LogoSVG from '../images/joyjet_space_logo.svg'

const Logo = ({ siteTitle }) => <><Link to="/"><img className="brand-joyjet" src={LogoSVG} alt={`${siteTitle} Logo`} /></Link></>

Logo.propTypes = {
  siteTitle: PropTypes.string,
};

Logo.defaultProps = {
  siteTitle: ``,
};

export default Logo
