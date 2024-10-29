import data from "@/data/index.json";
import { SearchContext } from "@/pages/SearchPage";
import { searchInObject } from "@/utils/searchInObject";
import { useContext } from "react";
import UserCard from "./UserCard";
import { Frown } from "lucide-react";

const SearchResults = () => {
	const query = useContext(SearchContext);
	console.log(data[0].first_name);
	const filteredData = data.filter((item) => searchInObject(item, query));

	return (
		<div className="flex flex-wrap justify-center gap-8 p-10 max-w-7xl">
			{filteredData.length === 0 ? (
				<div className="flex flex-col items-center justify-center gap-y-4 h-96 text-center">
					<Frown className="size-24 text-neutral-400" strokeWidth={1.5} />
					<div className="text-center text-neutral-400">
						No results found for "{query}"
					</div>
				</div>
			) : (
				filteredData.map((item, idx) => (
					<UserCard key={`${idx}-${item.first_name}`} user={item} />
				))
			)}
		</div>
	);
};
export default SearchResults;
