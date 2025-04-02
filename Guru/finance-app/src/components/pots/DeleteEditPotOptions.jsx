import React, { useState } from "react";
import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";

import { ReactSVG } from "react-svg";
import DeleteBudgetModal from "../budgets/DeleteBudgetModal";
import DeletePotModal from "./DeletePotModal";
import PotAddEditModal from "./PotAddEditModal";

const DeleteEditPotOptions = ({ pot }) => {
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
						<button>Edit Pot</button>
					</MenuItem>
					<MenuItem
						as="div"
						className="py-3 px-5 hover:bg-grey-300 cursor-pointer text-secondary-red text-4 transition-all "
						onClick={() => openModal("delete")}
					>
						<button>Delete Pot</button>
					</MenuItem>
				</MenuItems>
			</Menu>
			<PotAddEditModal
				mode={"edit"}
				pot={pot}
				isOpen={modalConfig.editModal}
				setIsOpen={closeModal}
			/>
			<DeletePotModal
				pot={pot}
				isOpen={modalConfig.deleteModal}
				setIsOpen={closeModal}
			/>
		</div>
	);
};

export default DeleteEditPotOptions;
