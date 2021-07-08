import { useHistory } from "react-router-dom";
import BackButton from "./BackButton";
import Avatar from "./Avatar";

const Header = () => {
	let history = useHistory();

	return (
		<div className="relative z-10 flex-shrink-0 flex justify-center items-center h-16 bg-white shadow p-4">
			<div className="flex-1 flex justify-start">
				<BackButton onClick={() => history.goBack()}/>
			</div>
			<div className="flex-1 flex justify-center">
				<h1 className="text-2xl">iDojo</h1>
			</div>
			<div className="flex-1 flex justify-end">
				<Avatar/>
			</div>
		</div>
	)
}

export default Header;
