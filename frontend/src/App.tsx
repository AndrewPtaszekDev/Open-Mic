import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
//import NavBar from "./components/NavBarComponents/NavBar";
import './App.css';
import SiteTitle from "./components/NavBarComponents/SiteTitle";
import Home from "./components/HomeComponents/Home";
import ScrollingBanner from './components/ScrollingBanner/ScrollingBanner';
import Admin from "./components/AdminComponents/Admin";
import NavMenu from './components/NavBarComponents/NavMenu';

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
        <div/>
        {/* Scrolling Banner */}
       <ScrollingBanner names={names} />

        {/* Main Content */}
        <div>
          {/* Off-Canvas NavMenu */}
          <NavMenu />

          <SiteTitle />
          
          {/* Routes for different pages */}
          <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/events" element={<Events />} />
		        <Route path="/admin-page" element={<Admin />} />
          </Routes>
      </div>
    </Router>
  );
};

export default App;