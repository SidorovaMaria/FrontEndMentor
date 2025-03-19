import {
	createRoutesFromElements,
	Route,
	RouterProvider,
	createBrowserRouter,
} from "react-router-dom";
import App from "../App.jsx";
import Home from "../pages/Home.jsx";
import About from "../pages/About.jsx";
import Blog from "../pages/Blog.jsx";
import SingleBlog from "../pages/SingleBlog.jsx";
import Newsletter from "../pages/Newsletter.jsx";

const router = createBrowserRouter(
	createRoutesFromElements(
		<Route path="/" element={<App />}>
			<Route index element={<Home />} />
			<Route path="about" element={<About />} />
			<Route path="blog" element={<Blog />} />
			<Route path="blog/:slug" element={<SingleBlog />} />
			<Route path="newsletter" element={<Newsletter />} />
		</Route>
	)
);

export default function AppRouter() {
	return <RouterProvider router={router} />;
}
