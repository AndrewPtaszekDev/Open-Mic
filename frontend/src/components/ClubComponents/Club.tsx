import './Club.css';
import React from 'react';

const Club: React.FC = () => {
  return (
    <div>
      <div className="clubtitle">
        Music Association
      </div>
      <div className="clubcontainer">
        <div className="clubtext">
          The purpose of the Music Association is to connect poly students interested in music. We exist to encourage the expression of musical talents, foster collaboration between musicians and music lovers, and assist in developing musical abilities for all students here at Florida Poly. Along with jam sessions, the club hosts workshops to teach and explore music-related topics such as music theory, production, and performance techniques.
        </div>
      </div>
      <div className="clubcontainer">
        <div className="clubtext">
          Join our discord server: <a href='https://discord.gg/QV9txczfVd'>here</a>.
        </div>
        
        <div className="clubtext">
          Join the club: <a href='https://floridapoly.presence.io/organization/music-association'>here</a>.
        </div>
      </div>
      <div className="clubcontainer">
        <div className="clubtext">
          President: Lukas Kelk <br></br>
          Vice President: Andrew Ptaszek <br></br>
          Secretary: Carlos Murillo <br></br>
          Treasurer: Jake Diaz-Iglesias <br></br>
        </div>
      </div>
      <div className="clubcontainer">
        <div className="clubtext">
          Club Meetings (SIM Lab, IST-1022):<br></br>
          Jam Session 4:00 - 6:30pm, Thursdays <br></br>
          Music Theory Workshop 6:30 - 7:30pm, Thursdays <br></br>
        </div>
      </div>
    </div>
  );
};

export default Club;
