import './WaitlistSubmitButton.css';
import React, {useState} from 'react';
import axios from "axios";
import {DEVELOPMENT_MODE, IP, ALLOW_SONG_REQUESTS, cookies} from "../../App";

interface WaitlistSubmitButton {
    fullName: string;
    songName: string;
    fetchData: () => any;
}

const WaitlistSubmitButton: React.FC<WaitlistSubmitButton> = ({ fullName, songName, fetchData }) => {

    const [message, setMessage] = useState<string>('');
    const [response, setResponse] = useState<string | null>(null);
    const handleSubmit = async (e: React.FormEvent) => {
        if(!ALLOW_SONG_REQUESTS) {
            alert("Hello, Open Mic Night has closed song requests.")
            return;
        }



        // setMessage(getJSON(fullName, songName))
        e.preventDefault();
	
	var isSubmitting = true;
	
        try {
            let url = 'http://localhost:8000/api/create-entry/';
            if(!DEVELOPMENT_MODE){
                url = 'http://'+IP+":8000/api/create-entry/";
            }
            const res = await axios.post(url, {
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
                alert("Successfully added song!");

	        // Disable the submit button and set a timer to re-enable it
	        const submit_button = document.getElementById('submit-button') as HTMLButtonElement;
		if (submit_button) submit_button.disabled = true;		

	        setTimeout(() => {
                isSubmitting = false;
                if (submit_button) submit_button.disabled = false;
            }, 5000); // Set timeout duration (e.g., 5 seconds)

            }
        } catch (error) {
            // Handle error response
		if (fullName == "" || songName == "")
			alert("Please fill out the name and song section");
		else if (fullName.length >= 100  || songName.length >= 100)
			alert("Max character count is 100 please reduce :)");
		else {
			console.error('Error sending message:', error);
			alert("An error has occurred!")
		}


		isSubmitting = false;
		const submit_button = document.getElementById('submit-button') as HTMLButtonElement;
		if (submit_button) submit_button.disabled = false;
    

        }
    };

  return (
      <div>
          <button id="submit-button" className="submit-button" onClick={handleSubmit}>Send!</button>
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
