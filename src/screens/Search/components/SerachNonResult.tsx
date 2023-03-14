const SearchNonResult = () => {
    return(
        <div className="no-found">
            <div className="no-found__wrapper">
                <img src="../../assets/images/noFound.svg"
                    alt="No found"
                    className="no-found__image"
                    width={180}
                    height={180}
                />

                <div className="no-found__info">
                    <h3 className="no-found__title">Nothing was found for your query</h3>
                    <p className="no-found__text">Try to write the name of the restaurant differently or shorten the query. Make sure that the name of the restaurant is spelled correctly</p>
                </div>
            </div>
        </div>
    );
};

export default SearchNonResult;