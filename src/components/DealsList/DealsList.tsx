import DealsListItem from '../DealsListItem/DealsListItem';
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