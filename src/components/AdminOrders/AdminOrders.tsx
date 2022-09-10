import { useEffect} from 'react';

import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { fetchOrders } from '../../store/actions/ordersActions';
import AdminOrdersItem from '../AdminOrdersItem/AdminOrdersItem';

const AdminOrders = () => {
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
                return(
                    <AdminOrdersItem key={element.id} {...element}/>
                )
            })}
        </div>
    )
}

export default AdminOrders;