import React from "react";
import {
	Description,
	Dialog,
	DialogBackdrop,
	DialogPanel,
	DialogTitle,
} from "@headlessui/react";

import { ReactSVG } from "react-svg";
import { useDispatch } from "react-redux";
const DeleteBudgetModal = ({ budget, isOpen, setIsOpen }) => {
	const dispatch = useDispatch();
	return (
		<div>
			<Dialog
				open={isOpen}
				onClose={() => setIsOpen(false)}
				className="relative z-50"
			>
				<DialogBackdrop className="fixed inset-0 bg-black/50" />
				<div className="fixed inset-0 flex w-screen items-center justify-center p-4">
					{/* The actual dialog panel  */}
					<DialogPanel className="bg-white w-full mx-5 rounded-[12px] md:w-[560px] md:mx-auto px-5 py-6 md:p-8 flex flex-col gap-5">
						<div className="flex justify-between items-center">
							<h2 className="text-2 md:text-[32px]">
								Delete '{budget.category}' ?
							</h2>
							<ReactSVG
								src="/assets/icon-close-modal.svg"
								alt="Close Modal"
								className="fill-grey-500 ml-auto hover:fill-grey-900"
								onClick={() => setIsOpen(false)}
							/>
						</div>
						<p
							id="modal-modal-description"
							className="text-4 text-grey-500"
						>
							Are you sure you want to delete this budget? This
							action cannot be reversed, and all the data inside
							it will be removed forever.
						</p>
						<button
							className="btn-destroy text-4 bold"
							onClick={() => {
								dispatch(
									deleteBudget({ category: budget.category })
								);
								setIsOpen(false);
							}}
						>
							Yes, Confirm Deletion
						</button>
						<button
							className="text-4 text-grey-500 hover:text-grey-900"
							onClick={() => setIsOpen(false)}
						>
							No, I want to go back
						</button>
					</DialogPanel>
				</div>
			</Dialog>
		</div>
	);
};

export default DeleteBudgetModal;
