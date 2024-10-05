import "./Admin_Interface.css";
import React, { useState, useContext } from 'react';
import axios from 'axios';
import { PasswordContext } from './Password_Context'

const Admin_Interface: React.FC = () => {
	const { password } = useContext(PasswordContext); 
	const [name, setName] = useState('');
	const [song, setSong] = useState('');
	const [location, setLocation] = useState('');
	
	// functions for handling input for backend call
        const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
                setName(event.target.value);
        };
        const handleSongChange = (event: React.ChangeEvent<HTMLInputElement>) => {
                setSong(event.target.value);
        };
        const handleLocationChange = (event: React.ChangeEvent<HTMLInputElement>) => {
                setLocation(event.target.value);
        };

	// Send the JSON file to the backend
        const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault(); // prevents the page from reloading (except it still reloads?)
		const formData = {
			// password: password,
			name: name,
			song: song,
			delOrAdd: location
		};

		const jsonString = JSON.stringify(formData);

		console.log(jsonString);
		
		axios.post('/backend-endpoint', jsonString)
			.catch(error => {
				console.error('Error:', error)
			});
        };

	return (
	<div>
		<h1>Admin Interface</h1>

		{/* Create Entry Admin */}
		<div className="border">
			{/* Three input boxs with a submit button */}
			<h3>
				<div className="node_title">
					Create Entry Admin
				</div>
			</h3>
			<form>
				<label>Name</label>
				<br></br>
				<input></input>
				<br></br>
				<label>Song Name</label>
				<br></br>
				<input></input>
				<br></br>
				<label>Location</label>
				<br></br>
				<input></input>
				<br></br>
				<button>Submit</button>
			</form>
		</div>
	
	        {/* Pop */}
	        <div className="border">
			{/* Just a 'pop' button */}
                        <h3>
                                <div className="node_title">
                                        Pop
                                </div>
                        </h3>
	        </div>

	        {/* Delete */}
	        <div className="border">
			{/* Input box for song name and submit button*/}
                        <h3>
                                <div className="node_title">
                                        Delete Entry
				</div>
                        </h3>
		</div>

	        {/* Clear Database */}
	        <div className="border">
			{/* Single Clear Button with a verification */}
                        <h3>
                                <div className="node_title">
                                        Clear Database
                                </div>
                        </h3>
		</div>
	</div>
	);
};


export default Admin_Interface;
