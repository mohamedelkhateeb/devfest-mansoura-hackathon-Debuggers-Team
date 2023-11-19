import { NavLink } from "react-router-dom";
import Nav from "../components/Nav";

const Factories = () => {
	return (
		<section className="factories">
			<Nav />
			<div className="container">
				<form className="form">
					<h1>كيف يمكنني مساعدتك ؟</h1>
					<div className="form-group">
						<input
							id="input"
							className="input"
							type="text"
							placeholder="ادخل سؤالك"
						/>
					</div>
					<div>
						<h1 className="">الجواب</h1>
						<textarea disabled className="answer"></textarea>
					</div>
				</form>
			</div>
			<NavLink to="/doctors">
				<button className="btn">اعثر على طبيب</button>
			</NavLink>
		</section>
	);
};

export default Factories;
