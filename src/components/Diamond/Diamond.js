import React from 'react';
import './Diamond.css';
import DynamicLinkButton from '../DynamicLinkButton';

const Diamond = () => {
  return (
    <section className="di-section">
      <div className="di-text">
        <h1>The guide to diamonds</h1>
        <p className='di_txt'>Just like a snowflake or fingerprint, no two diamonds are the same, with each sparkling stone bearing its own unique set of characteristics. Our Guide to Diamonds is here to help you understand these properties, giving you the knowledge you need to choose your perfect stone.</p>
        <DynamicLinkButton to="/cart" text="Book Appointment" />
      </div>
    </section>
  );
};

export default Diamond;
