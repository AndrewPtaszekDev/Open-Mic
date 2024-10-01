import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom'; // Import useLocation
import './NavMenu.css';

const NavMenu: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isButtonHidden, setIsButtonHidden] = useState(false); // State for button visibility
  const navigate = useNavigate();
  const location = useLocation(); // Track the current location

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleNavigation = (path: string) => {
    setIsButtonHidden(true); // Trigger button hide animation
    setTimeout(() => {
      navigate(path); // Navigate after the animation completes
      toggleMenu();   // Close the menu after navigation
    }, 500); // Match this with the CSS animation duration
  };

  // Reset button state when navigating to a new page
  useEffect(() => {
    setIsButtonHidden(false); // Reset button to visible state
  }, [location]); // Runs when the location changes

  return (
    <>
      {/* NavButton to trigger the menu */}
      <button 
        className={`nav-button ${isButtonHidden ? 'move-down' : ''}`} // Apply move-down class conditionally
        onClick={toggleMenu}
      >
        Navigate
      </button>

      {/* Off-Canvas Menu */}
      <div className={`nav-menu ${isOpen ? 'open' : ''}`}>
        <nav className="menu-nav">
          <ul>
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
