import { navItems } from "@/constants";
import Logo from "./Logo";

const Navbar = () => {
	return (
		<nav className="sticky top-0 py-4 shadow-md bg-white z-10">
			<div className="md:max-w-screen-lg flex justify-between items-center px-5 mx-auto">
				<Logo />
				<ul className="hidden gap-x-12 md:flex">
					{navItems.map((item) => (
						<li
							key={item.name}
							className={item.href === location.pathname ? "text-blue-600" : ""}
						>
							<a href={item.href}>{item.name}</a>
						</li>
					))}
				</ul>
			</div>
		</nav>
	);
};
export default Navbar;
