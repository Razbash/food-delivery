import { useState } from 'react';

import { useAppDispatch } from '../../../../store/redux';
import { Input } from '../../../../ui/Form';
import IAddUserAddressesProps from '../../interfaces/IAddUserAddressesProps';
import { sendShippingAddresses } from '../../store/shippingAddressesActions';
import './addUserAddresses.scss';

const AddUserAddresses = ({userId}: IAddUserAddressesProps) => {
    const [fieldCountry, setFieldCountry] = useState<string>('');
    const [fieldState, setFieldState] = useState<string>('');
    const [fieldCity, setFieldCity] = useState<string>('');
    const [fieldAddressPrimary, setFieldAddressPrimary] = useState<string>('');
    const [fieldAddressSecondary, setFieldAddressSecondary] = useState<string>('');
    const [fieldCoordinates, setFieldCoordinates] = useState<string>('');

    const dispatch = useAppDispatch();

    const newAddressSubmit = (e:React.SyntheticEvent) => {
        e.preventDefault();

        const newAddressData = {
            userId: userId,
            addressName: fieldCity,
            country: fieldCountry,
            state: fieldState,
            city: fieldCity,
            addressLine1: fieldAddressPrimary,
            addressLine2: fieldAddressSecondary,
            coordinates: fieldCoordinates,
        };

        dispatch(sendShippingAddresses(newAddressData, userId));
    };

    return(
        <div className="add-user-addresses">
            <h6 className="user-profile-block-title">New shipping address</h6>
            <form className="add-user-addresses__chapter" onSubmit={(e) => newAddressSubmit(e)}>
                <div className="add-user-addresses__inputs">
                    <Input label="Country*"
                        id="country"
                        placeholder="Enter country"
                        isRequired={true}
                        value={fieldCountry}
                        onChange={setFieldCountry}
                    />

                    <Input label="State*"
                        id="state"
                        placeholder="Enter state"
                        isRequired={true}
                        value={fieldState}
                        onChange={setFieldState}
                    />

                    <Input label="City*"
                        id="city"
                        placeholder="Enter city"
                        isRequired={true}
                        value={fieldCity}
                        onChange={setFieldCity}
                    />

                    <Input label="Address line 1*"
                        id="address_line_primary"
                        placeholder="Enter address"
                        isRequired={true}
                        value={fieldAddressPrimary}
                        onChange={setFieldAddressPrimary}
                    />

                    <Input label="Address line 2"
                        id="address_line_secondary"
                        placeholder="Enter address (optional)"
                        value={fieldAddressSecondary}
                        onChange={setFieldAddressSecondary}
                    />

                    <Input label="Coordinates"
                        id="сoordinates"
                        placeholder="Enter сoordinates (optional)"
                        value={fieldCoordinates}
                        onChange={setFieldCoordinates}
                    />
                </div>

                <button type="submit" className="button button--contained add-user-addresses__add-new-address-button">Add new address</button>
            </form>
        </div>
    );
};

export default AddUserAddresses;