import CategoryListItem from '../CategoryListItem/CategoryListItem';
import { useEffect, useState } from 'react';
import { fetchCategories } from '../../store/actions/categoriesActions';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { changeFilterReustorants, fetchReustorants } from '../../store/actions/reustorantsActions';
import IReaustorant from '../../interfaces/IReustorant';
import axios from "../../axios/index";
// Перепиши функционал
const CategoryList = () => {
    const dispatch = useAppDispatch();
    const {error, loading, categories} = useAppSelector(state => state.categories);

    const [activeFilters, setActiveFilters] = useState<any>([]);
    const [reustorantsList, setReustorantsList] = useState<IReaustorant[]>([]);

    useEffect(() => {
        dispatch(fetchCategories());
        getReustorantsList();
    }, []);

    useEffect(() => {
        let mass:IReaustorant[] = [];

        if (!activeFilters.length) {
            dispatch(fetchReustorants());
        } else {
            activeFilters.forEach((filter: string) => {
                reustorantsList.forEach(reustorant => {
                    reustorant.categories.forEach(category => {
                        if (filter.toLowerCase() === category && !mass.includes(reustorant)) {
                            mass.push(reustorant);
                        }
                    });
                });
            });

            dispatch(changeFilterReustorants(mass));
        }
    }, [activeFilters]);

    const getReustorantsList = async() => {
        const response = await axios.get('reustorants');
        setReustorantsList(response.data);
    }

    return(
        <div className="categories-list">
            {loading ? <SkeletonCategoryList/> : null}
            {error ? <ErrorCategoryList/> : null}
            {categories ? categories.map(element => {
                return(
                    <CategoryListItem key={element.id}
                        {...element}
                        activeFilters={activeFilters}
                        setActiveFilters={setActiveFilters}
                    />
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