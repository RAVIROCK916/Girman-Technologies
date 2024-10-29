import NavbarWithSearch from "@/components/NavbarWithSearch";
import SearchResults from "@/components/SearchResults";
import { createContext } from "react";
import { useSearchParams } from "react-router-dom";

export const SearchContext = createContext("");

const SearchPage = () => {
	const [searchParams, setSearchParams] = useSearchParams();
	const query = searchParams.get("q")!;

	return (
		<SearchContext.Provider value={query}>
			<div className="min-h-screen bg-blue-50">
				<NavbarWithSearch />
				<div className="flex place-content-center h-full">
					<SearchResults />
				</div>
			</div>
		</SearchContext.Provider>
	);
};
export default SearchPage;
