import './UpcomingSong.css';  // Make sure this path is correct
import React from 'react';

interface UpcomingSongInterface {
    fullName: string,
    songName: string
}

const UpcomingSong: React.FC<UpcomingSongInterface> = ({ fullName, songName }) => {
    return (
        <div className="upcoming-song">  {/* Make sure this class matches your CSS */}
            <div className="upcoming-fullname">{fullName}</div>  {/* Same here */}
            <div className="upcoming-songname">{songName}</div>  {/* And here */}
        </div>
    );
};

export default UpcomingSong;
