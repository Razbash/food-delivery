import { useState } from 'react';
import { Link } from 'react-router-dom';

import { SearchIcon } from '../../../../ui/icons/index';

const Search = () => {
    const [searchValue, setSearchValue] = useState<string>('');
    const link = searchValue ? `/search/${searchValue}` : '/reustorants';

    const changeSearchValue = (event:any) => {
        setSearchValue(event.target.value);
    };

    return(
        <div className="search">
            <input type="search"
                className="search__input"
                placeholder="Search"
                value={searchValue}
                onChange={(event) => changeSearchValue(event)}
            />

            <Link to={link} className="search__icon">
                <SearchIcon/>
            </Link>
        </div>
    );
};

export default Search;