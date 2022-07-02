import desertImage from "../../assets/images/promotions/desert.png";
import burgerImage from "../../assets/images/promotions/burger.png";

interface IPromo {
    id: number,
    name: string,
    text: string,
    category: string,
    image: string,
    background: string,
    color: string,
}

const DeaslsList = () => {
    const promo: Array<IPromo> = [
        {
            id: 0,
            name: "All deserts",
            text: "20% off",
            category: "Deserty",
            image: desertImage,
            background: "#F3F4FF",
            color: "#4E60FF",
        },
        {
            id: 1,
            name: "Big burgers",
            text: "50% off",
            category: "Fooddies",
            image: burgerImage,
            background: "#FFF3ED",
            color: "#FD6D22",
        }
    ];

    return(
        <div className="promotion-list">
            {promo.map(element => {
                const {image, name, text, category, background, color} = element;
                const elementStyle = {"background": background};
                const titleStyle = {"color": color};

                return(
                    <div className="promotion-list__item"
                        style={elementStyle}
                        key={element.id}
                    >
                        <div className="promotion-list__image-wrapper">
                            <img src={image}
                                alt={name}
                                className="promotion-list__image"
                                width="200"
                            />
                        </div>

                        <div className="promotion-list__info">
                            <h5 className="promotion-list__name">
                                {name}
                            </h5>
                            <h2 className="promotion-list__text" style={titleStyle}>
                                {text}
                            </h2>
                            <span className="promotion-list__category">
                                {category}
                            </span>
                        </div>
                    </div>
                );
            })}
        </div>
    )
}

export default DeaslsList;