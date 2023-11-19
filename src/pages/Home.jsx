// import Footer from '../components/Footer'
import Nav from "../components/Nav";

const Factories = () => {
	return (
		<section className="factories">
			<Nav />
			<div className="home-title">
				<div className="card">
					<div className="header">
						<span className="icon">
							<svg
								fill="currentColor"
								viewBox="0 0 20 20"
								xmlns="http://www.w3.org/2000/svg">
								<path
									clipRule="evenodd"
									d="M18 3a1 1 0 00-1.447-.894L8.763 6H5a3 3 0 000 6h.28l1.771 5.316A1 1 0 008 18h1a1 1 0 001-1v-4.382l6.553 3.276A1 1 0 0018 15V3z"
									fillRule="evenodd"></path>
							</svg>
						</span>
						<p className="alert">اعلان جديد !</p>
					</div>

					<p className="message">
						مرحبًا بكم في موقعنا الخاص بالصحة، حيث نسعى جاهدين لتقديم محتوى موثوق
						وشامل حول جميع جوانب العافية والحياة الصحية.
					</p>

					<div className="actions">
						<a className="read" href="/chat">
							Take a Look
						</a>

						<a className="mark-as-read" href="">
							Mark as Read
						</a>
					</div>
				</div>
				<div className="card">
					<div className="header">
						<span className="icon">
							<svg
								fill="currentColor"
								viewBox="0 0 20 20"
								xmlns="http://www.w3.org/2000/svg">
								<path
									clipRule="evenodd"
									d="M18 3a1 1 0 00-1.447-.894L8.763 6H5a3 3 0 000 6h.28l1.771 5.316A1 1 0 008 18h1a1 1 0 001-1v-4.382l6.553 3.276A1 1 0 0018 15V3z"
									fillRule="evenodd"></path>
							</svg>
						</span>
						<p className="alert">اعلان جديد !</p>
					</div>

					<p className="message">
						في عصر يتسارع فيه وتيرة الحياة وتزداد التحديات الصحية، يأتي موقعنا ليكون
						مرشدك الموثوق والمعلوماتي في رحلتك نحو حياة صحية ومتوازنة{" "}
					</p>

					<div className="actions">
						<a className="read" href="/chat">
							Take a Look
						</a>

						<a className="mark-as-read" href="">
							Mark as Read
						</a>
					</div>
				</div>
				<div className="card">
					<div className="header">
						<span className="icon">
							<svg
								fill="currentColor"
								viewBox="0 0 20 20"
								xmlns="http://www.w3.org/2000/svg">
								<path
									clipRule="evenodd"
									d="M18 3a1 1 0 00-1.447-.894L8.763 6H5a3 3 0 000 6h.28l1.771 5.316A1 1 0 008 18h1a1 1 0 001-1v-4.382l6.553 3.276A1 1 0 0018 15V3z"
									fillRule="evenodd"></path>
							</svg>
						</span>
						<p className="alert">اعلان جديد !</p>
					</div>

					<p className="message">
						تابعونا وكونوا جزءًا من مجتمعنا الذي يؤمن بأهمية الصحة الشاملة، حيث نسعى
						جميعًا لتحسين نوعية حياتنا وتحقيق التوازن الصحي الذي نسعى إليه.{" "}
					</p>

					<div className="actions">
						<a className="read" href="/chat">
							Take a Look
						</a>

						<a className="mark-as-read" href="">
							Mark as Read
						</a>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Factories;

<div className="container">
	<form className="form">
		<h1>كيف يمكنني مساعدتك ؟</h1>
		<div className="form-group">
			<input id="input" className="input" type="text" placeholder="ادخل سؤالك" />
		</div>
		<div>
			<h1 className="">الجواب</h1>
			<textarea disabled className="answer"></textarea>
		</div>
	</form>
</div>;
