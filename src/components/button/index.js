import React from 'react';
import './_button.scss';

const Button = ({ buttonText }) => {
  return <button className="button"> {buttonText} </button>;
};

export default Button;
