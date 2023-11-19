import { useState } from "react";
import { CiUser } from "react-icons/ci";
import { HiOutlineMenuAlt2 } from "react-icons/hi";
import { IoMdNotificationsOutline } from "react-icons/io";
import { MdLanguage } from "react-icons/md";
import { RxTriangleDown } from "react-icons/rx";
import { IoMdArrowDropleft } from "react-icons/io";

function Nav() {
	const [addDrobDown, setAddDrobDown] = useState(false);

	return (
		<nav className="navbar" id="navbar">
			<IoMdArrowDropleft className="nav-icon" />
			<div className="nav-menu">
				<HiOutlineMenuAlt2 className="nav-icon" />
				<button className="user-icon">
					<MdLanguage className="nav-icon" />
					<IoMdNotificationsOutline className="nav-icon" />
					<div>
						<CiUser onClick={() => setAddDrobDown(true)} className="nav-icon" />
						<RxTriangleDown
							onClick={() => setAddDrobDown(true)}
							className="nav-icon"
						/>
					</div>
				</button>
			</div>
		</nav>
	);
}

export default Nav;
