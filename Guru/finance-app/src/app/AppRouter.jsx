import React from "react";
import {
	RouterProvider,
	createBrowserRouter,
	createRoutesFromElements,
	Route,
} from "react-router";
import App from "../App";
import Home from "../pages/Home";
import Transactions from "../pages/Transactions";
import Budgets from "../pages/Budgets";
import Pots from "../pages/Pots";
import Reccuring from "../pages/Reccuring";

const router = createBrowserRouter(
	createRoutesFromElements(
		<Route path="/" element={<App />}>
			<Route index element={<Home />} />
			<Route path="transactions" element={<Transactions />} />
			<Route path="budgets" element={<Budgets />} />
			<Route path="pots" element={<Pots />} />
			<Route path="recurring-bills" element={<Reccuring />} />
		</Route>
	)
);

const AppRouter = () => {
	return <RouterProvider router={router} />;
};

export default AppRouter;
