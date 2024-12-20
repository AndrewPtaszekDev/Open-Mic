import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from "./components/HomeComponents/Home";
import Heading from "./components/HeadingComponents/Heading"; // Import the new Heading component
import Admin from "./components/AdminComponents/Admin";
import Admin_Interface from "./components/AdminComponents/Admin_Interface";
import Club from "./components/ClubComponents/Club";
import About from "./components/AboutComponents/About";
import { PasswordContext } from './components/AdminComponents/Password_Context';

export const IP = "34.74.108.77";
export const DEVELOPMENT_MODE = false;

export const ALLOW_SONG_REQUESTS = true


const App: React.FC = () => {
  const names = [
    'Our Dev Team', 'Andrew Ptaszek', 'Zane Wolfe', 'Colin Sadowitz', 'Michael Carlson','Our Dev Team', 'Andrew Ptaszek', 'Zane Wolfe', 'Colin Sadowitz', 'Michael Carlson','Our Dev Team', 'Andrew Ptaszek', 'Zane Wolfe', 'Colin Sadowitz', 'Michael Carlson'
  ]; // Names for the banner

  const [password, setPassword] = useState('');

  return (
    <PasswordContext.Provider value={{ password, setPassword }}>
      <Router>
        <Heading names={names} />

        <div>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/club" element={<Club />} />
            <Route path="/about" element={<About />} />
            <Route path="/admin-page" element={<Admin />} />
            <Route path="/admin-interface" element={<Admin_Interface />} />
          </Routes>
        </div>
      </Router>
    </PasswordContext.Provider>
  );
};

export default App;
