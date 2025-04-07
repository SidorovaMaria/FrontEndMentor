import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { BrowserRouter } from "react-router";
import App from "./App.jsx";
import AppRouter from "./app/AppRouter.jsx";

createRoot(document.getElementById("root")).render(
	<StrictMode>
		<AppRouter />
	</StrictMode>
);
