import { useEffect } from "react";
import PenIcon from "../../assets/icons/PenIcon";
import TrashIcon from "../../assets/icons/TrashIcon";
import { useAppDispatch, useAppSelector } from "../../hooks/redux";
import { fetchReustorants } from "../../store/actions/reustorantsActions";

const AdminReustorantsList = () => {
    const dispatch = useAppDispatch();
    const {error, loading, reustorants} = useAppSelector(state => state.reustorants);

    useEffect(() => {
        dispatch(fetchReustorants());
    }, []);

    return(
        <div className="admin-reustorants-list">
            {reustorants.map(element => {
                const {id, name, description, minDeliveryTime, maxDeliveryTime, minAmount, categories, featured, image} = element;

                return(
                    <div className="admin-reustorants-list__item" key={id}>
                        <div className="admin-reustorants-list__image" style={{'backgroundImage': 'url(' + image + ')'}}></div>
                        <div className="admin-reustorants-list__info">
                            <span className="admin-reustorants-list__name">{name}</span>
                            <p className="admin-reustorants-list__description">{description}</p>
                        </div>
                        <div className="admin-reustorants-list__controls">
                            <PenIcon/>
                            <TrashIcon/>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}

export default AdminReustorantsList;