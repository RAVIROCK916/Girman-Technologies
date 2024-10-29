import Navbar from "./components/Navbar";
import Searchbar from "./components/Searchbar";

const App = () => {
	return (
		<div className="h-screen flex flex-col">
			<Navbar />
			<div className="flex flex-col flex-1 items-center h-full mt-24 bg-gradient-to-b from-transparent to-blue-300">
				<div className="flex items-center gap-x-6 mb-6">
					<figure>
						<img src="logo.svg" alt="Girman Technologies" className="w-28" />
					</figure>
					<h2 className="text-8xl font-poppins font-semibold">Girman</h2>
				</div>
				<Searchbar />
			</div>
		</div>
	);
};
export default App;
