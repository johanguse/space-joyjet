import React from 'react';
import './_button.scss';

const Button = ({ buttonText }) => {
  return <button className="hero-button"> {buttonText} </button>;
};

export default Button;
