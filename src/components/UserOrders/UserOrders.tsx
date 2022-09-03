const UserOrders = () => {
    const orders = [
        {
            id: 0,
            reustorant: "Bluepoint Sage Cafe",
            date: "21 Apr, 2021",
            time: "05:51 pm",
            status: "in progress",
            totalAmount: 149.40,
        },
        {
            id: 1,
            reustorant: "P. F. Chang's China Bistro",
            date: "20 Apr, 2021",
            time: "07:38 am",
            status: "in progress",
            totalAmount: 351.22,
        },
        {
            id: 2,
            reustorant: "Texas Roadhouse",
            date: "20 Apr, 2021",
            time: "05:49 am",
            status: "completed",
            totalAmount: 258.28,
        },
        {
            id: 3,
            reustorant: "Famous Dave's",
            date: "20 Apr, 2021",
            time: "05:49 am",
            status: "completed",
            totalAmount: 795.86,
        },
        {
            id: 4,
            reustorant: "BJ's Restaurant & Brewery",
            date: "20 Apr, 2021",
            time: "04:01 am",
            status: "completed",
            totalAmount: 162.86,
        }
    ]
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
                const {id, reustorant, date, time, status, totalAmount} = element;
                const statusMeta = 'user-orders__status user-orders__status--' + status;
                return(
                    <div className="user-orders__table">
                        <span className="user-orders__table-item">{id}</span>
                        <span className="user-orders__table-item user-orders__table-item--link">{reustorant}</span>
                        <span className="user-orders__table-item">{date}</span>
                        <span className="user-orders__table-item">{time}</span>
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