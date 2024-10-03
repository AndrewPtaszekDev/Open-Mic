import React from 'react';
import './ScrollingBanner.css'; // Import the CSS file

interface ScrollingBannerProps {
    names: string[]; // Define the type for the names prop
}

const ScrollingBanner: React.FC<ScrollingBannerProps> = ({ names }) => {
    // Create a duplicate of the names for seamless scrolling
    const namesToDisplay = [...names, ...names]; // Duplicating the array

    return (
        <div className="banner-container">
            <div className="banner-content">
                {namesToDisplay.map((name, index) => (
                    <React.Fragment key={index}>
                        <span className="name">{name}</span>
                        {'/'}
                        {index < names.length - 1 &&  <span className="separator"></span>}
                    </React.Fragment>
                ))}
            </div>
        </div>
    );
};

export default ScrollingBanner;
