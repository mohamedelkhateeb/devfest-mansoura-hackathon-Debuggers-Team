// import Footer from '../components/Footer'
import Nav from "../components/Nav";

const Factories = () => {
	return (
		<section className="factories">
			<Nav />
			<div className="docs">
				<div className="card-container">
					<img
						className="round"
						src="https://randomuser.me/api/portraits/women/79.jpg"
						alt="user"
					/>
					<h3>د. إيميلي لاوسون</h3>
					<h6>متروفيل، الولايات المتحدة الأمريكية</h6>
					<p>
						دكتوراه في الطب (MD): كلية الطب في متروفيل، الدفعة الدراسية لعام 2005
						إقامة في الطب الباطني: مستشفى متروفيل العام، اكتملت في عام 2008
					</p>
					<div className="buttons">
						<button className="primary">Message</button>
						<button className="primary ghost">Following</button>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Factories;
