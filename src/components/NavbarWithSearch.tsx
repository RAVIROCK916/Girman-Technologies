import Logo from "./Logo";
import Searchbar from "./Searchbar";

const NavbarWithSearch = () => {
	return (
		<nav className="sticky top-0 p-4 shadow-md bg-white z-10">
			<div className="max-w-screen-lg mx-auto flex justify-between items-center">
				<Logo />
				<Searchbar />
			</div>
		</nav>
	);
};
export default NavbarWithSearch;
