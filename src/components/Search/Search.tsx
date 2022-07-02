import SearchIcon from "../../assets/icons/SearchIcon";

const Search = () => {
    return(
        <div className="search">
            <input type="search"
                className="search__input"
                placeholder="Search"
            />

            <div className="search__icon">
                <SearchIcon/>
            </div>
        </div>
    )
}

export default Search;