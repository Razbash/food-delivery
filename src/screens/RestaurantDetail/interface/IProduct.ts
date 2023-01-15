interface IProduct {
    id: number,
    name: string,
    description: string,
    price: number,
    ingredients: string,
    nutritionalValue: string,
    restaurantId: number,
    images: string[],
}

export default IProduct;