import { useState } from "react";

interface IProps {
    title: string,
    icon: string,
    setActiveFilters: any,
    activeFilters: any
}

const CategoryListItem = (props: IProps) => {
    const [active, setActive] = useState<boolean>();
    const {title, icon, setActiveFilters, activeFilters} = props;
    const itemMeta = active ? "categories-list__item categories-list__item--selected" : "categories-list__item"

    const toggleActive = () => {
        setActive(active => !active);

        if (!active) {
            activeFilters.length
                ? setActiveFilters([...activeFilters, title])
                : setActiveFilters([title]);
        } else {
            activeFilters.length
                ? setActiveFilters(activeFilters.filter((filter: string) => filter !== title))
                : setActiveFilters([]);
        }
    }

    return(
        <div className={itemMeta}
            tabIndex={1}
            onClick={() => toggleActive()}
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