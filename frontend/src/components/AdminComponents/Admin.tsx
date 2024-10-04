import './Admin.css';
// import React from 'react';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Admin: React.FC = () => {
	const [password, setPassword] = useState('');
	const navigate = useNavigate();
	
	const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		setPassword(event.target.value);
	};

	const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		console.log('Password:', password);
		navigate('/admin-interface')
	};
	return (
		// login page
		<div className="admin">
			<h1>
				<div className="admin_header">Log In</div>
			</h1>
			<div className="sign_in_form">
				{/* Externalize This as a react component? */}
				<form onSubmit={handleSubmit}>
					<label htmlFor="password">Password:<br/></label>
					<input type="password"
						id="password"
						name="password"
						value={password}
						onChange={handlePasswordChange}
						required/><br/>
					<button type="submit">Login</button>
				</form>
			</div>
		</div>
	);
};

export default Admin;
