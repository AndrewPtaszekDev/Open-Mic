import './SongRequests.css';
import React, { useState } from 'react';
import InputField from "./InputField";
import WaitlistSubmitButton from "./WaitlistSubmitButton";

const SongRequests: React.FC = () => {

  const [fullName, setFullName] = useState<string>('');
  const [songName, setSongName] = useState<string>('');

  return (
    <div className="song-requests">
      <div className='title'>Join the Waitlist</div>
      <div className="input-group"> {/* New div for flexbox layout */}
        <InputField fieldPrompt='Full Name' setFieldContent={setFullName} />
      </div>
      <div className="input-group"> {/* Another group for the next field */}
        <InputField fieldPrompt='Song Name' setFieldContent={setSongName} />
      </div>
      <WaitlistSubmitButton fullName={fullName.toString()} songName={songName.toString()} />
    </div>
  );
};

export default SongRequests;
