export default interface IRestaurant {
    id: number,
    name: string,
    minDeliveryTime: number,
    maxDeliveryTime: number,
    minAmount: number,
    categoriesId: number[],
    featured: boolean,
    image: string,
    description: string,
    coordinates?: number[],
}