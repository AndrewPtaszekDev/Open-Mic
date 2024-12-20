import './SongRequests.css';
import React, { useState } from 'react';
import InputField from "./InputField";
import WaitlistSubmitButton from "./WaitlistSubmitButton";

interface fetchDataFunction {
    fetchData: () => void;
}
const SongRequests: React.FC<fetchDataFunction> = ({fetchData}) => {

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
      <div className="Waitlist-Submission-Button">
        <WaitlistSubmitButton fullName={fullName.toString()} songName={songName.toString()}  fetchData={fetchData}/>
      </div>
    </div>
  );
};

export default SongRequests;
