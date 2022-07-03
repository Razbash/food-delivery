import pizzaImage from '../../assets/images/categories/pizza.png';
import burgerImage from '../../assets/images/categories/burger.png';
import bbqImage from '../../assets/images/categories/bbq.png';
import sushiImage from '../../assets/images/categories/sushi.png';
import veganImage from '../../assets/images/categories/vegan.png';
import dessertImage from '../../assets/images/categories/dessert.png';
import CategoryListItem from '../CategoryListItem/CategoryListItem';
import { ICategory } from "../../interfaces/ICategory";

const CategoryList = () => {
    const categories:Array<ICategory> = [
        {
            id: 0,
            name: "Pizza",
            icon: pizzaImage,
        },
        {
            id: 1,
            name: "Burger",
            icon: burgerImage,
        },
        {
            id: 2,
            name: "BBQ",
            icon: bbqImage,
        },
        {
            id: 3,
            name: "Sushi",
            icon: sushiImage,
        },
        {
            id: 4,
            name: "Vegan",
            icon: veganImage,
        },
        {
            id: 5,
            name: "Dessert",
            icon: dessertImage,
        }
    ];

    return(
        <div className="categories-list">
            {categories.map(element => {
                const {id, name, icon} = element;

                return(
                    <CategoryListItem id={id} name={name} icon={icon} />
                )
            })}
        </div>
    );
}

export default CategoryList;