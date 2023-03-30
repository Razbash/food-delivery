interface IUser {
    id: number,
    firstName: string,
    lastName: string,
    email: string,
    password: string,
    phone?: string,
    image?: string,
    length?: string,
}

export default IUser;