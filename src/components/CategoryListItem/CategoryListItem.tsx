import ICategory from "../../interfaces/ICategory";

const CategoryListItem = (props: ICategory) => {
    const {title, icon} = props;

    return(
        <div className="categories-list__item"
            onClick={(e) => e.currentTarget.classList.toggle("categories-list__item--selected")}
            tabIndex={1}
        >
            <img src={icon}
                alt={title}
                className="categories-list__image"
                width="24"
                height="24"
            />

            <span className="categories-list__name">
                {title}
            </span>
        </div>
    )
}

export default CategoryListItem;