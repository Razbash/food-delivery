import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../store/redux";
import { fetchDeals } from "./store/dealsActions";
import { Notification, NotificationTypes, startNotification } from "../../components/Notification";

import LayoutPage from "../Layouts/LayoutPage";
import BlockTitle from "../../components/BlockTitle/BlockTitle";
import DealsListSkeleton from "./components/DealsListSkeleton";
import DealsListItem from "./components/DealsListItem";

import './deals.scss';

const DealsPage = () => {
    const dispatch = useAppDispatch();
    const {error, loading, deals} = useAppSelector(state => state.deals);

    useEffect(() => {
        dispatch(fetchDeals());

        // eslint-disable-next-line
    }, []);

    useEffect(() => {
        if (error) {
            dispatch(startNotification({
                type: NotificationTypes.error,
                text: `An error occurred when uploading deals. (${error})`
            }));
        }

        // eslint-disable-next-line
    }, [error]);

    return(
        <LayoutPage>
            <BlockTitle text="All deals" />

            <div className="deals-list">
                <div className="deals-list__wrapper">
                    {loading ? <DealsListSkeleton/> : null}
                    {deals ? deals.map(element => <DealsListItem key={element.id} {...element} />) : null}
                </div>
            </div>

            <Notification/>
        </LayoutPage>
    )
}

export default DealsPage;