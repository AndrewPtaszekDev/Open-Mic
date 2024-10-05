import './WaitlistSubmitButton.css';
import React, {useState} from 'react';
import axios from "axios";

interface WaitlistSubmitButton {
    fullName: string;
    songName: string;
    fetchData: () => any;
}

const WaitlistSubmitButton: React.FC<WaitlistSubmitButton> = ({ fullName, songName, fetchData }) => {

    const [message, setMessage] = useState<string>('');
    const [response, setResponse] = useState<string | null>(null);
    const handleSubmit = async (e: React.FormEvent) => {
        // setMessage(getJSON(fullName, songName))
        e.preventDefault();
        try {
            const res = await axios.post('http://127.0.0.1:8000/api/create-entry/', {
                name: fullName,
                song: songName
            }, {
                headers: {
                    'Content-Type': 'application/json',
                },
            });

            // Handle success response
            setResponse(res.data);
            if(res.status == 201){
                fetchData();
                alert("Successfully added song!")
            }
        } catch (error) {
            // Handle error response
            console.error('Error sending message:', error);
            alert("An error has occurred!")
        }
    };

  return (
      <div>
          <button onClick={handleSubmit}>Send!</button>
      </div>
  );
};

function getJSON(fullName: string, songName: string): string {
    const data = {
        fullName: fullName,
        songName: songName
    }
    return JSON.stringify(data);
}

export default WaitlistSubmitButton;
