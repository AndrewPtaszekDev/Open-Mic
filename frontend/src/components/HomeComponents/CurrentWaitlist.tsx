import './CurrentWaitlist.css';
import React, { useEffect, useState } from 'react';
import UpcomingSong from './UpcomingSong';
import axios from 'axios';

// Define the expected shape of data
interface WaitlistItem {
  name: string;
  song: string;
}

const CurrentWaitlist: React.FC = () => {
  const [data, setData] = useState<WaitlistItem[]>([]); // Use an array of objects for the waitlist data

  // Function to fetch data from the backend
  const fetchData = () => {
    axios.get('http://127.0.0.1:8000/api/get_all_waitlists/')
      .then((response) => {
        setData(response.data); // Assuming response.data is an array of {name, song} objects
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  };

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
    <div className="scrollable-container">
      <ul className="scrollable-list">
        {data.map((item, index) => (
          <li key={index}>
            <div className='list-item'>
              <UpcomingSong fullName={item.name} songName={item.song} />
            </div>
            </li>
        ))}
      </ul>
    </div>
  );
};

export default CurrentWaitlist;
