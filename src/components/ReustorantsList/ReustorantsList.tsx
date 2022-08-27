import CartIcon from '../../assets/icons/CartIcon';
import ReustorantDeliveryInfo from '../ReustorantDelivryInfo/ReustorantDeliveryInfo';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import { fetchReustorants } from '../../store/actions/reustorantsActions';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import IReaustorant from '../../interfaces/IReustorant';

interface IProps {
    showCounter?: boolean,
    shortList?: boolean,
}

interface IReustorantsListItemProsp {
    data: IReaustorant[],
}

const ReustorantsList = (props: IProps) => {
    const {showCounter, shortList} = props;
    const dispatch = useAppDispatch();
    const {error, loading, reustorants} = useAppSelector(state => state.reustorants);

    useEffect(() => {
        dispatch(fetchReustorants());
    }, []);

    return(
        <>
            {showCounter ? <span className="reustorants-list-counter">Found 12 restaurants</span> : null}

            <div className="reustorants-list">
                {loading ? <SkeletonReustorantsList/> : null}
                {error ? <ErrorReustorantsList/> : null}
                {reustorants ? <ReustorantsListItem data={reustorants}/> : null}
            </div>

            {shortList ? <button className="button reustorants-list__load-more-button">Load more</button> : null}
        </>
    )
}

const ReustorantsListItem = (props: IReustorantsListItemProsp) => {
    return(
        <>
            {props.data.map(element => {
                const {id, name, minDeliveryTime, maxDeliveryTime, minAmount, categories, featured, image} = element;
                const backgroundImageStyle = {
                    'background': 'url(' + image + ')',
                    'backgroundSize': 'cover',
                    'backgroundPosition': 'center'
                }

                return(
                    <div className="reustorants-list__item" key={id}>
                        <div className="reustorants-list__image" style={backgroundImageStyle}></div>
                        <div className="reustorants-list__info">
                            <div className="reustorants-list__title">
                                <Link to="/reustorants/reustorant" className="reustorants-list__name">
                                    {name}
                                </Link>

                                <CartIcon/>
                            </div>

                            <ReustorantDeliveryInfo
                                minDeliveryTime={minDeliveryTime}
                                maxDeliveryTime={maxDeliveryTime}
                                minAmount={minAmount}
                            />
                            (Иконка категории)
                        </div>

                        {featured ? <span className="reustorants-list__label">Featured</span> : null}
                    </div>
                )
            })}
        </>
    )
}

const SkeletonReustorantsList = () => {
    return(
        <>
            <div className="reustorants-list__skeleton-item"></div>
            <div className="reustorants-list__skeleton-item"></div>
            <div className="reustorants-list__skeleton-item"></div>
            <div className="reustorants-list__skeleton-item"></div>
            <div className="reustorants-list__skeleton-item"></div>
            <div className="reustorants-list__skeleton-item"></div>
        </>
    )
};

// TODO вынести в компонент
const ErrorReustorantsList = () => {
    return(
        <span className="categories-list__error">При загрузке данных произошла обшибка! Попробуйте перезагрузить страницу</span>
    )
}

export default ReustorantsList;