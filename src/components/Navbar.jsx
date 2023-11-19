import { useState } from "react";
import { useDispatch } from "react-redux";
import { openPopup } from "../features/slices/popupSlice";
import { searchFactory } from "../features/slices/factoriesSlice";

const Navbar = () => {
	const [invalidName, setInvalidName] = useState(false);
	const dispatch = useDispatch();
	//To Display Adding Popup
	const handleAddFactoryClick = () => {
		dispatch(openPopup({ operation: "addFactory" }));
	};
	// Search Function
	const handleSearch = (name) => {
		const nameRegex = /^[a-zA-Z]+$/;
		const nameValidation = nameRegex.test(name);
		if (nameValidation || name == "") {
			dispatch(searchFactory(name));
		} else {
			setInvalidName(true);
		}
	};

	return (
		<>
			<div className="title">
				<div className="l-h-side">
					<h1>Factories</h1>
					<input
						className={invalidName ? "invalid-name" : "valid-name"}
						type="text"
						placeholder="Search In Name"
						maxLength="200"
						onChange={(e) => {
							setInvalidName(false);
							handleSearch(e.target.value);
						}}
					/>
					<p
						className={invalidName ? "invalid-name-msg" : "invalid-name-msg-hidden"}>
						invalid Search Name
					</p>
				</div>
				<div className="r-h-side">
					<button className="add-new-btn" onClick={handleAddFactoryClick}>
						+ &nbsp;Add New
					</button>
				</div>
			</div>
		</>
	);
};

export default Navbar;
