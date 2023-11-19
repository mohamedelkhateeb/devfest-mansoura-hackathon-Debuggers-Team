import { BiSolidUserDetail } from "react-icons/bi";
import { NavLink } from "react-router-dom";
import { FaHome } from "react-icons/fa";
import Logo from "../assets/stethoscope_2321326.png";
const SideBar = () => {
	return (
		<aside className="side-bar">
			<div className="side-bar-top">
				<div className="logo-title">
					<h2 className="title">
						<img src={Logo} alt="logo" className="logo" />
						شخصني
					</h2>
				</div>
			</div>
			<ul className="menu">
				<li className="item">
					<NavLink to="/">
						<FaHome className="menu-icon" />
						الصفحة الرئيسية
					</NavLink>
				</li>
				<li className="item">
					<NavLink to="/chat">
						<BiSolidUserDetail className="menu-icon" />
						كيف يمكن مساعدتك
					</NavLink>
				</li>
				<li className="item">
					<NavLink to="/doctors">
						<BiSolidUserDetail className="menu-icon" />
						ابحث عن طبيب
					</NavLink>
				</li>
				<li className="item">
					<NavLink to="/form">
						<BiSolidUserDetail className="menu-icon" />
						تواصل معنا
					</NavLink>
				</li>
			</ul>
		</aside>
	);
};

export default SideBar;
