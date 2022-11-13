interface IUser {
    id: number,
    image?: string,
    firstName: string,
    lastName: string,
    phone?: string,
    email: string,
    password: string,
    notifications: [string],
    shippingAddresses?: [
        {
            id: number,
            addressName: string,
            country: string,
            state: string,
            city: string,
            addressLine1: string,
            addressLine2?: string,
            coordinates?: string
        }
    ],
    paymentMethods?: [
        {
            id: number,
            cardNumber: number,
            expiration: string,
            cvc: number,
            cardHolder: string
        },
    ]
}

export default IUser;