import React, { useContext } from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ContextProvider } from "../context/Context";
import {
	Button,
	Container,
	Input,
	Section,
	Span,
	Title,
} from "../Styles";
import bg from "../assets/wave.png";
import ButtonBack from "../components/ButtonBack";
import { motion } from "framer-motion";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { AiOutlineMail } from "react-icons/ai";
import { BsKey } from "react-icons/bs";
import { BiUser } from "react-icons/bi";

export default function RegisterPage() {
	const navigate = useNavigate();
	const { email, setEmail, password, setPassword, errorMessage } =
		useContext(ContextProvider);

	const [name, setName] = useState("");

	const registerUser = () => {
		if (!email || !name || !password || email.length < 10 || name.length < 10 || password.length < 5) {
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
		} else {
			localStorage.setItem("user_email", email);
			localStorage.setItem("user_name", name);
			localStorage.setItem("user_password", password);
			toast.success("Cadastro realizado !", {
				position: "top-center",
				autoClose: 2000,
				hideProgressBar: false,
				closeOnClick: false,
				pauseOnHover: false,
				draggable: false,
				progress: undefined,
				theme: "light",
			});
			setTimeout(() => {
				navigate("/");
			}, 1400);
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
					stiffness: 260,
					damping: 20,
				}}
			>
				<Container className="card" dir="column" gap="2rem">
					<Container
						gap="1rem"
						justify="left"
						className="header-register_container"
					>
						<Link to="/">
							<ButtonBack />
						</Link>
						<Title>Registro</Title>
					</Container>
					<div className="password-login_container">
						<Input
							onChange={(e) => setEmail(e.target.value)}
							type="email"
							placeholder="Digite seu email"
							autoFocus
							required="required"
						/>
						<AiOutlineMail className="icon-input_email" />
					</div>
					<div className="email-login_container">
						<Input
							onChange={(e) => setPassword(e.target.value)}
							type="password"
							placeholder="Digite sua senha"
							required="required"
						/>
						<BsKey className="icon-input_password" />
					</div>
					<div className="name-login_container">
						<Input
							onChange={(e) => setName(e.target.value)}
							type="text"
							placeholder="Digite seu nome"
							required="required"
						/>
						<BiUser className="icon-input_name" />
					</div>
					<Button onClick={registerUser}>Registrar-se</Button>
				</Container>
			</motion.div>
		</Section>
	);
}
