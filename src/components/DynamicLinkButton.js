import React from 'react';
import { Link } from 'react-router-dom';

const DynamicLinkButton = ({ to, text }) => {
  return (
    <Link to={to}>
      <button className='btn_dino' type='submit'>{text}</button>
    </Link>
  );
};

export default DynamicLinkButton;
