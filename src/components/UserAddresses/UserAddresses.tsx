/// <reference path="../../../ymaps.d.ts" />

import { useEffect } from "react";
import DotsIcon from "../../assets/icons/DotsIcon";

const UserAddresses = () => {
    const addresses = [
        {
            "city": "New York",
            "state": "New York State, USA",
            "address": "4517 Washington Ave. Manchester, 11004",
            "coordinates": [50.450100, 30.523400],
        },
        {
            "city": "San Diego",
            "state": "California State, USA",
            "address": "3891 Ranchview Dr. Richardson, 62639",
            "coordinates": [50.450100, 30.523400],
        }
    ];

    useEffect(() => {
        addresses.map((element, index) => {
            ymaps.ready().then(() => {
                const id = 'user_address_' + index;

                let map =  new ymaps.Map(id, {
                    center: element.coordinates,
                    zoom: 8,
                    controls: ['none']
                });
            });
        });
    }, []);

    return(
        <div className="user-addresses">
            <h5 className="block-title">Address</h5>
            <div className="user-addresses__content user-profile-content">
                <h6 className="user-addresses__content-title user-profile-block-title">Existing shipping addresses</h6>
                <div className="user-addresses__chapter user-profile-chapter">
                    <div className="user-addresses__list">
                        {addresses.map((element, index) => {
                            const {city, state, address, coordinates} = element;
                            const id = 'user_address_' + index;

                            return(
                                <div className="user-addresses__list-item" key={index}>
                                    <div className="user-addresses__map" id={id} style={{"width": "96px", "height": "100%"}}></div>
                                    <div className="user-addresses__info">
                                        <div className="user-addresses__item-title">
                                            <span className="user-addresses__city">{city}</span>
                                            <DotsIcon/>
                                        </div>
                                        <span className="user-addresses__state">{state}</span>
                                        <p className="user-addresses__address">{address}</p>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>

                <h6 className="user-addresses__content-title user-profile-block-title">New shipping address</h6>
                <div className="user-addresses__chapter user-profile-chapter">
                    <div className="user-addresses__inputs">
                        <div className="user-addresses__main-address-info">
                            <div className="input-wrapper">
                                <label htmlFor="country" className="input-label">Country</label>
                                <input type="text"
                                    id="country"
                                    className="input"
                                    placeholder="Enter country"
                                />
                            </div>
                            <div className="input-wrapper">
                                <label htmlFor="state" className="input-label">State</label>
                                <input type="text"
                                    id="state"
                                    className="input"
                                    placeholder="Enter state"
                                />
                            </div>
                            <div className="input-wrapper">
                                <label htmlFor="city" className="input-label">City</label>
                                <input type="text"
                                    id="city"
                                    className="input"
                                    placeholder="Enter city"
                                />
                            </div>
                        </div>
                        <div className="user-addresses__additional-address-info">
                            <div className="input-wrapper">
                                <label htmlFor="address_line_primary" className="input-label">Address line 1</label>
                                <input type="text"
                                    id="address_line_primary"
                                    className="input"
                                    placeholder="Enter address"
                                />
                            </div>
                            <div className="input-wrapper">
                                <label htmlFor="address_line_secondary" className="input-label">Address line 2</label>
                                <input type="text"
                                    id="address_line_secondary"
                                    className="input"
                                    placeholder="Enter address (optional)"
                                />
                            </div>
                        </div>
                    </div>
                    <button className="button button--contained user-addresses__add-new-address-button">Add new address</button>
                </div>
            </div>
        </div>
    )
}

export default UserAddresses;