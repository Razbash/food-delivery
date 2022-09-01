import IReustorantMenu from "./IReustorantMenu";
import IReustorantReviews from "./IReustorantReviews";

interface IReaustorant {
    id: number,
    name: string,
    minDeliveryTime: number,
    maxDeliveryTime: number,
    minAmount: number,
    categories: string[],
    featured: boolean,
    image: string,
    description: string,
    menu?: IReustorantMenu[],
    reviews?: IReustorantReviews[],
    coordinates?: number[],
}

export default IReaustorant;