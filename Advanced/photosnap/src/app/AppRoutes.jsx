import {
	createRoutesFromElements,
	Route,
	RouterProvider,
	createBrowserRouter,
} from "react-router-dom";
import Home from "../pages/Home";
import Stories from "../pages/Stories";
import Features from "../pages/Features";
import Pricing from "../pages/Pricing";
import App from "../App.jsx";

const router = createBrowserRouter(
	createRoutesFromElements(
		<Route path="/" element={<App />}>
			<Route index element={<Home />} />
			<Route path="stories" element={<Stories />} />
			<Route path="features" element={<Features />} />
			<Route path="pricing" element={<Pricing />} />
		</Route>
	)
);

const AppRoutes = () => {
	return <RouterProvider router={router} />;
};

export default AppRoutes;
