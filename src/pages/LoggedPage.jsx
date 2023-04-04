import React from "react";
import { useEffect } from "react";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { ContextProvider } from "../context/Context";
import { Button } from "../Styles";

export default function LoggedPage() {
	const { isLogged, setIsLogged, email, password } =
		useContext(ContextProvider);

	const navigate = useNavigate();

	const exitSession = () => {
		if (isLogged === true) {
			setIsLogged(false);
			navigate("/");
		}
	};

	useEffect(() => {
		setIsLogged(true);
	}, []);

	return (
		<div>
			{isLogged && <span>Voce esta logado !</span>}
			<Button onClick={exitSession}>Sair</Button>
		</div>
	);
}
