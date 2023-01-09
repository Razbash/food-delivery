import IProduct from "./IProduct";
import { IShippingAddressWithId } from "./IShippingAddresses";

// Fix payments
interface IOrder {
    creationDate: string,
    creationTime: string,
    address: IShippingAddressWithId,
    payment: any,
    products: IProduct[],
    totalAmount: number,
    customerId: number,
    status: string,
}

export interface IOrderWithId extends IOrder {
    id: number
}

export default IOrder;