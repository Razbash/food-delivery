import DealsListItem from '../DealsListItem/DealsListItem';
import { IDeal } from '../../interfaces/IDeal';

import forVeganImage from '../../assets/images/deals/20-for-vegans.png';
import forMealsImage from '../../assets/images/deals/5-for-meals.png';
import freePepsiImage from '../../assets/images/deals/free-pepsi.png';
import getPizzaImage from '../../assets/images/deals/get-pizza.png';
import above300Image from '../../assets/images/deals/above-300.png';
import forVegansImage from '../../assets/images/deals/30-for-vegans.png';
import freeBurgerImage from '../../assets/images/deals/free-burger.png';
import freeSushiImage from '../../assets/images/deals/free-sushi.png';
import desertImage from '../../assets/images/deals/25-deserts.png';

const DealsList = () => {
    const deals:Array<IDeal> = [
        {
            id: 0,
            title: "20% off on Vegan sandwiches every Saturday this Summer",
            status: "active",
            image: forVeganImage,
            date: "10 April, 2021 – 30 August, 2021 (Saturday only)",
            reustorant: "Vegfood",
        },
        {
            id: 1,
            title: "5% off on all meals every Wednesday",
            status: "active",
            image: forMealsImage,
            date: "5 March, 2021 – 20 June, 2021 (Wednesday only)",
            reustorant: "Parallax Restaurant",
        },
        {
            id: 2,
            title: "Free Pepsi on orders above $50",
            status: "active",
            image: freePepsiImage,
            date: "22 March, 2021 – 12 June, 2021",
            reustorant: "Sur un Arbre Perché",
        },
        {
            id: 3,
            title: "Get extra pizza on orders above $200",
            status: "active",
            image: getPizzaImage,
            date: "20 April, 2021 – 28 July, 2021",
            reustorant: "Norma's",
        },
        {
            id: 4,
            title: "10% off on all orders above $300",
            status: "scheduled",
            image: above300Image,
            date: "1 June, 2021 – 30 July, 2021",
            reustorant: "Ithaa",
        },
        {
            id: 5,
            title: "30% off on non vegan meals every Monday",
            status: "scheduled",
            image: forVegansImage,
            date: "20 June, 2021 – 30 August, 2021 (Monday only)",
            reustorant: "Ithaa",
        },
        {
            id: 6,
            title: "Free burger and fries on orders above $120",
            status: "expired",
            image: freeBurgerImage,
            date: "12 April, 2021",
            reustorant: "Parallax Restaurant",
        },
        {
            id: 7,
            title: "Free sushi roll on orders above $200",
            status: "expired",
            image: freeSushiImage,
            date: "30 March, 2021",
            reustorant: "Parallax Restaurant",
        },
        {
            id: 8,
            title: "25% off on all deserts(Chef's Birthday)",
            status: "expired",
            image: desertImage,
            date: "13 April, 2021",
            reustorant: "Parallax Restaurant",
        },
    ]
    return(
        <div className="deals-list">
            <h5 className="deals-list__title">All deals</h5>
            <div className="deals-list__wrapper">
                {deals.map(element => {
                    return(
                        <DealsListItem key={element.id} {...element} />
                    )
                })}
            </div>
        </div>
    )
}

export default DealsList;