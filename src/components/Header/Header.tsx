import "./Header.scss";
import HeaderNav from "./HeaderNav";
import HeaderProfile from "./HeaderProfile";

const Header = () => {
	return (
		<div className="Header">
			<HeaderProfile />
			<HeaderNav />
		</div>
	);
};

export default Header;
