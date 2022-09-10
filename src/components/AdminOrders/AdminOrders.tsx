import { useEffect } from 'react';
import DotsIcon from '../../assets/icons/DotsIcon';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { fetchOrders } from '../../store/actions/ordersActions';

const AdminOders = () => {
    const dispatch = useAppDispatch();
    const {error, loading, orders} = useAppSelector(state => state.orders);

    useEffect(() => {
        dispatch(fetchOrders());
    }, []);

    return(
        // TODO: fixme
        <div className="user-orders admin-orders">
            <div className="user-orders__header">
                <span className="user-orders__header-item">Order Id</span>
                <span className="user-orders__header-item">Customer</span>
                <span className="user-orders__header-item">Address</span>
                <span className="user-orders__header-item">Creation date</span>
                <span className="user-orders__header-item">Creation time</span>
                <span className="user-orders__header-item">Status</span>
                <span className="user-orders__header-item">Total amount</span>
            </div>

            {orders.map(element => {
                const {id, customerName, customerImage, address, creationDate, creationTime, status, totalAmount} = element;
                const statusMeta = 'user-orders__status user-orders__status--' + status;
                return(
                    <div className="user-orders__table" key={id}>
                        <span className="user-orders__table-item">{id}</span>
                        <div className="user-orders__table-item user-orders__table-item--customer">
                            <img src={customerImage}
                                width={32}
                                height={32}
                                alt={customerName}
                                className="user-orders__customer-image"
                            />
                            <span className="user-orders__customer-name">{customerName}</span>
                        </div>
                        <span className="user-orders__table-item">{address}</span>
                        <span className="user-orders__table-item">{creationDate}</span>
                        <span className="user-orders__table-item">{creationTime}</span>
                        <span className="user-orders__table-item user-orders__table-item--status">
                            <div className={statusMeta}></div>
                            {status}
                        </span>
                        <span className="user-orders__table-item user-orders__table-item--total-amount">
                            <span>${totalAmount}</span>
                            <DotsIcon/>
                        </span>
                    </div>
                )
            })}
        </div>
    )
}

export default AdminOders;