/// <reference path="../../../ymaps.d.ts" />

import { useEffect, useState } from "react";
import DotsIcon from "../../assets/icons/DotsIcon";
import { useAppDispatch, useAppSelector } from "../../hooks/redux";
import { IShippingAddressWithId } from "../../interfaces/IShippingAddresses";
import IUser from "../../interfaces/IUser";
import { fetchShippingAddresses, sendShippingAddresses } from "../../store/actions/shippingAddressesActions";
import Notification from "../Notification/Notification";

interface IProps {
    userData: IUser,
    showOnlyAddresses? : boolean,
    choseShippingAddress?: (address: IShippingAddressWithId) => void,
    selectedAddress?: IShippingAddressWithId,
}

const UserAddresses = (props: IProps) => {
    const {id} = props.userData;
    const {showOnlyAddresses, choseShippingAddress, selectedAddress} = props;
    const {error, loading, shippingAddresses} = useAppSelector(state => state.shippingAddresses);

    const dispatch = useAppDispatch();

    const [fieldCountry, setFieldCountry] = useState<string>("");
    const [fieldState, setFieldState] = useState<string>("");
    const [fieldCity, setFieldCity] = useState<string>("");
    const [fieldAddressPrimary, setFieldAddressPrimary] = useState<string>("");
    const [fieldAddressSecondary, setFieldAddressSecondary] = useState<string>("");
    const [fieldCoordinates, setFieldCoordinates] = useState<string>("");

    useEffect(() => {
        dispatch(fetchShippingAddresses(id));
    }, []);

    const onChoseShippingAddress = (address:IShippingAddressWithId) => {
        if (choseShippingAddress) {
            choseShippingAddress(address);
        }
    }

    const newAddressSubmit = (e:any) => {
        e.preventDefault();

        const newAddressData = {
            userId: id,
            addressName: fieldCity,
            country: fieldCountry,
            state: fieldState,
            city: fieldCity,
            addressLine1: fieldAddressPrimary,
            addressLine2: fieldAddressSecondary,
            coordinates: fieldCoordinates
        }

        dispatch(sendShippingAddresses(newAddressData, id));
    }

    return(
        <div className="user-addresses">
            <div className="user-addresses__content user-profile-content">
                {!showOnlyAddresses
                    ? <h6 className="user-addresses__content-title user-profile-block-title">Existing shipping addresses</h6>
                    : null
                }

                {shippingAddresses ?
                    <div className="user-addresses__chapter user-profile-chapter">
                        <div className="user-addresses__list">
                            {shippingAddresses.map((element, index) => {
                                const {id, addressName, country, state, city, addressLine1, addressLine2, coordinates} = element;
                                const mapId = 'user_address_' + id;
                                const itemMeta = (selectedAddress && id === selectedAddress.id) ? "user-addresses__list-item user-addresses__list-item--selected" : "user-addresses__list-item";

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
                                    <div className={itemMeta} key={id} onClick={() => onChoseShippingAddress(element)}>
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

                {!showOnlyAddresses ?
                    <>
                        <h6 className="user-addresses__content-title user-profile-block-title">New shipping address</h6>
                        <form className="user-addresses__chapter user-profile-chapter" onSubmit={(e) => newAddressSubmit(e)}>
                            <div className="user-addresses__inputs">
                                <div className="input-wrapper">
                                    <label htmlFor="country" className="input-label">Country*</label>
                                    <input type="text"
                                        id="country"
                                        className="input"
                                        placeholder="Enter country"
                                        value={fieldCountry}
                                        onChange={(e) => setFieldCountry(e.target.value)}
                                        required
                                    />
                                </div>
                                <div className="input-wrapper">
                                    <label htmlFor="state" className="input-label">State*</label>
                                    <input type="text"
                                        id="state"
                                        className="input"
                                        placeholder="Enter state"
                                        value={fieldState}
                                        onChange={(e) => setFieldState(e.target.value)}
                                        required
                                    />
                                </div>
                                <div className="input-wrapper">
                                    <label htmlFor="city" className="input-label">City*</label>
                                    <input type="text"
                                        id="city"
                                        className="input"
                                        placeholder="Enter city"
                                        value={fieldCity}
                                        onChange={(e) => setFieldCity(e.target.value)}
                                        required
                                    />
                                </div>

                                <div className="input-wrapper">
                                    <label htmlFor="address_line_primary" className="input-label">Address line 1*</label>
                                    <input type="text"
                                        id="address_line_primary"
                                        className="input"
                                        placeholder="Enter address"
                                        value={fieldAddressPrimary}
                                        onChange={(e) => setFieldAddressPrimary(e.target.value)}
                                        required
                                    />
                                </div>
                                <div className="input-wrapper">
                                    <label htmlFor="address_line_secondary" className="input-label">Address line 2</label>
                                    <input type="text"
                                        id="address_line_secondary"
                                        className="input"
                                        placeholder="Enter address (optional)"
                                        value={fieldAddressSecondary}
                                        onChange={(e) => setFieldAddressSecondary(e.target.value)}
                                    />
                                </div>
                                <div className="input-wrapper">
                                    <label htmlFor="сoordinates" className="input-label">Coordinates</label>
                                    <input type="text"
                                        id="сoordinates"
                                        className="input"
                                        placeholder="Enter сoordinates (optional)"
                                        value={fieldCoordinates}
                                        onChange={(e) => setFieldCoordinates(e.target.value)}
                                    />
                                </div>
                            </div>
                            <button type="submit" className="button button--contained user-addresses__add-new-address-button">Add new address</button>
                        </form>
                    </>
                : null}
            </div>

            <Notification/>
        </div>
    )
}

export default UserAddresses;