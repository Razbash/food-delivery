interface IReaustorant {
    id: number,
    name: string,
    minDeliveryTime: number,
    maxDeliveryTime: number,
    minAmount: number,
    categories: Array<string>,
    featured: boolean,
    image: string,
}

export default IReaustorant;