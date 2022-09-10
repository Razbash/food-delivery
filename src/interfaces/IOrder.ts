interface IOrder {
    id: number,
    customerName: string,
    customerImage: string,
    address: string,
    creationDate: string,
    creationTime: string,
    status: string,
    totalAmount: number
}

export default IOrder;