import desertImage from "../../assets/images/promotions/desert.png";
import burgerImage from "../../assets/images/promotions/burger.png";
import { ReactNode } from "react";

interface IPromo {
    id: number,
    name: string,
    text: string,
    category: string,
    image: string
}

const DeaslsList = () => {
    const promo: Array<IPromo> = [
        {
            id: 0,
            name: "All deserts",
            text: "20% off",
            category: "Deserty",
            image: desertImage,
        },
        {
            id: 1,
            name: "Big burgers",
            text: "50% off",
            category: "Fooddies",
            image: burgerImage,
        }
    ];

    return(
        <div className="deals-list">
            {promo.map(element => {
                return(
                    <div className="deals-list__item">
                        {element.name}
                    </div>
                )
            })}
        </div>
    )
}

export default DeaslsList;