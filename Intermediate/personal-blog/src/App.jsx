import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function App() {
	return (
		<>
			<Navbar />
			<div className="main-border mx-[19px] md:mx-[9px]">
				<Outlet />
				<Footer />
			</div>
		</>
	);
}

export default App;
