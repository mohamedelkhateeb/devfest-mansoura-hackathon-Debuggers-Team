import { NavLink } from "react-router-dom";
import Nav from "../components/Nav";

const Factories = () => {
	return (
		<section className="factories">
			<Nav />
			<div className="form-container">
				<form>
					<div className="sec1">
						<input type="text" placeholder="ادخل الاسم الاول" />
						<input type="text" placeholder="ادخل الاسم الثاني" />
					</div>
					<div className="sec2">
						<input type="text" placeholder="ادخل العنوان الخاص بك" />
						<input type="text" placeholder="ادخل رقم الهاتف الخاص بك" />
					</div>
					<div className="messg">
						<textarea placeholder="ادخل رسالتك"></textarea>
					</div>
					<button className="btn-sub">ارسال</button>
				</form>
			</div>
		</section>
	);
};

export default Factories;
