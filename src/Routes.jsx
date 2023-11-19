import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Chat from "./pages/chat";
import Docs from "./pages/Docs";
import Form from "./pages/Form";
import Sidebar from './components/SideBar'
const AppRoutes = () => {
	return (
		<Router>
      <Sidebar />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/chat" element={<Chat />} />
				<Route path="/doctors" element={<Docs />} />
				<Route path="/form" element={<Form />} />
			</Routes>
		</Router>
	);
};

export default AppRoutes;
