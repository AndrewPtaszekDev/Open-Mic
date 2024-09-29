import './SongRequests.css';
import React, {useState} from 'react';
import InputField from "./InputField";
import WaitlistSubmitButton from "./WaitlistSubmitButton";

const SongRequests: React.FC = () => {

  const [fullName, setFullName] = useState<string>('');
  const [songName, setSongName] = useState<string>('');

  return (
      <div className="song-requests">
          <div>Join the waitlist:</div>
          <InputField fieldPrompt='Full Name:' setFieldContent={setFullName}/>
          <InputField fieldPrompt='Song Name:' setFieldContent={setSongName}/>
          <WaitlistSubmitButton fullName={fullName.toString()} songName={songName.toString()}/>
      </div>
  );
};

export default SongRequests;
