// src/App.js
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes,  NavLink } from 'react-router-dom';
import Home from './components/Pages/Home';
import About from './components/Pages/About';
import Contacts from './components/Pages/Contacts';
import Delivery from './components/Pages/Delivery'
import Cart from './Cart';
import './App.css'
import Footer from './components/footer/Footer';

const App = () => {
    const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };
  return (
    <>
    <Router>
      <div>
        <nav>
        <div className="burger-menu" onClick={toggleMenu}>
            &#9776;
          </div> 
          <ul className={menuOpen ? 'show' : ''}>
            <li>
            <NavLink exact to="/" className={({ isActive }) => (isActive ? 'active' : '')}>Home</NavLink>
            </li>
            <li>
            <NavLink to="/about" className={({ isActive }) => (isActive ? 'active' : '')}>About</NavLink>
            </li>
            <li>
            <NavLink to="/contact" className={({ isActive }) => (isActive ? 'active' : '')}>Contact</NavLink>
            </li>
            <li>
            <NavLink to="/cart" className={({ isActive }) => (isActive ? 'active' : '')}>Cart</NavLink>
            </li>
            <li>
            <NavLink to="/delivery" className={({ isActive }) => (isActive ? 'active' : '')}>Delivery</NavLink>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route exact path="/" element={<Home/>} />
          <Route path="/about" element={<About/>} />
          <Route path="/contact" element={<Contacts/>} />
          <Route path="/cart" element={<Cart/>} />
          <Route path="/delivery" element={<Delivery/>} />
        </Routes>
      </div>
    </Router>
    
    <Footer/>
    </>
  );
};

export default App;
