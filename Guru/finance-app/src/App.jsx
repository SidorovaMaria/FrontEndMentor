import { Link, Outlet } from "react-router";
import SideNav from "./components/SideNav";
import BottomDrawer from "./components/BottomDrawer";

function App() {
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
