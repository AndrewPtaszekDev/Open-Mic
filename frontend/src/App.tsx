import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavBar from "./components/NavBarComponents/NavBar";
import './App.css';
import SiteTitle from "./components/NavBarComponents/SiteTitle";
import Home from "./components/HomeComponents/Home";
import ScrollingBanner from './components/HomeComponents/ScrollingBanner/ScrollingBanner';
import Admin from "./components/AdminComponents/Admin";

const About: React.FC = () => (
	<div>
		<h1>About Page</h1>
	</div>
);

const Events: React.FC = () => (
  <div>
    <h1>Events Page</h1>
  </div>
);

const App: React.FC = () => {
  const names = [ 'Our Dev Team', 'Andrew Ptaszek', 'Zane Wolfe', 'Colin Sadowitz', 'Michael Carlson',
  'Our Dev Team', 'Andrew Ptaszek', 'Zane Wolfe', 'Colin Sadowitz', 'Michael Carlson',
  'Our Dev Team', 'Andrew Ptaszek', 'Zane Wolfe', 'Colin Sadowitz', 'Michael Carlson'];
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
            <Route path="/about" element={<About />} />
            <Route path="/events" element={<Events />} />
		<Route path="/admin-page" element={<Admin />} />
          </Routes>
        </div>
      </div>
   </Router>
  );
};

export default App;
