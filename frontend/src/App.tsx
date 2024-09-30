import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavBar from "./components/NavBarComponents/NavBar";
import './App.css';
import SiteTitle from "./components/NavBarComponents/SiteTitle";
import Home from "./components/HomeComponents/Home";
import ScrollingBanner from './components/HomeComponents/ScrollingBanner/ScrollingBanner';
import Admin from "./components/AdminComponents/Admin";

// const Admin: React.FC = () => (
//     <div>
//         <h1>Admin Page</h1>
//    </div>
// );

const Events: React.FC = () => (
  <div>
    <h1>Events Page</h1>
  </div>
);

const App: React.FC = () => {
  // const [message, setMessage] = useState<string>('');
  //
  // useEffect(() => {
  //   const fetchData = async () => {
  //     // const response = await axios.get('http://localhost:8000/api/tasks/');
  //
  //     setMessage(response.data.message);
  //   };
  //
  //   fetchData();
  // }, []);
  const names = [ 'Current Dev Team', 'Andrew Ptaszek', 'Zane Wolf', 'Colin Sadowitz', 'Michael Carlson'];
  // Names for banner stored here

  return (
    <Router>
      <div>
        <ScrollingBanner names={names}/>
        <div style={{ marginTop: '33px' }}> {/* Adjust margin if needed */}
          <SiteTitle/>
          <NavBar/>
         <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/admin-page" element={<Admin />} />
           <Route path="/events" element={<Events />} />
          </Routes>
        </div>
      </div>
   </Router>
  );
};

export default App;
