import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../hooks/redux";
import IUser from "../../interfaces/IUser";
import { fetchOrders } from "../../store/actions/ordersActions";

const UserOrders = () => {
    const JSONuserData = localStorage.getItem('userData');
    const dispatch = useAppDispatch();
    const {error, loading, orders} = useAppSelector(state => state.orders);
    const [userName, setUserName] = useState<string>("");

    let navigate = useNavigate();

    useEffect(() => {
        JSONuserData
            ? setUserName(JSON.parse(JSONuserData).name)
            : navigate('/auth');

        dispatch(fetchOrders());
    }, []);

    return(
        <div className="user-orders">
            <div className="user-orders__header">
                <span className="user-orders__header-item">Order Id</span>
                <span className="user-orders__header-item">Reustorant</span>
                <span className="user-orders__header-item">Creation date</span>
                <span className="user-orders__header-item">Creation time</span>
                <span className="user-orders__header-item">Status</span>
                <span className="user-orders__header-item">Total amount</span>
            </div>

            {orders.map(element => {
                if (userName !== element.customerName) {
                    return
                }

                const {id, reustorant, creationDate, creationTime, status, totalAmount} = element;
                const statusMeta = 'user-orders__status user-orders__status--' + status;

                return(
                    <div className="user-orders__table" key={id}>
                        <span className="user-orders__table-item">{id}</span>
                        <span className="user-orders__table-item user-orders__table-item--link">{reustorant}</span>
                        <span className="user-orders__table-item">{creationDate}</span>
                        <span className="user-orders__table-item">{creationTime}</span>
                        <span className="user-orders__table-item user-orders__table-item--status">
                            <div className={statusMeta}></div>
                            {status}
                        </span>
                        <span className="user-orders__table-item user-orders__table-item--total-amount">${totalAmount}</span>
                    </div>
                )
            })}
        </div>
    )
}

export default UserOrders;