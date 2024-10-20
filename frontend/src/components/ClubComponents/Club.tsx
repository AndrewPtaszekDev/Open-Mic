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
      </div>
    </div>
  );
};

export default Club;
