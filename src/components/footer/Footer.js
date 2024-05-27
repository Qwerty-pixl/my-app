import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section about">
          <h1 className="logo-text"><span>Awesome</span>Footer</h1>
          <p>
            This is an awesome footer with responsive design and animations.
          </p>
          <div className="contact">
            <span><i className="fas fa-phone"></i> &nbsp; 123-456-789</span>
            <span><i className="fas fa-envelope"></i> &nbsp; info@awesomefooter.com</span>
          </div>
        </div>
        <div className="footer-section links">
          <h2>Quick Links</h2>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/about">About</a></li>
            <li><a href="/cart">Cart</a></li>
            <li><a href="/contacts">Contact</a></li>
          </ul>
        </div>
        <div className="footer-section social">
          <h2>Social Media</h2>
          <div className="social-links">
            <a href="https://www.messenger.com/t/Username" className="fab fa-facebook-f"><span className="sr-only">Facebook</span></a>
            <a href="/" className="fab fa-twitter"><span className="sr-only">Twitter</span></a>
            <a href="https://www.instagram.com/guliandat" className="fab fa-instagram"><span className="sr-only">Instagram</span></a>
            <a href="https://telegram.me/qwerty_int" className="fab fa-linkedin-in"><span className="sr-only">LinkedIn</span></a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        &copy; 2024 AwesomeFooter | Designed by YourName
      </div>
    </footer>
  );
};

export default Footer;
