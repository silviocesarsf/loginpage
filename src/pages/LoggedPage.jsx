import React from "react";
import { useEffect } from "react";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { ContextProvider } from "../context/Context";
import { Button, Container, Section, Title } from "../Styles";
import bg from "../assets/wave.png";
import { motion } from "framer-motion";

export default function LoggedPage() {
	const { isLogged, setIsLogged, userData } =
		useContext(ContextProvider);

	const navigate = useNavigate();

	const exitSession = () => {
		if (isLogged === true) {
			setIsLogged(false);
			navigate("/");
		}
	};

	return (
		<Section>
			<motion.div
				initial={{ x: -500 }}
				animate={{ x: 0 }}
				transition={{
					type: "spring",
				}}
			>
				<Container
					className="logged-page"
					dir="column"
					align="center"
					justify="space-around"
				>
					<Title>Bem vindo !</Title>
					<div className="infos-logged_user">
						<div className="name-logged_user">
							<h2>Olá {userData.nameUser}!</h2>
						</div>
						<div className="email-logged_user">
							<h3>Seu email é: {userData.emailUser}</h3>
						</div>
					</div>
					<Button onClick={exitSession}>Sair</Button>
				</Container>
			</motion.div>
		</Section>
	);
}
