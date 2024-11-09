import './CurrentWaitlist.css';
import React, { useEffect } from 'react';
import UpcomingSong from './UpcomingSong';
import {WaitlistItem} from "./Home";


interface fetchDataFunction {
    fetchData: () => void;
    data: WaitlistItem[];
}

const CurrentWaitlist: React.FC<fetchDataFunction> = ({fetchData, data}) => {

  useEffect(() => {
    // Initial fetch when the component mounts
    fetchData();

    // Set up an interval to fetch data every 60 seconds (60000 milliseconds)
    const intervalId = setInterval(() => {
      fetchData();
    }, 60000); // 60000ms = 1 minute

    // Clean up the interval when the component unmounts
    return () => clearInterval(intervalId);
  }, []); // Empty dependency array ensures this runs only once when the component mounts

  return (
    // <div className="scrollable-container">
      <ul className="scrollable-list">
        {data.map((item, index) => (
          <li key={index}>
            <div className='list-item'>
              <UpcomingSong fullName={item.name} songName={item.song} />
            </div>
            </li>
        ))}
      </ul>
    // </div>
  );
};

export default CurrentWaitlist;
