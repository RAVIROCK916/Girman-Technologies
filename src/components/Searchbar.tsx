import { Search } from "lucide-react";
import { Input } from "./ui/input";
import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { SearchContext } from "@/pages/SearchPage";
import { Button } from "./ui/button";
import { toast } from "sonner";
import { validateString } from "@/utils/validateString";

const Searchbar = () => {
	const [value, setValue] = useState("");

	const query = useContext(SearchContext);

	const navigate = useNavigate();

	useEffect(() => {
		setValue(query);
	}, [query]);

	const handleSearch = () => {
		console.log("Searching for", value);
		if (validateString(value)) {
			navigate(`/search?q=${encodeURIComponent(value)}`);
		} else {
			toast.error("Please enter a valid search query");
			console.log("error");
		}
	};

	return (
		<div
			className={`relative w-80 md:w-[500px] h-max rounded-md ${
				location.pathname === "/" ? "shadow-md" : "shadow-sm"
			}`}
		>
			<Search className="size-4 text-neutral-400 absolute top-[50%] -translate-y-1/2 left-3" />
			<Input
				placeholder="Search"
				className="pl-9 placeholder:text-neutral-3400"
				value={value}
				onChange={(e) => setValue(e.target.value)}
				onKeyDown={(e) => {
					if (e.key === "Enter") {
						handleSearch();
					}
				}}
			/>
			<Button
				className="absolute top-0 right-0 rounded-l-none"
				onClick={handleSearch}
			>
				Search
			</Button>
		</div>
	);
};
export default Searchbar;
