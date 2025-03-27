import React from "react";
import StandardChoiceBtn from "./StandardChoiceBtn";
import ExtendedChoiceBtn from "./ExtendedChoiceBtn";

const ExtendedChoice = () => {
	return (
		<div className="w-[311px] lg:w-[476px] h-[305px] lg:h-[430px] flex justify-center items-center mx-auto relative">
			<img
				src="/assets/bg-pentagon.svg"
				alt="Pentagon"
				className="w-[227px] lg:w-[328px]  pt-[40px] pb-10"
			/>
			<ExtendedChoiceBtn
				position={"top-0 left-[50%] -translate-x-[50%]"}
				borderColor={"border-[#EB9F0E]"}
				shadowColor={"#C76C1B"}
				icon={"scissors"}
			/>
			<ExtendedChoiceBtn
				position={"top-1/4 left-0"}
				borderColor={"border-[#3FB7CD]"}
				shadowColor={"#2D8DAB"}
				icon={"spock"}
			/>
			<ExtendedChoiceBtn
				position={"top-1/4 right-0"}
				borderColor={"border-[#4664F4]"}
				shadowColor={"#2A45C2"}
				icon={"paper"}
			/>
			<ExtendedChoiceBtn
				position={"bottom-0 left-1/8"}
				borderColor={"border-[#834EE3]"}
				shadowColor={"#5F37A8"}
				icon={"lizard"}
			/>
			<ExtendedChoiceBtn
				position={"bottom-0 right-1/8"}
				borderColor={"border-[#DB2E4D]"}
				shadowColor={"#9D1634"}
				icon={"rock"}
			/>
		</div>
	);
};

export default ExtendedChoice;
