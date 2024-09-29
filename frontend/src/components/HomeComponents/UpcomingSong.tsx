import './UpcomingSong.css';
import React from 'react';

interface UpcomingSongInterface {
    fullName: string,
    songName: string
}
const UpcomingSong: React.FC<UpcomingSongInterface> = ({fullName, songName}) => {
   return (
       <div className="upcoming-song">
           <div className='upcoming-fullname'>{fullName}</div>
           <div className='upcoming-songname'>{songName}</div>
       </div>
   );
};

export default UpcomingSong;
