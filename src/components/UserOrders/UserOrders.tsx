import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../hooks/redux";
import { fetchOrders } from "../../store/actions/ordersActions";
import { fetchReustorants } from "../../store/actions/reustorantsActions";
import { fetchUser } from "../../store/actions/userActions";
import { getCookie } from "../../tools/cookie";
import { IOrderWithId } from "../../interfaces/IOrder";

interface IUserOrdersRenderContentProps {
    orders: IOrderWithId[],
    userName: string,
    redirectOnReustorantPage: (reustorantName: string) => void
}

const UserOrders = () => {
    const userId = getCookie('userId');

    const dispatch = useAppDispatch();
    const {error, loading, orders} = useAppSelector(state => state.orders);
    const {reustorants} = useAppSelector(state => state.reustorants);
    const {user} = useAppSelector(state => state.user);
    const userName = `${user.firstName} ${user.lastName}`;
    const tableHeader = ["Order Id", "Reustorant", "Creation date", "Creation time", "Status", "Total amount"];

    let navigate = useNavigate();

    useEffect(() => {
        userId
            ? dispatch(fetchUser({id: Number(userId)}))
            : navigate('/auth');

        dispatch(fetchOrders());
        dispatch(fetchReustorants());
    }, []);

    const redirectOnReustorantPage = (reustorantName: string) => {
        reustorants.forEach(element => {
            if (element.name === reustorantName) {
                navigate(`/reustorant/${element.id}`);
            }
        });
    }

    return(
        <div className="user-orders">
            <div className="user-orders__header">
                {tableHeader.map((element: string) => {
                    return(
                        <span className="user-orders__header-item">{element}</span>
                    )
                })}
            </div>

            {loading ? <UserOrdersLoading/> : null}
            {error ? <UserOrdersError/> : null}
            {/* Fix it */}
            {/* {orders ? <UserOrdersRenderContent orders={orders}
                userName={userName}
                redirectOnReustorantPage={redirectOnReustorantPage}
            /> : null} */}

            {/* FIX it */}
            {/* {!error && !loading && !orders.filter(element => userName == element.customerName).length
                ? <UserOrdersEmptyContent/>
                : null} */}
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
                // Fix it
                // if (userName !== element.customerName) {
                //     return
                // }

                const {id, creationDate, creationTime, status, totalAmount} = element;
                const statusMeta = 'user-orders__status user-orders__status--' + status;

                return(
                    <Link to={`/order/${id}`} className="user-orders__table" key={id}>
                        <span className="user-orders__table-item">{id}</span>
                        {/* FIx it */}
                        {/* <span className="user-orders__table-item user-orders__table-item--link" onClick={() => redirectOnReustorantPage(reustorant)}>{reustorant}</span> */}
                        <span className="user-orders__table-item">{creationDate}</span>
                        <span className="user-orders__table-item">{creationTime}</span>
                        <span className="user-orders__table-item user-orders__table-item--status">
                            <div className={statusMeta}></div>
                            {status}
                        </span>
                        <span className="user-orders__table-item user-orders__table-item--total-amount">${totalAmount}</span>
                    </Link>
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