import searchImage from '../../assets/icons/search.svg';

const Search = () => {
    return(
        <div className="search">
            <input type="search"
                className="search__input"
                placeholder="Search"
            />

            <img src={searchImage}
                alt="Search"
                className="search__icon"
                width="16"
                height="16"
            />
        </div>
    )
}

export default Search;