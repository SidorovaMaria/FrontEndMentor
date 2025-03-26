import {
	createRoutesFromElements,
	Route,
	RouterProvider,
	createBrowserRouter,
} from "react-router-dom";
import App from "../App";
import Home from "../pages/Home";
import About from "../pages/About";
import Contact from "../pages/Contact";

const router = createBrowserRouter(
	createRoutesFromElements(
		<Route path="/" element={<App />}>
			<Route index element={<Home />} />
			<Route path="about" element={<About />} />
			<Route path="contact" element={<Contact />} />
		</Route>
	)
);
const AppRoutes = () => {
	return <RouterProvider router={router} />;
};

export default AppRoutes;
