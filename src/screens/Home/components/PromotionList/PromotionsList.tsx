import { useEffect } from 'react';

import { fetchPromotions } from '../../store/promotionsActions';
import { useAppDispatch, useAppSelector } from '../../../../store/redux';
import { Notification, startNotification, NotificationTypes } from '../../../../components/Notification';

import PromotionsListItem from '../PromotionListItem/PromotionsListItem';
import PromotionsListSkeleton from '../PromotionsListSkeleton/PromotionsListSkeleton';

import './promotionList.scss';

const PromotionsList = () => {
    const dispatch = useAppDispatch();
    const {error, loading, promotions} = useAppSelector(state => state.promotions);

    useEffect(() => {
        dispatch(fetchPromotions());

        // eslint-disable-next-line
    }, []);

    useEffect(() => {
        if (error) {
            dispatch(startNotification({
                type: NotificationTypes.error,
                text: `An error occurred when uploading promotions. (${error})`,
            }));
        }

        // eslint-disable-next-line
    }, [error]);

    return(
        <div className="promotion-list">
            {loading ? <PromotionsListSkeleton/> : null}
            {promotions ? promotions.map(promotion => {
                return <PromotionsListItem key={promotion.id} {...promotion} />;
            }) : null}

            <Notification/>
        </div>
    );
};

export default PromotionsList;