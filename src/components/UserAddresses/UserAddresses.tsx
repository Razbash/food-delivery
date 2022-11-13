/// <reference path="../../../ymaps.d.ts" />

import { useEffect } from "react";
import DotsIcon from "../../assets/icons/DotsIcon";
import IUser from "../../interfaces/IUser";

interface IProps {
    userData: IUser,
}

const UserAddresses = (props: IProps) => {
    const {shippingAddresses} = props.userData;

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

    return(
        <div className="user-addresses">
            <div className="user-addresses__content user-profile-content">
                <h6 className="user-addresses__content-title user-profile-block-title">Existing shipping addresses</h6>
                {shippingAddresses ?
                    <div className="user-addresses__chapter user-profile-chapter">
                        <div className="user-addresses__list">
                            {shippingAddresses.map((element, index) => {
                                const {id, addressName, country, state, city, addressLine1, addressLine2, coordinates} = element;
                                const mapId = 'user_address_' + id;

                                if (coordinates) {
                                    ymaps.ready().then(() => {

                                        let map =  new ymaps.Map(mapId, {
                                            center: coordinates,
                                            zoom: 8,
                                            controls: ['none']
                                        });
                                    });
                                }

                                return(
                                    <div className="user-addresses__list-item" key={id}>
                                        <div className="user-addresses__map-wrapper" style={{"width": "100px", "height": "100px"}}>
                                            {coordinates ? <div className="user-addresses__map" id={mapId} style={{"width": "100px", "height": "100px"}}></div> : null}
                                        </div>

                                        <div className="user-addresses__info">
                                            <div className="user-addresses__item-title">
                                                <span className="user-addresses__city">{addressName}</span>
                                                <DotsIcon/>
                                            </div>
                                            <span className="user-addresses__state">{city}, {state}, {country}</span>
                                            <p className="user-addresses__address">{addressLine1}</p>
                                            {addressLine2 ? <p className="user-addresses__address">{addressLine2}</p> : null}
                                        </div>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                : null}

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