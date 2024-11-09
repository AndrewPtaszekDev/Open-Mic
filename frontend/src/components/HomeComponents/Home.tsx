import './Home.css';
import React, {useState} from 'react';
import SongRequests from "./SongRequests";
import CurrentWaitlist from "./CurrentWaitlist";
import SiteTitle from './SiteTitle';
import axios from "axios";
import {DEVELOPMENT_MODE, IP} from "../../App";


// Define the expected shape of data
export interface WaitlistItem {
  name: string;
  song: string;
}


const Home: React.FC = () => {

  const [data, setData] = useState<WaitlistItem[]>([]); // Use an array of objects for the waitlist data
    // Function to fetch data from the backend
    const fetchData = () => {
        let url = 'http://localhost:8000/api/get_all_waitlists/';
        if(!DEVELOPMENT_MODE){
            url = 'http://'+IP+":8000/api/get_all_waitlists/";
        }

        axios.get(url)
            .then((response) => {
                setData(response.data); // Assuming response.data is an array of {name, song} objects
            })
            .catch((error) => {
                console.error('Error fetching data:', error);
            });
    };

  return (
      <div className="home">
          <div className="border">
             <SiteTitle />
             <SongRequests fetchData={fetchData}/>
          </div>
          <div className='border'>
              <div className= 'upnexttitle'>Songs Up Next</div>
              <CurrentWaitlist fetchData={fetchData} data={data}/>
          </div>
      </div>
  );
};

export default Home;
