import './NavBar.css';
import React from 'react';
import NavButton from './NavButton';

const NavBar: React.FC = () => {
  return (
    <div className="navbar">
        <NavButton to="/events">Events</NavButton>
        <NavButton to="/">Home</NavButton>
        <NavButton to="/admin-page">Admin</NavButton>
    </div>
  );
};

export default NavBar;
