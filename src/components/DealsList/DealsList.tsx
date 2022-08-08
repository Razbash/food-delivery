import DealsListItem from '../DealsListItem/DealsListItem';
import IDeal from '../../interfaces/IDeal';

import forVeganImage from '../../assets/images/deals/20-for-vegans.png';
import forMealsImage from '../../assets/images/deals/5-for-meals.png';
import freePepsiImage from '../../assets/images/deals/free-pepsi.png';
import getPizzaImage from '../../assets/images/deals/get-pizza.png';
import above300Image from '../../assets/images/deals/above-300.png';
import forVegansImage from '../../assets/images/deals/30-for-vegans.png';
import freeBurgerImage from '../../assets/images/deals/free-burger.png';
import freeSushiImage from '../../assets/images/deals/free-sushi.png';
import desertImage from '../../assets/images/deals/25-deserts.png';
import { useEffect } from 'react';
import { fetchDeals } from '../../store/actions/dealsActions';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';

interface IDealList {
    display: string
}

const DealsList = (props:IDealList) => {
    const dispatch = useAppDispatch();
    const {error, loading, deals} = useAppSelector(state => state.deals);

    useEffect(() => {
        dispatch(fetchDeals());
    }, []);

    return(
        <div className="deals-list">
            <div className="deals-list__wrapper">
                {deals.map(element => {
                    if (props.display === "all" || props.display === element.status) {
                        return(
                            <DealsListItem key={element.id} {...element} />
                        )
                    }
                })}
            </div>
        </div>
    )
}

export default DealsList;