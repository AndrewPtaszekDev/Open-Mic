import React from 'react';
import ScrollingBanner from './ScrollingBanner/ScrollingBanner';
import NavMenu from './NavBarComponents/NavMenu';
import './Heading.css'; // If you have specific styles for the Heading component

interface HeadingProps {
    names: string[]; // Define the props for the Heading component
}

const Heading: React.FC<HeadingProps> = ({ names }) => {
    return (
        <header className="heading"> {/* Add the CSS class for styling */}
            <ScrollingBanner names={names} />
            <NavMenu />
        </header>
    );
};

export default Heading;
