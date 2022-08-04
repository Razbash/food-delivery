import CartIcon from "../../assets/icons/CartIcon";
import TruckIcon from "../../assets/icons/TruckIcon";
import ChartIcon from "../../assets/icons/ChartIcon";

const Statictics = () => {
    const statistics = [
        {
            icon: <CartIcon/>,
            title: "Orders received",
            modifier: "orang",
            value: "9,273"
        },
        {
            icon: <TruckIcon/>,
            title: "Orders delivered",
            modifier: "purple",
            value: "7,691"
        },
        {
            icon: <ChartIcon/>,
            title: "Revenue today",
            modifier: "blue",
            value: "$ 4,372.91",
            growth: 21,
        }
    ];

    return(
        <div className="statistics">
            {statistics.map((element, index) => {
                const iconMeta = "statistics__icon-wrapper statistics__icon-wrapper--" + element.modifier;

                return(
                    <div className="statistics__item" key={index}>
                        <div className={iconMeta}>
                            {element.icon}
                        </div>

                        <div className="statistics__wrapper">
                            <div className="statistics__value-and-growth">
                                <h6 className="statistics__value">{element.value}</h6>
                                {element.growth && element.growth > 0 ?
                                    <div className="statistics__growth">
                                        <span className="statistics__growth-icon">▲</span>
                                        <span className="statistics__growth-value">+{element.growth}%</span>
                                    </div>
                                : null}
                            </div>
                            <span className="statistics__title">{element.title}</span>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}

export default Statictics;