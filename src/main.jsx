import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { Context } from "./context/Context";
import { GlobalStyle } from "./GlobalStyles";
import {
	createBrowserRouter,
	Router,
	RouterProvider,
} from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import LoggedPage from "./pages/LoggedPage";

const routes = createBrowserRouter([
	{
		path: "/",
		element: <LoginPage />,
	},
	{
		path: "/home",
		element: <LoggedPage />,
	},
	{
		path: "/register",
		element: <RegisterPage />,
	},
]);

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<Context>
			<RouterProvider router={routes} />
			<GlobalStyle />
			<App />
		</Context>
	</React.StrictMode>
);
