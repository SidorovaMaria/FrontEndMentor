import React from "react";
import { plansDescription } from "../data/data";
import check from "/assets/pricing/desktop/check.svg";

const PlansCompare = () => {
	return (
		<table className="mt-16 mx-7 md:mt-0 md:mx-10 lg:max-w-[731px]">
			<thead className="uppercase text-xs font-bold tracking-[2px] leading-[16px] &th>pb-[23px] ">
				<tr className="[&>th]:pb-[23px] border-b border-black">
					<th className="text-left md:pl-6">The Features</th>
					<th className="hidden md:table-cell md:w-[140px]">Basic</th>
					<th className="hidden md:table-cell md:w-[140px]">Pro</th>
					<th className="hidden md:table-cell md:w-[140px]">
						Business
					</th>
				</tr>
			</thead>
			<tbody>
				{plansDescription.map((compare) => (
					<tr
						className="border-b border-light-grey grid grid-cols-3 md:table-row gap-y-4 py-6 md:[&>td]:py-6"
						key={compare.feature}
					>
						<td className="col-span-3 md:table-cell">
							<h3 className="text-xs font-bold tracking-[2px] leading-[16px] uppercase md:pl-6">
								{compare.feature}
							</h3>
						</td>
						<td className="">
							<p className="text-[10px] font-bold tracking-[1.67px] leading-[13px] text-black/50 uppercase pb-[8px] md:hidden">
								Basic
							</p>
							{compare.basic ? (
								<img
									src={check}
									alt="check icon"
									className="w-4 md:mx-auto"
								/>
							) : (
								<div className="w-4 h-3"></div>
							)}
						</td>
						<td className=" ">
							<p className="text-[10px] font-bold tracking-[1.67px] leading-[13px] text-black/50 uppercase pb-[8px] md:hidden">
								Pro
							</p>
							{compare.pro ? (
								<img
									src={check}
									alt="check icon"
									className="w-4 md:mx-auto"
								/>
							) : (
								<div className="w-4 h-3"></div>
							)}
						</td>
						<td className="">
							<p className="text-[10px] font-bold tracking-[1.67px] leading-[13px] text-black/50 uppercase pb-[8px] md:hidden">
								Business
							</p>
							{compare.business ? (
								<img
									src={check}
									alt="check icon"
									className="w-4 md:mx-auto"
								/>
							) : (
								<div className="w-4 h-3"></div>
							)}
						</td>
					</tr>
				))}
			</tbody>
		</table>
	);
};

export default PlansCompare;
