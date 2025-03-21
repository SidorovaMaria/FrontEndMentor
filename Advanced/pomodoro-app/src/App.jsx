import { useSelector, useDispatch } from "react-redux";
import Toggle from "./components/Toggle";
import { setFontFamily } from "./features/theme/themeSlice";
import Timer from "./components/Timer";
import Settings from "./components/Settings";

function App() {
	const theme = useSelector((state) => state.theme);
	const dispatch = useDispatch();

	return (
		<main style={{ fontFamily: theme.font }}>
			<header className="mt-8 mb-11 md:mt-20 md:mb-[55px] lg:mt-12 mx-auto w-fit">
				<img src="/assets/logo.svg" alt="Logo Pomodoro" />
			</header>
			<div>
				<Toggle />
			</div>
			<Timer timer={theme.timer} />
			<Settings />
		</main>
	);
}

export default App;
