import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
import React, { useState } from "react";
import { ReactSVG } from "react-svg";
import BudgetModal from "./BudgetModal";
import DeleteBudgetModal from "./DeleteBudgetModal";

const DeleteEditOption = ({ budget }) => {
	const [modalConfig, setModalConfig] = useState({
		editModal: false,
		deleteModal: false,
	});
	const openModal = (type) => {
		setModalConfig((prev) => ({
			...prev,
			[`${type}Modal`]: true,
		}));
	};
	const closeModal = () => {
		setModalConfig({
			editModal: false,
			deleteModal: false,
		});
	};

	return (
		<div className="ml-auto">
			<Menu as="div" className="relative ml-auto">
				<MenuButton className="flex justify-center items-center w-4 h-4">
					<ReactSVG
						src="/assets/images/icon-ellipsis.svg"
						className="fill-grey-500 hover:fill-grey-900"
						alt="Icon Ellipsis"
					/>
				</MenuButton>
				<MenuItems className="absolute right-0 w-[134px] bg-white rounded-8 drop-shadow overflow-hidden">
					<MenuItem
						as="div"
						className="py-3 px-5 hover:bg-grey-300 transition-all cursor-pointer text-4 border-b border-b-grey-100 "
						onClick={() => openModal("edit")}
					>
						<button>Edit Budget</button>
					</MenuItem>
					<MenuItem
						as="div"
						className="py-3 px-5 hover:bg-grey-300 cursor-pointer text-secondary-red text-4 transition-all "
						onClick={() => openModal("delete")}
					>
						<button>Delete Budget</button>
					</MenuItem>
				</MenuItems>
			</Menu>
			<BudgetModal
				mode={"edit"}
				budget={budget}
				isOpen={modalConfig.editModal}
				setIsOpen={closeModal}
			/>
			<DeleteBudgetModal
				budget={budget}
				isOpen={modalConfig.deleteModal}
				setIsOpen={closeModal}
			/>
		</div>
	);
};

export default DeleteEditOption;
