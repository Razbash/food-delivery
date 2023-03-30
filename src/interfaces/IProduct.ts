interface IProduct {
    id: number,
    name: string,
    description: string,
    price: number,
    restaurantId: number,
    images: string[],
    ingredients?: string,
    nutritionalValue?: string,
}

export default IProduct;