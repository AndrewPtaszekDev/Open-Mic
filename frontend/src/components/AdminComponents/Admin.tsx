import './Admin.css';
import React from 'react';

const Admin: React.FC = () => {
	return (
		// login page
		<div className="admin">
			<h1>
				<div className="admin_header">Log In</div>
			</h1>
			<div className="sign_in_form">
				{/* Externalize This as a react component? */}
				<form>
					<label htmlFor="username">User Name:<br/></label>
					<input type="text" id="username" name="username" required/><br/>
					<label htmlFor="password">Password:<br/></label>
					<input type="password" id="password" name="password" required/><br/>
					<button type="submit">Login</button>
				</form>
			</div>
		</div>
	);
};

export default Admin;
