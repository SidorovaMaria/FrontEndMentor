import { Link, Outlet } from "react-router";
import SideNav from "./components/SideNav";
import BottomDrawer from "./components/BottomDrawer";
import { useSelector } from "react-redux";

function App() {
	const finance = useSelector((state) => state.finance);
	console.log(finance);
	return (
		<>
			<div className="flex h-full w-full">
				{/* Desktop Navigation */}
				<SideNav />
				{/* Pages */}
				<Outlet />
			</div>
			{/* Mobile Navigation */}
			<BottomDrawer />
		</>
	);
}

export default App;
