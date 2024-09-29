import './Home.css';
import React from 'react';
import SongRequests from "./SongRequests";
import CurrentWaitlist from "./CurrentWaitlist";

const Home: React.FC = () => {
  return (
      <div className="home">
          <div className="border">
              <SongRequests/>
          </div>
          <div className='border'>
              <div>Songs Up Next:</div>
              <CurrentWaitlist/>
          </div>
      </div>
  );
};

export default Home;
