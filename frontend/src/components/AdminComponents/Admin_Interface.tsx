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

	// Send the JSON file for Create Entry Admin
        const handleCEASubmit = (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault(); // prevents the page from reloading (except it still reloads?)
		const formData = {
			password: password,
			name: name,
			song: song,
			delOrAdd: location
		};
		console.log(password);
		const jsonString = JSON.stringify(formData);

		console.log(jsonString);
		
		axios.post('http://localhost:8000/access/create_entry_admin/', formData)
			.catch(error => {
				console.error('Error:', error)
			});
        };

        // Send the JSON file for DELETE
        const handleDELETESubmit = (event: React.FormEvent<HTMLFormElement>) => {
                event.preventDefault(); // prevents the page from reloading (except it still reloads?)
                const formData = {
                        password: password,
                        name: name,
                        song: song,
                        delOrAdd: location
                };
                console.log(password);
                const jsonString = JSON.stringify(formData);

                console.log(jsonString);

                axios.delete('http://localhost:8000/access/delete_entry/', {data: formData})
                        .catch(error => {
                                console.error('Error:', error)
                        });
        };

        // Send the JSON file for POP
        const handlePOPSubmit = (event: React.FormEvent<HTMLFormElement>) => {
                event.preventDefault(); // prevents the page from reloading (except it still reloads?)
                const formData = {
                        password: password,
                        name: name,
                        song: song,
                        delOrAdd: location
                };
                console.log(password);
                const jsonString = JSON.stringify(formData);

                console.log(jsonString);

                axios.put('http://127.0.0.1:8000/access/pop/', formData)
                        .catch(error => {
                                console.error('Error:', error)
                        });
        };

        // Send the JSON file for clear db
        const handleCLEARDBSubmit = (event: React.FormEvent<HTMLFormElement>) => {
                event.preventDefault(); // prevents the page from reloading (except it still reloads?)
                const formData = {
                        password: password,
                        name: name,
                        song: song,
                        delOrAdd: location
                };
                console.log(password);
                const jsonString = JSON.stringify(formData);

                console.log(jsonString);

                axios.put('http://127.0.0.1:8000/access/clear_db/', formData)
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
			<form onSubmit={handleCEASubmit}>
				<label>Name</label>
				<br></br>
				<input type="name"
					id="name"
					name="name"
					value={name}
					onChange={handleNameChange}
					required/>
				<br></br>
				<label>Song Name</label>
				<br></br>
				<input
                                        id="song_name"
                                        name="song_name"
                                        value={song}
                                        onChange={handleSongChange}
                                        required/>  
				<br></br>
				<label>Location</label>
				<br></br>
				<input
                                        id="delOrAdd"
                                        name="delOrAdd"
                                        value={location}
                                        onChange={handleLocationChange}
                                        required/>
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
				<form onSubmit={handlePOPSubmit}>
				<button>Pop</button>
				</form>
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
			<form onSubmit={handleDELETESubmit}>
				<label>Song Name</label>
				<br></br>
				<input
                                        id="song_name"
                                        name="song_name"
                                        value={song}
                                        onChange={handleSongChange}
                                        required/>
				<br></br>
				<button>Submit</button>
			</form>
		</div>

	        {/* Clear Database */}
	        <div className="border">
			{/* Single Clear Button with a verification */}
                        <h3>
                                <div className="node_title">
                                        Clear Database
                                </div>
				<form onSubmit={handleCLEARDBSubmit}>
				<button>Clear</button>
				</form>
                        </h3>
		</div>	
	</div>
	);
};


export default Admin_Interface;
