import './Home.css';
import React from 'react';
import SongRequests from "./SongRequests";
import CurrentWaitlist from "./CurrentWaitlist";
import SiteTitle from './SiteTitle';

const Home: React.FC = () => {
  return (
      <div className="home">
          <div className="border">
             <SiteTitle />
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
