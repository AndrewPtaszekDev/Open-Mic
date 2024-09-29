import './NavButton.css';
import React from 'react';
import { useNavigate } from 'react-router-dom';

interface NavButtonProps {
    to: string; // 'to' prop for navigation
    children: React.ReactNode; // Content inside the button (e.g., button text)
}

const NavButton: React.FC<NavButtonProps> = ({ to, children }) => {
    const navigate = useNavigate();

    function handleClick() {
        navigate(to); // Navigate to the provided route
    }

    return (
        <button onClick={handleClick} className='blue-text'>
            {children} {/* Render the text inside the button */}
        </button>
    );
};

export default NavButton;
