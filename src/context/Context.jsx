import { useState } from "react";
import { createContext } from "react";

export const ContextProvider = createContext();

export const Context = ({ children }) => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [isLogged, setIsLogged] = useState(false);
	const [isLoading, setIsLoading] = useState(false);
	const errorMessage = "Verifique os dados e tente novamente.";

	const userData = {
		nameUser: localStorage.getItem("user_name"),
		emailUser: localStorage.getItem("user_email"),
		passwordUser: localStorage.getItem("user_password"),
	};

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
				setIsLoading,
				userData,
			}}
		>
			{children}
		</ContextProvider.Provider>
	);
};
