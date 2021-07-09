import Routes from "./Routes";

import Header from '../components/Header';
import Footer from '../components/Footer';
import Sidebar from "../components/Sidebar";

const Layout = () => (
	<div className="flex">
		<div className="flex-1">
			<Sidebar/>
		</div>
		<div className="flex flex-auto flex-col">
			<Header/>
			<div className="flex-auto px-4 py-4 mb-8 mt-4">
				<Routes/>
			</div>
			<Footer/>
		</div>
	</div>
)

export default Layout;
