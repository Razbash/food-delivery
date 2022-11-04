const Filters = () => {
    const filters = ['dinning options', 'price range', 'delivery time', 'payment methods', 'location'];

    return(
        <div className="filters">
            {filters.map((element, index) => {
                return(
                    <div className="filters__item" key={index}>{element}</div>
                )
            })}
            <div className="filters__transparent-separator"></div>
        </div>
    )
}

export default Filters;