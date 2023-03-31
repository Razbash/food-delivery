interface IShippingAddress {
    addressName: string,
    country: string,
    state: string,
    city: string,
    addressLine1: string,
    addressLine2?: string,
    coordinates?: string
}

export default IShippingAddress;