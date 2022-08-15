import CategoryListItem from '../CategoryListItem/CategoryListItem';
import { useEffect } from 'react';
import { fetchCategories } from '../../store/actions/categoriesActions';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';

const CategoryList = () => {
    const dispatch = useAppDispatch();
    const {error, loading, categories} = useAppSelector(state => state.categories);

    useEffect(() => {
        dispatch(fetchCategories());
    }, []);

    return(
        <div className="categories-list">
            {loading ? <SkeletonCategoryList/> : null}
            {error ? <ErrorCategoryList/> : null}
            {categories ? categories.map(element => {
                return(
                    <CategoryListItem key={element.id} {...element} />
                )
            }): null}
        </div>
    );
}

const SkeletonCategoryList = () => {
    return(
        <>
            <div className="categories-list__skeleton-item"></div>
            <div className="categories-list__skeleton-item"></div>
            <div className="categories-list__skeleton-item"></div>
            <div className="categories-list__skeleton-item"></div>
            <div className="categories-list__skeleton-item"></div>
            <div className="categories-list__skeleton-item"></div>
        </>
    )
};

const ErrorCategoryList = () => {
    return(
        <span className="categories-list__error">При загрузке данных произошла обшибка! Попробуйте перезагрузить страницу</span>
    )
}

export default CategoryList;