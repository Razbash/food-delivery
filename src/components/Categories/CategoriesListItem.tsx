import { useAppSelector } from "../../store/redux";
import ICategoriesListItemProps from "./interfaces/ICategoriesListItemProps";

const CategoriesListItem = ({id, title, icon, onSetFilters}: ICategoriesListItemProps) => {
    const {selectedFilters} = useAppSelector(state => state.selectedFilters);
    let itemMeta = "categories-list__item";

    if (selectedFilters.indexOf(id) !== -1 && onSetFilters) {
        itemMeta += " categories-list__item--selected";
    }

    const onClickCategoryItem = () => {
        if (onSetFilters) {
            onSetFilters(id);
        }
    }

    return(
        <div className={itemMeta}
            tabIndex={1}
            onClick={onClickCategoryItem}
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

export default CategoriesListItem;