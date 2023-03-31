import IShippingAddress from './IShippingAddress';

interface IShippingAddressWithId extends IShippingAddress {
    id: number
}

export default IShippingAddressWithId;