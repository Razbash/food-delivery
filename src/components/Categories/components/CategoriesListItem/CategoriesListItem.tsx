import { useAppSelector } from '../../../../store/redux';

import ICategoriesListItemProps from '../../interfaces/ICategoriesListItemProps';
import './categoriesListItem.scss';

const CategoriesListItem = ({id, title, icon, onSetFilters, size}: ICategoriesListItemProps) => {
    const {selectedFilters} = useAppSelector(state => state.selectedFilters);
    let itemMeta = 'categories-list-item';

    if (selectedFilters.indexOf(id) !== -1 && onSetFilters) {
        itemMeta += ' categories-list-item--selected';
    }

    if (size) {
        itemMeta += ` categories-list-item--${size}`;
    }

    const onClickCategoryItem = () => {
        if (onSetFilters) {
            onSetFilters(id);
        }
    };

    return(
        <div className={itemMeta}
            tabIndex={1}
            onClick={onClickCategoryItem}
        >
            <img src={icon}
                alt={title}
                className="categories-list-item__image"
                width="24"
                height="24"
            />

            <span className="categories-list-item__name">
                {title}
            </span>
        </div>
    );
};

export default CategoriesListItem;