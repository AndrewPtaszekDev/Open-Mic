import './About.css';
import React from 'react';

const About: React.FC = () => {
  return (
    <div>
    <div className="aboutclubtitle">
      The Production Team
    </div>
    <div className="aboutcontainer">
      <div className="abouttext">
      Our team created a website as part of our learning journey into React, Django, and backend server development. The main purpose of this website is to replace the manual list we currently use for our events, which keeps track of the order in which people go up to perform. By moving this process online, we’ve aimed to make it more efficient and organized, allowing users to sign up digitally and view their position in the performance lineup in real-time. This project has been a great way to build our skills in both front-end and back-end development, while creating a useful tool for event management.
     </div>
    </div>
  </div>
  );
};

export default About;
