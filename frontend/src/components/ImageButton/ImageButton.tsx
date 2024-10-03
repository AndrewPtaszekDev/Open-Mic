// ImageButton.tsx
import React, { useState } from 'react';
import CD from '/Users/michaelcarlson/Documents/GitHub/Open-Mic/frontend/src/Assets/CD.jpeg';

interface ImageButtonProps {
  src: string;         // The source of the image
  alt: string;         // The alt text for the image
  onClick: () => void; // Function to be called on click
}

const ImageButton: React.FC<ImageButtonProps> = ({ src, alt, onClick }) => {
  const [isSpinning, setIsSpinning] = useState(false); // State for spinning effect

  const handleClick = () => {
    setIsSpinning(!isSpinning); // Toggle spinning state
    onClick();                  // Call the onClick prop
  };

  return (
    <button className={`image-button ${isSpinning ? 'spin' : ''}`} onClick={handleClick}>
      <img src={src} alt={alt} className="button-image" />
    </button>
  );
};

export default ImageButton;
