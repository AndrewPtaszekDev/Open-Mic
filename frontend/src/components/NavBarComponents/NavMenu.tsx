import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import './NavMenu.css';

const NavMenu: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation(); // Get the current location

  const handleNavigation = (path: string) => {
    navigate(path); // Navigate to the specified path
  };

  // Function to check if the current path is active
  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="nav-menu">
      <ul className="menu-nav">
        <li>
          <button
            onClick={() => handleNavigation('/')}
            className={isActive('/') ? 'active' : ''}
          >
            Home
          </button>
        </li>
        <li>
          <button
            onClick={() => handleNavigation('/club')}
            className={isActive('/club') ? 'active' : ''}
          >
            Club
          </button>
        </li>
        <li>
          <button
            onClick={() => handleNavigation('/about')}
            className={isActive('/about') ? 'active' : ''}
          >
            About
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default NavMenu;
