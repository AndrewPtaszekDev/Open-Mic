import React, { createContext, useState, ReactNode } from 'react';

interface PasswordContextType {
	password: string,
	setPassword: (password: string) => void;
}

const defaultValue: PasswordContextType = {
	password: '',
	setPassword: () => {},
};

export const PasswordContext = createContext<PasswordContextType>(defaultValue);

interface AuthProviderProps {
	children: ReactNode;
}

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
	const [password, setPassword] = useState('');

	return (
		<PasswordContext.Provider value={{ password, setPassword }}>
			{ children }
		</PasswordContext.Provider>
	);
};
