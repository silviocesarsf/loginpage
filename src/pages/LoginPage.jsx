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
		userData,
	} = useContext(ContextProvider);

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
				setIsLogged(true);
				setIsLoading(false);
				navigate("/home");
			}, 1600);
		} else if (
			email === "" ||
			password === "" ||
			email !== userData.emailUser ||
			password !== userData.passwordUser
		) {
			return toast.error(errorMessage, {
				position: "top-right",
				autoClose: 2000,
				hideProgressBar: false,
				closeOnClick: false,
				pauseOnHover: true,
				draggable: true,
				progress: undefined,
				theme: "light",
			});
		}
	};

	useEffect(() => {
		setEmail(null);
		setPassword(null);
	}, []);

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
