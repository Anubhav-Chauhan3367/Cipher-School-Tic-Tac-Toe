import { FaTimes, FaRegCircle, FaPen } from "react-icons/fa";

const Icon = ({ play_icon }) => {
	switch (play_icon) {
		case "Circle":
			return <FaRegCircle />;
		case "Cross":
			return <FaTimes />;
		default:
			return <FaPen />;
	}
};

export default Icon;
