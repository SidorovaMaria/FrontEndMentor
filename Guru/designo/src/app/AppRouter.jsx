import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router";
import App from "../App";
import Home from "../pages/Home";

import About from "../pages/About";
import Location from "../pages/Location";
import Contact from "../pages/Contact";
import ErrorPage from "../pages/ErrorPage";
import DesignPage from "../pages/DesignPage";
const router = createBrowserRouter([
	{
		path: "/",
		element: <App />,
		errorElement: <ErrorPage />,
		children: [
			{ index: true, element: <Home /> },
			{ path: "design/:slug", element: <DesignPage /> },
			// { path: "app-design", element: <AppDesign /> },
			// { path: "graphic-design", element: <GraphicDesign /> },
			{ path: "about", element: <About /> },
			{ path: "locations", element: <Location /> },
			{ path: "contact", element: <Contact /> },
		],
	},
]);

const AppRouter = () => {
	return <RouterProvider router={router} />;
};

export default AppRouter;
