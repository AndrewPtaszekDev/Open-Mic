import "./Admin_Interface.css";
import React, { useState, useContext } from 'react';
import axios from 'axios';
import { PasswordContext } from './Password_Context'
import {IP, DEVELOPMENT_MODE} from "../../App";

const Admin_Interface: React.FC = () => {
	const { password } = useContext(PasswordContext); 
	const [name, setName] = useState('');
	const [song, setSong] = useState('');
	const [location, setLocation] = useState('');
	const [delLocation, setDelLocation] = useState('');
	
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
	const handleDelLocationChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		setDelLocation(event.target.value);
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

		let url = 'http://localhost:8000/access/create_entry_admin/';
		if(!DEVELOPMENT_MODE){
			url = 'http://'+IP+":8000/access/create_entry_admin/";
		}

		axios.post(url, formData)
			.then(response => {
				console.log("Success: ", response);
				alert("Inserted Entry");
			})
			.catch(error => {
				console.error('Error:', error)
				if (error.response.status === 401)
					alert("Unauthorized: Check password");
				if (password == "")
					alert("Missing Password");
			});
        };

        // Send the JSON file for DELETE
        const handleDELETESubmit = (event: React.FormEvent<HTMLFormElement>) => {
                event.preventDefault(); // prevents the page from reloading (except it still reloads?)
                const formData = {
                        password: password,
                        name: "a",
                        song: "a",
                        delOrAdd: delLocation
                };
                console.log(password);
                const jsonString = JSON.stringify(formData);

                console.log(jsonString);

				let url = 'http://localhost:8000/access/delete_entry/';
				if(!DEVELOPMENT_MODE){
					url = 'http://'+IP+":8000/access/delete_entry/";
				}

                axios.delete(url, {data: formData})
                        .then(response => {
                                console.log("Success: ", response);
                                alert("Deleted Entry");
                        })
                        .catch(error => {
                                console.error('Error:', error);
                                if (error.response.status === 401)
                                        alert("Unauthorized: Check password");
				if (password == "")
					alert("Missing Password");
				
                        });
        };

        // Send the JSON file for POP
        const handlePOPSubmit = (event: React.FormEvent<HTMLFormElement>) => {
                event.preventDefault(); // prevents the page from reloading (except it still reloads?)
                const formData = {
                        password: password,
                        name: "a",
                        song: "a",
                        delOrAdd: "a"
                };
                console.log(password);
                const jsonString = JSON.stringify(formData);

                console.log(jsonString);

				let url = 'http://localhost:8000/access/pop/';
				if(!DEVELOPMENT_MODE){
					url = 'http://'+IP+":8000/access/pop/";
				}

                axios.put(url, formData)
                        .then(response => {
                                console.log("Success: ", response);
                                alert("Popped Top Entry");
                        })                        
			.catch(error => {
                                console.error('Error:', error)
                                if (error.response.status === 401)
                                        alert("Unauthorized: Check password");
				if (password == "")
					alert("Missing Password");
                        });
        };

        // Send the JSON file for clear db
        const handleCLEARDBSubmit = (event: React.FormEvent<HTMLFormElement>) => {
                event.preventDefault(); // prevents the page from reloading (except it still reloads?)
                const formData = {
                        password: password,
                        name: "a",
                        song: "a",
                        delOrAdd: "a"
                };
                console.log(password);
                const jsonString = JSON.stringify(formData);

                console.log(jsonString);

				let url = 'http://localhost:8000/access/clear_db/';
				if(!DEVELOPMENT_MODE){
					url = 'http://'+IP+":8000/access/clear_db/";
				}

                axios.put(url, formData)
                        .then(response => {
                                console.log("Success: ", response);
                                alert("Cleared Database");
                        })
                        .catch(error => {
                                console.error('Error:', error)
                                if (error.response.status === 401)
                                        alert("Unauthorized: Check password");
				if (password == "")
					alert("Missing Password");
                        });
        };


	return (
	<div>
		<h1>
			<div className="admin_title">
				Admin Interface
			</div>
		</h1>
		{/* Create Entry Admin */}
		<div className="admin_border">
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
	        <div className="admin_border">
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
	        <div className="admin_border">
			{/* Input box for song name and submit button*/}
                        <h3>
                                <div className="node_title">
                                        Delete Entry
				</div>
                        </h3>
			<form onSubmit={handleDELETESubmit}>
				<label>Location (song name)</label>
				<br></br>
				<input
                                        id="song_name"
                                        name="song_name"
                                        value={delLocation}
                                        onChange={handleDelLocationChange}
                                        required/>
				<br></br>
				<button>Submit</button>
			</form>
		</div>

	        {/* Clear Database */}
	        <div className="admin_border">
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
