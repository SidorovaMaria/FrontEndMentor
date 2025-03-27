import React from "react";
import StandardChoiceBtn from "./StandardChoiceBtn";

const StandardChoice = () => {
	return (
		<div className="w-[311px] lg:w-[476px] h-[281px] lg:h-[430px] flex justify-center items-center mx-auto relative">
			<img
				src="/assets/bg-triangle.svg"
				alt="Triangle"
				className="w-[166px] lg:w-[254px]"
			/>
			<StandardChoiceBtn
				position={"top-0 right-0"}
				borderColor={"border-[#EB9F0E]"}
				shadowColor={"#C76C1B"}
				icon={"scissors"}
			/>
			<StandardChoiceBtn
				position={"top-0 left-0"}
				borderColor={"border-[#4664F4]"}
				shadowColor={"#2A45C2"}
				icon={"paper"}
			/>
			<StandardChoiceBtn
				position={"bottom-0 left-[50%] -translate-x-[50%]"}
				borderColor={"border-[#DB2E4D]"}
				shadowColor={"#9D1634"}
				icon={"rock"}
			/>
		</div>
	);
};

export default StandardChoice;
