import { useEffect } from 'react';

import { useAppDispatch, useAppSelector } from '../../store/redux';
import { fetchCategories } from '../../store/Categories/categoriesActions';
import { setFilters } from '../../store/Filters/filtersActions';

import CategoriesListItem from './CategoriesListItem';
import CategoriesListSkeleton from './CategoriesListSkeleton';

import './categories.scss';

const CategoriesList = () => {
    const dispatch = useAppDispatch();
    const {error, loading, categories} = useAppSelector(state => state.categories);
    const {selectedFilters} = useAppSelector(state => state.selectedFilters);

    useEffect(() => {
        dispatch(fetchCategories());

        // eslint-disable-next-line
    }, []);

    const onSetFilters = (filterId: number) => {
        dispatch(setFilters(selectedFilters, filterId));
    };

    return(
        <div className="categories-list">
            {loading ? <CategoriesListSkeleton/> : null}
            {categories ? categories.map(element => {
                return(
                    <CategoriesListItem key={element.id}
                        onSetFilters={onSetFilters}
                        {...element}
                    />
                );
            }): null}
        </div>
    );
};

export default CategoriesList;