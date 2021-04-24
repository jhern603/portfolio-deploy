import React, { useState } from 'react';

const Navbar = () => {
  const [menu, setMenu] = useState(false);
  const clickHandler = (e) => {
    e.preventDefault();
    setMenu(!menu);
  };
  return (
    <nav className="nav__container">
      <div className="menu" onClick={clickHandler}>
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </div>
      <ul className={`nav__links ${menu ? 'nav__links__active' : ''}`}>
        <li className="nav__item">
          <a href="#">About</a>
        </li>
        <li className="nav__item">
          <a href="#projects">Projects</a>
        </li>
        <li className="nav__item">
          <a href="#contact">Contact</a>
        </li>
      </ul>
    </nav>
  );
}
export default Navbar