import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { store } from "./app/store.js";
import AppRouter from "./app/AppRouter.jsx";
import { Provider } from "react-redux";

createRoot(document.getElementById("root")).render(
	<Provider store={store}>
		<AppRouter />
	</Provider>
);
