import { useState } from "react";
import reactLogo from "./assets/react.svg";
import LoginPage from "./pages/LoginPage";
import { Outlet } from "react-router-dom";

function App() {
	return (
		<div>
			<Outlet />
		</div>
	);
}

export default App;
