import { Outlet, useLocation } from "react-router";
import Navbar from "./components/Navbar";
import React from "react";
import Footer from "./components/Footer";
import FooterContact from "./components/FooterContact";
import ScrollToTop from "./components/ScrollToTop";

function App() {
	const location = useLocation();
	console.log(location);
	return (
		<React.Fragment>
			<Navbar />
			<main className="md:mx-10 lg:mx-40 space-y-30 lg:space-y-40 ">
				{/* <ScrollToTop /> */}
				<Outlet />
				<FooterContact />
			</main>
			<Footer contact={location.pathname === "/contact" ? true : false} />
		</React.Fragment>
	);
}

export default App;
