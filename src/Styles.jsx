import styled from "styled-components";

export const Section = styled.section`
	min-height: 100vh;
	width: 100%;
	display: flex;
	align-items: center;
	justify-content: center;

	&::before {
		content: "";
		min-height: 100vh;
		width: 100%;
		position: absolute;
		bottom: -10%;
		left: 0%;
		z-index: -1;
		background-image: url(${(props) => props.bg});
		background-size: cover;
		background-repeat: no-repeat;
	}

	.logged-page {
		min-height: 80vh;
		min-width: 30vw;
		box-shadow: 1px 1px 2px #c1c1c1;
		background: #ffffff;
		border-radius: 10px;
	}
`;

export const Container = styled.div`
	display: flex;
	align-items: ${(props) => (props.align ? props.align : "center")};
	justify-content: ${(props) =>
		props.justify ? props.justify : "center"};
	flex-direction: ${(props) => props.dir};
	gap: ${(props) => props.gap};
	width: ${(props) => props.width};

	.header-register_container {
		width: 100%;
		text-align: left;
	}

	.header-register_container .button-back {
		background: #3745d8;
		color: white;
		padding: 0.4rem;
		display: inline;
		border-radius: 100%;
		display: flex;
		align-items: center;
		justify-content: center;
		cursor: pointer;
	}

	.icon-input_email,
	.icon-input_password,
	.icon-input_name {
		position: relative;
		right: 50px;
	}

	.infos-logged_user {
		text-align: center;
	}
`;

export const Input = styled.input`
	padding: 30px 50px;
	width: ${(props) => props.width};
	border: none;
	box-shadow: #c1c1c1 0px 2px 6px 0px;
	font-size: 1.1em;
	border-radius: 5px;
	position: relative;
`;

export const Button = styled.button`
	background: linear-gradient(to right, #3745d8, #515ddd);
	border: none;
	padding: 20px 40px;
	border-radius: 5px;
	cursor: pointer;
	font-size: 1.1em;
	transition: 0.1s;
	color: white;

	&:active {
		transform: translateY(10px);
	}
`;

export const Title = styled.h1`
	font-size: 3em;
`;

export const Span = styled.span`
	color: white;
	text-decoration: underline;
	text-decoration-color: white;
	cursor: pointer;
`;

export const Loader = styled.div`
	& {
		animation: is-rotating 1s infinite;
		border: 1px solid #e5e5e5;
		border-radius: 50%;
		border-top-color: #3745d8;
		height: 20px;
		width: 20px;
	}

	@keyframes is-rotating {
		to {
			transform: rotate(1turn);
		}
	}
`;
