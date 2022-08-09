import ICategory from "../../interfaces/ICategory";

const CategoryListItem = (props: ICategory) => {
    const {id, name, icon} = props;

    return(
        <div className="categories-list__item"
            onClick={(e) => e.currentTarget.classList.toggle("categories-list__item--selected")}
            tabIndex={1}
        >
            <img src={icon}
                alt={name}
                className="categories-list__image"
                width="24"
                height="24"
            />

            <span className="categories-list__name">
                {name}
            </span>
        </div>
    )
}

export default CategoryListItem;