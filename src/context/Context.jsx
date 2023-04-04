import { useState } from "react";
import { createContext } from "react";

export const ContextProvider = createContext();

export const Context = ({ children }) => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [isLogged, setIsLogged] = useState(false);
	const [isLoading, setIsLoading] = useState(false);
	const errorMessage = "Verifique os dados e tente novamente.";

	return (
		<ContextProvider.Provider
			value={{
				email,
				setEmail,
				password,
				setPassword,
				isLogged,
				setIsLogged,
				errorMessage,
				isLoading,
				setIsLoading
			}}
		>
			{children}
		</ContextProvider.Provider>
	);
};
