import IOrder from "../../interfaces/IOrder";
import DotsIcon from '../../assets/icons/DotsIcon';
import OptionsPanel from '../OptionsPanel/OptionsPanel';
import { useState } from "react";

const AdminOrdersItem = (props: IOrder) => {
    const [isOpenOptions, setIsOpenOptions] = useState<boolean>(false);
    const {id, customerName, customerImage, address, creationDate, creationTime, status, totalAmount} = props;
    const statusMeta = 'user-orders__status user-orders__status--' + status;
    const options = [
        {
            title: "Open",
        },
        {
            title: "Delete",
        }
    ]

    const toggleOptionsPanel = () => {
        setIsOpenOptions(isOpenOptions => !isOpenOptions);
    }

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
                <div className="user-orders__options">
                    <div className="user-orders__options-icon" onClick={() => toggleOptionsPanel()}>
                        <DotsIcon/>
                    </div>
                    {isOpenOptions ?
                        <OptionsPanel options={options}/>
                    : null}
                </div>
            </span>
        </div>
    )
}

export default AdminOrdersItem;