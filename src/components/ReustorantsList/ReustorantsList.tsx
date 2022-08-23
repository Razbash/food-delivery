import royalSushiHouseImage from '../../assets/images/reustorants/royal-sushi-house.png';
import burgersPizzaImage from '../../assets/images/reustorants/burgers-pizza.png';
import ninjaSushiImage from '../../assets/images/reustorants/ninja-sushi.png';
import sushiMasterImage from '../../assets/images/reustorants/sushi-master.png';
import japaneseSushiImage from '../../assets/images/reustorants/japanese-sushi.png';
import kobeImage from '../../assets/images/reustorants/kobe.png';
import CartIcon from '../../assets/icons/CartIcon';
import ReustorantDeliveryInfo from '../ReustorantDelivryInfo/ReustorantDeliveryInfo';
import { Link } from 'react-router-dom';

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

interface IProps {
    showCounter?: boolean,
    shortList?: boolean
}

const ReustorantsList = (props: IProps) => {
    const {showCounter, shortList} = props;
    const reustorants: IReaustorant[] = [
        {
            id: 0,
            name: "Royal Sushi House",
            minDeliveryTime: 30,
            maxDeliveryTime: 40,
            minAmount: 32,
            categories: ["sushi"],
            featured: true,
            image: royalSushiHouseImage,
        },
        {
            id: 1,
            name: "Burgers & Pizza",
            minDeliveryTime: 40,
            maxDeliveryTime: 60,
            minAmount: 24,
            categories: ["burger", "pizza"],
            featured: true,
            image: burgersPizzaImage,
        },
        {
            id: 2,
            name: "Ninja Sushi",
            minDeliveryTime: 20,
            maxDeliveryTime: 40,
            minAmount: 40,
            categories: ["sushi"],
            featured: false,
            image: ninjaSushiImage,
        },
        {
            id: 3,
            name: "Sushi Master",
            minDeliveryTime: 60,
            maxDeliveryTime: 70,
            minAmount: 49,
            categories: ["sushi"],
            featured: false,
            image: sushiMasterImage,
        },
        {
            id: 4,
            name: "Japanese Sushi",
            minDeliveryTime: 30,
            maxDeliveryTime: 50,
            minAmount: 104,
            categories: ["sushi"],
            featured: false,
            image: japaneseSushiImage,
        },
        {
            id: 5,
            name: "Kobe",
            minDeliveryTime: 20,
            maxDeliveryTime: 30,
            minAmount: 57,
            categories: ["sushi"],
            featured: false,
            image: kobeImage,
        },
    ];

    return(
        <>
            {showCounter ? <span className="reustorants-list-counter">Found 12 restaurants</span> : null}
            <div className="reustorants-list">
                {reustorants.map(element => {
                    const {id, name, minDeliveryTime, maxDeliveryTime, minAmount, categories, featured, image} = element;
                    const backgroundImageStyle = {
                        'background': 'url(' + image + ')',
                        'backgroundSize': 'cover',
                        'backgroundPosition': 'center'
                    }

                    return(
                        <div className="reustorants-list__item" key={id}>
                            <div className="reustorants-list__image" style={backgroundImageStyle}></div>
                            <div className="reustorants-list__info">
                                <div className="reustorants-list__title">
                                    <Link to="/reustorants/reustorant" className="reustorants-list__name">
                                        {name}
                                    </Link>

                                    <CartIcon/>
                                </div>

                                <ReustorantDeliveryInfo
                                    minDeliveryTime={minDeliveryTime}
                                    maxDeliveryTime={maxDeliveryTime}
                                    minAmount={minAmount}
                                />
                                (Иконка категории)
                            </div>

                            {featured ? <span className="reustorants-list__label">Featured</span> : null}
                        </div>
                    )
                })}
            </div>

            {shortList ? <button className="button reustorants-list__load-more-button">Load more</button> : null}
        </>
    )
}

export default ReustorantsList;