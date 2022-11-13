import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../hooks/redux";
import IOrder from "../../interfaces/IOrder";
import { fetchOrders } from "../../store/actions/ordersActions";
import { fetchReustorants } from "../../store/actions/reustorantsActions";
import { fetchUser } from "../../store/actions/userActions";
import Spinner from "../../tools/Spinner";

interface IUserOrdersRenderContentProps {
    orders: IOrder[],
    userName: string,
    redirectOnReustorantPage: (reustorantName: string) => void
}

const UserOrders = () => {
    // Вынести
    const userId = localStorage.getItem('userId');
    const dispatch = useAppDispatch();
    const {error, loading, orders} = useAppSelector(state => state.orders);
    const {reustorants} = useAppSelector(state => state.reustorants);
    const {user} = useAppSelector(state => state.user);
    const userName = `${user.firstName} ${user.lastName}`

    let navigate = useNavigate();

    useEffect(() => {
        userId
            ? dispatch(fetchUser({id: Number(userId)}))
            : navigate('/auth');

        dispatch(fetchOrders());
        dispatch(fetchReustorants());
    }, []);

    // Вынести в общую функцию
    const redirectOnReustorantPage = (reustorantName: string) => {
        reustorants.forEach(element => {
            if (element.name === reustorantName) {
                navigate(`/reustorant/${element.id}`);
            }
        });
    }
console.log(orders);
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

            {loading ? <UserOrdersLoading/> : null}
            {error ? <UserOrdersError/> : null}
            {orders ? <UserOrdersRenderContent orders={orders}
                userName={userName}
                redirectOnReustorantPage={redirectOnReustorantPage}
            /> : null}
            {!error && !loading && !orders.filter(element => userName == element.customerName).length
                ? <UserOrdersEmptyContent/>
                : null}
        </div>
    )
}

const UserOrdersLoading = () => {
    return(
        <div className="user-orders__loading"></div>
    )
}

const UserOrdersError = () => {
    return(
        <div className="user-orders__error">
            <span>
                An error occurred while loading the data! Try
                <span onClick={() => window.location.reload()} className="user-orders__error-link"> refreshing </span>
                this page
            </span>
        </div>
    )
}

const UserOrdersRenderContent = (props:IUserOrdersRenderContentProps) => {
    const {orders, userName, redirectOnReustorantPage} = props;

    return(
        <>
            {orders.map(element => {
                if (userName !== element.customerName) {
                    return
                }

                const {id, reustorant, creationDate, creationTime, status, totalAmount} = element;
                const statusMeta = 'user-orders__status user-orders__status--' + status;

                return(
                    <div className="user-orders__table" key={id}>
                        <span className="user-orders__table-item">{id}</span>
                        <span className="user-orders__table-item user-orders__table-item--link" onClick={() => redirectOnReustorantPage(reustorant)}>{reustorant}</span>
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
        </>
    )
}

const UserOrdersEmptyContent = () => {
    return(
        <div className="user-orders__error">
            <span>This account has no orders! Create your first order</span>
        </div>
    )
}

export default UserOrders;