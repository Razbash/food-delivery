import { useState } from "react";
import DealsList from "../DealsList/DealsList";

const EnhancedDeals = () => {
    const [currentTab, setCurrentTab] = useState("active");
    const tabs = ["active", "scheduled", "expired"];

    const selectTab = (tab: string) => {
        setCurrentTab(tab);
    }

    return(
        <div className="enhanced-deals">
            <div className="enhanced-deals__title">
                <h5 className="block-title">Restaurant promotions</h5>
                <button className="button button--contained">Create promotion</button>
            </div>

            <div className="enhanced-deals__tabs">
                {tabs.map((element, index) => {
                    let meta = "enhanced-deals__tab-item";

                    if (element === currentTab) {
                        meta += " enhanced-deals__tab-item--selected";
                    }

                    return(
                        <div className={meta}
                            tabIndex={1}
                            onClick={() => selectTab(element)}
                            key={index}
                        >
                            {element}
                        </div>
                    )
                })}
            </div>

            <DealsList filter={currentTab}/>
        </div>
    )
}

export default EnhancedDeals;