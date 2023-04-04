import React from "react";
import { useContext } from "react";
import { ContextProvider } from "../context/Context";
import {
	Button,
	Container,
	Input,
	Loader,
	Section,
	Span,
	Title,
} from "../Styles";
import { Link, useNavigate } from "react-router-dom";
import bg from "../assets/wave.png";
import { motion } from "framer-motion";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { AiOutlineMail } from "react-icons/ai";
import { BsKey } from "react-icons/bs";
import { VscVerified } from "react-icons/vsc";
import { useEffect } from "react";

export default function LoginPage() {
	const navigate = useNavigate();

	const {
		email,
		setEmail,
		password,
		setPassword,
		isLogged,
		setIsLogged,
		errorMessage,
		isLoading,
		setIsLoading,
	} = useContext(ContextProvider);

	const userData = {
		nameUser: localStorage.getItem("user_name"),
		emailUser: localStorage.getItem("user_email"),
		passwordUser: localStorage.getItem("user_password"),
	};

	const handleEmail = (e) => {
		setEmail(e.target.value);
	};

	const handlePassword = (e) => {
		setPassword(e.target.value);
	};

	const authLogin = () => {
		console.log("Logando...");
		if (
			email === userData.emailUser &&
			password === userData.passwordUser
		) {
			setIsLoading(true);
			setTimeout(() => {
				setIsLoading(false);
				navigate("/home");
			}, 1600);
		}
		if (
			email === "" ||
			password === "" ||
			email.length < 0 ||
			password.length < 0
		) {
			return alert("ERRO PORRA");
		}
	};

	return (
		<Section bg={bg}>
			<ToastContainer />
			<motion.div
				initial={{ x: -500 }}
				animate={{ x: 0 }}
				transition={{
					type: "spring",
				}}
			>
				<Container dir="column" gap="2rem" className="card">
					<Title>Login</Title>
					{isLogged ? "estou logado" : "Nao estou logado"}
					<div className="password-login_container">
						<Input
							onChange={handleEmail}
							type="email"
							placeholder="Digite seu email"
						/>
						<AiOutlineMail className="icon-input_email" />
					</div>
					<div className="email-login_container">
						<Input
							onChange={handlePassword}
							type="password"
							placeholder="Digite sua senha"
						/>
						<BsKey className="icon-input_password" />
					</div>
					<Button onClick={authLogin}>
						{isLoading ? <Loader /> : "Logar"}
					</Button>
					<Link to="/register">
						<Span>Registro</Span>
					</Link>
				</Container>
			</motion.div>
		</Section>
	);
}
