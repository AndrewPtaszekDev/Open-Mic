import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './NavMenu.css';

const NavMenu: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isButtonHidden, setIsButtonHidden] = useState(false); // New state for button animation
  const navigate = useNavigate();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // Function to handle navigation
  const handleNavigation = (path: string) => {
    setIsButtonHidden(true); // Trigger button hide animation
    setTimeout(() => {
      navigate(path); // Navigate after the animation completes
      toggleMenu();   // Close the menu after navigation
    }, 500); // Wait for the animation to complete (match CSS animation duration)
  };

  return (
    <>
      {/* NavButton to trigger the menu */}
      <button 
        className={`nav-button ${isButtonHidden ? 'hide' : ''}`} // Apply animation class based on state
        onClick={toggleMenu}
      >
      Menu
      </button>

      {/* Off-Canvas Menu */}
      <div className={`nav-menu ${isOpen ? 'open' : ''}`}>
        <nav className="menu-nav">
          <ul>
            {/* Manually handle navigation */}
            <li><button onClick={() => handleNavigation('/')}>Home</button></li>
            <li><button onClick={() => handleNavigation('/events')}>Events</button></li>
            <li><button onClick={() => handleNavigation('/about')}>About</button></li>
          </ul>
        </nav>
      </div>

      {/* Background overlay (optional for dimming effect) */}
      {isOpen && <div className="menu-overlay" onClick={toggleMenu}></div>}
    </>
  );
};

export default NavMenu;
